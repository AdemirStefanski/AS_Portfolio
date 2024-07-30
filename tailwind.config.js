/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    maxHeight: {
      '372': '300px',
    },
    extend: {
      height: {
        '350': '350px',
        '550': '550px',
        '600': '600px',
        '26-6667': '26.66666666666667%',
        '24-5': '24.5%',
        '29': '29%',
        '9': '9%',
        '8-3333': '8,333333333333333%',
        '6-6667': '6.666666666666667%',
      },
      width: {
        '300': '300px',
        '360': '360px',
        '350': '350px',
        '363': '363px',
      },
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-50": "#deefe7",
        "primary-100": "#b4bec8", //
        "primary-300": "#149a9b",
        "primary-500": "#3ca6a6", //menu item selected.
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        "text-color-blue": "#012130", //base text color.
        "my-colors-green": "#d5dadf", //menu not at top.
        "my-colors-green-10": "#13678b", //mobile menu color.
        "my-colors-menu-selected": "#3ca6a6", //menu item selcted.
        "my-colors-menu-hover": "#149a9b", //menu item hover.
        "my-colors-card-border": "#002333", //card border
        "my-colors-hover-card": "#52c3ff", //demo and card hover color
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
        "cardAbsBg": "url('./assets/projects/backgrounds/cardAbstract.png')", 
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        museomoderno: ["MuseoModerno", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif" ],
        

      },
      content: {
        linkedinnocolor: "url('./assets/icons/baw/linkedInLogo_no_color.png')",
        linkedincolor: "url('./assets/icons/color/linkedInLogo_color.png')",
        githubnocolor: "url('./assets/icons/baw/gitHubLogo_no_color.png')",
        githubcolor: "url('./assets/icons/color/gitHubLogo_color.png')",
        resumenocolor: "url('./assets/icons/baw/resume_bw.png')",
        resumecolor: "url('./assets/icons/color/resume_color.png')",
        democolor: "url('./assets/icons/color/exportarColor.png')",
        demonocolor: "url('./assets/icons/baw/exportarPB.png')",
        demonograythird: "url('./assets/icons/baw/exportarGrayThird.png')",


        
        
        
        

       
      },
    },
    screens: {
      md: "1060px",
      mdd: "900px",
      sm: "768px",
      xsl: "530px",
      xs: "480px",
    },
  },
  plugins: [],
};