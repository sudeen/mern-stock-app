/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
    require("tailwind-scrollbar"),
    // require("@tailwindcss/line-clamp"), As of Tailwind CSS v3.3, the `@tailwindcss/line-clamp` plugin is now included by default.
  ],
};
