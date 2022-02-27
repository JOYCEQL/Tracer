


import { get } from 'lodash-es'
const mountedVarKeys: Array<string> = []

function StyleProvider(styleVars: object) {
  mountedVarKeys.forEach((key) => document.documentElement.style.removeProperty(key))
  mountedVarKeys.length = 0
  const styles = formatStyleVars(styleVars)
  Object.entries(styles).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
    mountedVarKeys.push(key)
  })
}
export function setThemes(config: object, name: string) {
  const themes = get(config, name, {})
  const styleVars = Object.entries(themes).reduce((styleVars: object, [key, value]) => {
    styleVars[`--doc-${key}`] = value
    return styleVars
  }, {})

  StyleProvider(styleVars)
}

export function formatStyleVars(styleVars: object) {
  return Object.entries(styleVars ?? {}).reduce((styles: any, [key, value]) => {
    const cssVar = key.startsWith('--') ? key : `--${kebabCase(key)}`
    styles[cssVar] = value
    return styles
  }, {})
}

export function kebabCase(str: string) {
  const reg = /([^-])([A-Z])/g
  return str.replace(reg, '$1-$2').replace(reg, '$1-$2').toLowerCase()
}


export function getBrowserThemes(themes = 'tracer-theme') {
  let currentThemes = window.localStorage.getItem(themes)

  if (!currentThemes) {
    currentThemes = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'darkThemes' : 'themes'
    window.localStorage.setItem(themes, currentThemes)
  }

  return currentThemes
}
