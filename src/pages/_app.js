import 'styles/globals.css'
import "tailwindcss/tailwind.css"
import plugin from 'tailwindcss/lib/plugins/backgroundPosition'
// import defaultTailwindConfig from "tailwindcss/stubs/defaultConfig.stub"
import defaultTheme from "tailwindcss/defaultTheme"
import resolveConfig from 'tailwindcss/resolveConfig'
import dlv from 'dlv'

import { ClassTable } from '../components/ClassTable'

const defaultConfig = resolveConfig({ theme: defaultTheme })

// let normalizeProperties = function (input) {
//   if (typeof input !== 'object') return input
//   if (Array.isArray(input)) return input.map(normalizeProperties)
//   return Object.keys(input).reduce((newObj, key) => {
//     let val = input[key]
//     let newVal = typeof val === 'object' ? normalizeProperties(val) : val
//     newObj[key.replace(/([a-z])([A-Z])/g, (m, p1, p2) => `${p1}-${p2.toLowerCase()}`)] = newVal
//     return newObj
//   }, {})
// }

// function getUtilities(plugin) {
//   if (!plugin) return {}
//   const utilities = {}
//   plugin()({
//     addUtilities: (utils) => {
//       utils = Array.isArray(utils) ? utils : [utils]
//       for (let i = 0; i < utils.length; i++) {
//         for (let prop in utils[i]) {
//           utilities[prop] = normalizeProperties(utils[i][prop])
//         }
//       }
//     },
//     config: () => ({
//       future: 'all',
//     }),
//     theme: (path, defaultValue) => dlv(defaultConfig.theme, path, defaultValue),
//     variants: () => [],
//     e: (x) => x.replace(/([:.])/g, '\\$1'),
//     corePlugins: () => true,
//   })
//   return utilities
// }

function MyApp({ Component, pageProps }) {
  // const utilities = {}
  // Object.assign(utilities, getUtilities(plugin))
  // console.log({
  //   utilities
  // })

  return <Component {...pageProps} />
}

export default MyApp
