/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark", "cupcake"],
    mytheme: {
      "primary": "#4F00FF",
      "secondary": "#003dFF",
      "accent": "#00ae94",
    },
    }
  },
  content: [
    "./templates/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugins: [require("daisyui")],
  ],
}

