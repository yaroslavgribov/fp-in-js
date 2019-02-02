import theme from 'mdx-deck/themes'

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: 'SF Mono',
  h3: {
    fontSize: '1em'
  },
  // custom colors
  colors: {
    ...theme.colors, // include existing theme colors
    link: '#0ff'
  },
  monospace: 'SF Mono'
}
