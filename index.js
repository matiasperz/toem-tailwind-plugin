const plugin = require('tailwindcss/plugin')

/* https://github.com/tailwindlabs/tailwindcss/blob/next/packages/tailwindcss/src/utilities.ts */

const DIVISION_REGEX = /(\d+)(?:\/?)(\d*)/ /* [number]/[number] separated by groups */

const buildPropsObject = (propOrProps, value) => {
  const targetProps = Array.isArray(propOrProps) ? propOrProps : [propOrProps]

  return targetProps.reduce((acc, prop) => {
    acc[prop] = value
    return acc
  }, {})
}

// ONLY VALUES THAT CAN RECEIVE EM UNITS AS VALUES
const DYNAMIC_PROPS = [
  ['p', 'padding'],
  ['pt', 'padding-top'],
  ['pr', 'padding-right'],
  ['pb', 'padding-bottom'],
  ['pl', 'padding-left'],
  ['px', ['padding-left', 'padding-right']],
  ['py', ['padding-top', 'padding-bottom']],
  ['m', 'margin'],
  ['mt', 'margin-top'],
  ['mr', 'margin-right'],
  ['mb', 'margin-bottom'],
  ['ml', 'margin-left'],
  ['mx', ['margin-left', 'margin-right']],
  ['my', ['margin-top', 'margin-bottom']],
  ['w', 'width'],
  ['min-w', 'min-width'],
  ['max-w', 'max-width'],
  ['h', 'height'],
  ['min-h', 'min-height'],
  ['max-h', 'max-height'],
  ['text', 'font-size'],
  ['rounded', 'border-radius'],
  ['rounded-t', ['border-top-left-radius', 'border-top-right-radius']],
  ['rounded-r', ['border-top-right-radius', 'border-bottom-right-radius']],
  ['rounded-b', ['border-bottom-right-radius', 'border-bottom-left-radius']],
  ['rounded-l', ['border-top-left-radius', 'border-bottom-left-radius']],
  ['rounded-tl', 'border-top-left-radius'],
  ['rounded-tr', 'border-top-right-radius'],
  ['rounded-br', 'border-bottom-right-radius'],
  ['rounded-bl', 'border-bottom-left-radius'],
  ['border', 'border-width'],
  ['border-t', 'border-top-width'],
  ['border-r', 'border-right-width'],
  ['border-b', 'border-bottom-width'],
  ['border-l', 'border-left-width'],
  ['size', ['width', 'height']],
  ['left', 'left'],
  ['right', 'right'],
  ['top', 'top'],
  ['bottom', 'bottom'],
  ['gap', 'gap'],
  ['gap-x', 'column-gap'],
  ['gap-y', 'row-gap'],
  ['inset', ['top', 'right', 'bottom', 'left']],
  ['inset-x', ['left', 'right']],
  ['inset-y', ['top', 'bottom']],
  /* TODO: This could be a function that receives the value so we can do complex calcs in it. */
  ['space-y', { selector: ':where(& > :not(:last-child))', props: ['margin-bottom'] }],
  ['space-x', { selector: ':where(& > :not(:last-child))', props: ['margin-right'] }],
  ['translate-x', '--tw-translate-x'],
  ['translate-y', '--tw-translate-y'],
  ['translate-z', '--tw-translate-z'],
  ['scale-x', '--tw-scale-x'],
  ['scale-y', '--tw-scale-y'],
  ['scale-z', '--tw-scale-z'],
  ['rotate-x', '--tw-rotate-x'],
  ['rotate-y', '--tw-rotate-y'],
  ['rotate-z', '--tw-rotate-z'],
  ['skew-x', '--tw-skew-x'],
  ['skew-y', '--tw-skew-y']
]

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

const toemTailwindPlugin = plugin.withOptions(({ defaultBase = 16 } = {}) => {
  return ({ matchUtilities, config }) => {
    
    DYNAMIC_PROPS.forEach((p) => {
      const isConfig = typeof p[1] === 'object' && !Array.isArray(p[1])
      const selector = isConfig ? p[1].selector : null
      const props = isConfig ? p[1].props : p[1]

      matchUtilities(
        {
          [p[0] + '-em']: (v) => {
            const divisionComps = DIVISION_REGEX.exec(v)
  
            if (!divisionComps) {
              return buildPropsObject(p[1], '/* toem() error: invalid arguments */')
            }
  
            const isSingleValue = divisionComps[1] && !divisionComps[2]
  
            if (isSingleValue) {
              return buildPropsObject(props, `calc(${divisionComps[1]} / var(--toem-base, ${defaultBase}) * 1em)`)
            }
  
            const emValue = divisionComps[1] / divisionComps[2]
  
            if (selector) {
              return {
                [selector]: buildPropsObject(props, emValue + 'em')
              }
            }
  
            return buildPropsObject(props, emValue + 'em')
          }
        },
        {
          values: config('spacing'),
        }
      )
    })
  }
})

module.exports = toemTailwindPlugin
