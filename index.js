const plugin = require('tailwindcss/plugin')

/* https://github.com/tailwindlabs/tailwindcss/blob/next/packages/tailwindcss/src/utilities.ts */

const DIVISION_REGEX =
  /(\d+)(?:\/)(\d+)/ /* [number]/[number] separated by groups */

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
  ['space-x', { selector: ':where(& > :not(:last-child))', props: ['margin-right'] }]
]

const toemTailwindPlugin = plugin(({ matchUtilities }) => {
  DYNAMIC_PROPS.forEach((p) => {
    matchUtilities(
      {
        [p[0] + '-em']: (v) => {
          const divisionComps = DIVISION_REGEX.exec(v)

          const isConfig = typeof p[1] === 'object' && !Array.isArray(p[1])
          const props = isConfig ? p[1].props : p[1]
          const selector = isConfig ? p[1].selector : null

          /* TODO: Improve this, p[1] is not allways the actual prop */
          if (!divisionComps) {
            return buildPropsObject(p[1], '/* toem() error: invalid division */')
          }

          const emValue = divisionComps[1] / divisionComps[2]

          if (selector) {
            return {
              [selector]: buildPropsObject(props, emValue + 'em')
            }
          }

          return buildPropsObject(p[1], emValue + 'em')
        }
      }
    )
  })
})

module.exports = toemTailwindPlugin
