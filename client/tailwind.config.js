module.exports = {
   // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
   purge: false,
   darkMode: "class", // or 'media' or 'class'

   theme: {
      extend: {
         spacing: {
            125: "31.25rem",
            180: "45rem",
         },
         width: {
            18: "4.5rem",
            24: "6rem",
            108: "27rem",
         },
         minWidth: {
            24: "6rem",
            36: "9rem",
            72: "18rem",
            108: "27rem",
         },
         left: {
            66: "16.5rem",
         },
         colors: {
            gray: {
               DEFAULT: "#282828",
               light: "#383838",
               lightDark: "#212121",
               dark: "#181818",
            },
         },
         brightness: {
            40: ".40",
         },
         boxShadow: {
            material: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
         },
      },
   },

   variants: {
      extend: {
         transform: ["hover, group-hover"],
         translate: ["hover, group-hover"],
         fontSize: ["hover"],
         width: ["hover"],
         transitionDelay: ["hover"],
         overflow: ["hover"],
         borderColor: ["active"],
         margin: ["first"],
         aspectRatio: ["responsive"],
         display: ["group-hover"],
         brightness: ["hover"],
         scale: ["group-hover"],
      },
   },
   plugins: [
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/line-clamp"),
   ],
};
