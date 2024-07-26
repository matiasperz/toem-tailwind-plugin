import plugin from "tailwindcss/plugin";

/* https://github.com/tailwindlabs/tailwindcss/blob/next/packages/tailwindcss/src/utilities.ts */

const DIVISION_REGEX =
  /(?<dividend>\d+)(?:\/?)(?<divisor>\d*)/; /* [number]/[number] separated by groups */
const INVALID_ERROR = "/* toem() error: invalid arguments */";

const buildStylesObject = (
  propOrProps: string | string[],
  value: string,
  selector?: string
) => {
  const targetProps = Array.isArray(propOrProps) ? propOrProps : [propOrProps];

  const res = targetProps.reduce((acc, prop) => {
    acc[prop] = value;
    return acc;
  }, {});

  if (selector) {
    return {
      [selector]: res,
    };
  }

  return res;
};

export type DynamicProps = [
  /* The name of the class */
  string,
  /* The properties that the class will affect */
  string | string[] | { selector: string; props: string[] }
][];

export type Config = {
  defaultBase?: number;
  autoBase?: boolean;
  customProps?: DynamicProps;
};

// ONLY VALUES THAT CAN RECEIVE EM UNITS AS VALUES
const DYNAMIC_PROPS: DynamicProps = [
  ["p", "padding"],
  ["pt", "padding-top"],
  ["pr", "padding-right"],
  ["pb", "padding-bottom"],
  ["pl", "padding-left"],
  ["px", ["padding-left", "padding-right"]],
  ["py", ["padding-top", "padding-bottom"]],
  ["m", "margin"],
  ["mt", "margin-top"],
  ["mr", "margin-right"],
  ["mb", "margin-bottom"],
  ["ml", "margin-left"],
  ["mx", ["margin-left", "margin-right"]],
  ["my", ["margin-top", "margin-bottom"]],
  ["w", "width"],
  ["min-w", "min-width"],
  ["max-w", "max-width"],
  ["h", "height"],
  ["min-h", "min-height"],
  ["max-h", "max-height"],
  ["text", "font-size"],
  ["leading", "line-height"],
  ["rounded", "border-radius"],
  ["rounded-t", ["border-top-left-radius", "border-top-right-radius"]],
  ["rounded-r", ["border-top-right-radius", "border-bottom-right-radius"]],
  ["rounded-b", ["border-bottom-right-radius", "border-bottom-left-radius"]],
  ["rounded-l", ["border-top-left-radius", "border-bottom-left-radius"]],
  ["rounded-tl", "border-top-left-radius"],
  ["rounded-tr", "border-top-right-radius"],
  ["rounded-br", "border-bottom-right-radius"],
  ["rounded-bl", "border-bottom-left-radius"],
  ["border", "border-width"],
  ["border-t", "border-top-width"],
  ["border-r", "border-right-width"],
  ["border-b", "border-bottom-width"],
  ["border-l", "border-left-width"],
  ["size", ["width", "height"]],
  ["left", "left"],
  ["right", "right"],
  ["top", "top"],
  ["bottom", "bottom"],
  ["gap", "gap"],
  ["gap-x", "column-gap"],
  ["gap-y", "row-gap"],
  ["inset", ["top", "right", "bottom", "left"]],
  ["inset-x", ["left", "right"]],
  ["inset-y", ["top", "bottom"]],
  /* TODO: This could be a function that receives the value so we can do complex calcs in it. */
  [
    "space-y",
    { selector: ":where(& > :not(:last-child))", props: ["margin-bottom"] },
  ],
  [
    "space-x",
    { selector: ":where(& > :not(:last-child))", props: ["margin-right"] },
  ],
  ["translate-x", "--tw-translate-x"],
  ["translate-y", "--tw-translate-y"],
  ["translate-z", "--tw-translate-z"],
  ["scale-x", "--tw-scale-x"],
  ["scale-y", "--tw-scale-y"],
  ["scale-z", "--tw-scale-z"],
  ["rotate-x", "--tw-rotate-x"],
  ["rotate-y", "--tw-rotate-y"],
  ["rotate-z", "--tw-rotate-z"],
  ["skew-x", "--tw-skew-x"],
  ["skew-y", "--tw-skew-y"],
];

/*
  For the transform we can maybe still use vars like --tw-translate-y-em and then
  gather all by just doing:

  .translate-x-em-*,
  .translate-y-em-*,
  .translate-z-em-*,
  .scale-x-em-*,
  .scale-y-em-*,
  .scale-z-em-*,
  .rotate-x-em-*,
  .rotate-y-em-*,
  .rotate-z-em-*,
  .skew-x-em-*,
  .skew-y-em-* {
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-translate-z: 0;
    --tw-scale-x: 0;
    --tw-scale-y: 0;
    --tw-scale-z: 0;
    --tw-rotate-x: 0;
    --tw-rotate-y: 0;
    --tw-rotate-z: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;

    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z))
  }
*/

const toemTailwindPlugin = plugin.withOptions(
  ({ defaultBase = 16, autoBase = false, customProps = [] }: Config = {}) => {
    return ({ matchUtilities }) => {
      const mergedProps = [
        ...DYNAMIC_PROPS,
        ...customProps,
      ] satisfies DynamicProps;

      mergedProps.forEach((p) => {
        const [identifier, propPropsOrConfig] = p;

        let selector: string;
        let props: string[] | string;

        if (
          typeof propPropsOrConfig === "object" &&
          "selector" in propPropsOrConfig
        ) {
          selector = propPropsOrConfig.selector;
          props = propPropsOrConfig.props;
        } else if (Array.isArray(propPropsOrConfig)) {
          props = propPropsOrConfig;
        } else {
          props = propPropsOrConfig;
        }

        matchUtilities({
          [identifier + "-em"]: (v) => {
            const divisionComps = DIVISION_REGEX.exec(v);
            const comps = divisionComps?.groups as {
              dividend: string;
              divisor: string;
            };
            const numericComps = {
              dividend: parseInt(comps.dividend),
              divisor: parseInt(comps.divisor),
            };

            if (!divisionComps) {
              return buildStylesObject(props, INVALID_ERROR, selector);
            }

            const isSingleValue = Boolean(comps.dividend) && !comps.divisor;

            // if (isSingleValue) {
            //   const numericValue = parseInt(comps.dividend);

            //   if (isNaN(numericValue)) {
            //     return buildStylesObject(props, INVALID_ERROR, selector);
            //   }

            //   return buildStylesObject(
            //     props,
            //     `calc(${numericComps.dividend} / var(--toem-base, ${defaultBase}) * 1em)`,
            //     selector
            //   )
            // }

            /* 
              1. Dividend is always required.
              2. Divisor is optional, but if it's present it must be a number.
            */
            if (
              isNaN(numericComps.dividend) ||
              (!isSingleValue && isNaN(numericComps.divisor))
            ) {
              return buildStylesObject(props, INVALID_ERROR, selector);
            }

            const emValue = isSingleValue
              ? `calc(${numericComps.dividend} / var(--toem-base, ${defaultBase}) * 1em)`
              : (numericComps.dividend / numericComps.divisor) + "em";

            if (identifier === "text" && autoBase && !isSingleValue) {
              const styles = buildStylesObject(props, emValue);

              if (selector) {
                return {
                  [selector]: styles,
                };
              }

              return {
                ...styles,
                "--toem-base": comps.dividend + '/* Autobase enabled */'
              };
            }

            return buildStylesObject(props, emValue, selector);
          },
        });
      });

      matchUtilities({
        ["base-em"]: (v) => {
          return {
            "--toem-base": v,
          };
        },
      });
    };
  }
);

export default toemTailwindPlugin;
