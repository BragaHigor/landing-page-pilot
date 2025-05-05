/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: ["class"],
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/app/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      container: {
         center: true,
         padding: 15,
      },
      screens: {
         sm: "640px",
         md: "768px",
         lg: "960px",
         xl: "1200px",
      },
      fontFamily: {
         primary: "var(--font-dmSans)",
         secondary: "var(--font-barlow)",
      },
      extend: {
         colors: {
            primary: "#121315",
            secondary: "#666666",
            accent: "#ffca3b",
            border: "#d7d7d7",
         },
         boxShadow: {
            custom: "0px 4px 54px 10px rgba(18, 19, 21, 0.06)",
         },
         backgroundImage: {
            hero: "url('/public/assets/img/hero/bg.jpg')",
         },
      },
   },
   // eslint-disable-next-line @typescript-eslint/no-require-imports
   plugins: [require("tailwindcss-animate")],
};
