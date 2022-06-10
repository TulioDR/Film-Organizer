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
            0.25: "1px",
            18: "4.5rem",
            24: "6rem",
            108: "27rem",
            126: "31.5rem",
            144: "36rem",
            "35.8p": "35.8%",
         },
         minWidth: {
            18: "4.5rem",
            24: "6rem",
            36: "9rem",
            72: "18rem",
            108: "27rem",
            126: "31.5rem",
            144: "36rem",
         },
         maxWidth: {
            "4/5": "80%",
         },
         minHeight: {
            52: "13rem",
         },
         maxHeight: {
            "4/5": "80%",
         },
         padding: {
            62: "15.5rem",
         },
         margin: {
            62: "15.5rem",
         },
         colors: {
            purple: {
               DEFAULT: "#5B21CE",
               dark: "#1e0840",
               light: "#cecce4",
            },
            gray: {
               DEFAULT: "#282828",
               1: "#d2d3d3",
               2: "#7d7f80",
               3: "#555759",
               4: "#2d3032",
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
            seasonCard: "-5px 0px 5px 0px rgba(0,0,0,0.5)",
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
