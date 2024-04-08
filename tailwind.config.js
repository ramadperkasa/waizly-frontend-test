module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    colors: {
      primary: '#F8A51D',
      accent: "#FCDFA9"
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}