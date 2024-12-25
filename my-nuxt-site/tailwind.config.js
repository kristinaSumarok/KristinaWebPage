/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}", // Include all Vue and JavaScript/TypeScript files in components
    "./layouts/**/*.vue",           // Include all layout files
    "./pages/**/*.vue",             // Include all page files
    "./composables/**/*.{js,ts}",   // Include composables if used
    "./plugins/**/*.{js,ts}",       // Include plugins if used
    "./nuxt.config.{js,ts}",        // Include the Nuxt configuration file
    "./app.vue",                    // Include the main app.vue file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

