/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  important: true,
  theme: {
    screens: {
      sm: "767px",
      xl: "1280px",
      x: "1439px",
      "2xl": "2559px",
    },
    extend: {
      backgroundImage: {
        mobileLogo: "url('../public/assets/logos/mobile-logo.svg')",
        desktopLogo: "url('../public/assets/logos/desktop-logo.svg')",
        pattern: "url('../public/assets/landing/pattern.png')",
        pattern1: "url('../public/assets/landing/pattern1.png')",
        table: "linear-gradient(180deg, #FBFCFD 0%, #F7F8FA 100%)",
        "table-scroll":
          "linear-gradient(276.95deg, #FFFFFF 5.8%, rgba(255, 255, 255, 0) 69.44%)",
      },
      fontFamily: {
        readex: ["Readex Pro", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      maxWidth: {
        mobile: "360px",
        tablet: "768px",
        laptop: "1280px",
        "desktop-s": "1440px",
        "desktop-2xl": "1330px",
        "desktop-5xl": "1994px",
      },
      colors: {
        primary: {
          brand: "#31374A",
          deeppink: "#A279E5",
          pink: "#CC7BCC",
          yellow: "#EBA048",
          orange: "#F47F22",
        },
        secondary: {
          grey: "#5E667A",
          smoke: "#D3D9E5",
          green: "#92C26E",
        },
        text: {
          smoke: "#E0E0E0",
          grey: "#9E9E9E",
          black: "#001F24",
          warning: "#FF5E67",
          pink: "#7E41E0",
          deepPink: "#925DE8",
        },
        accent: {
          orange: "#F47F22",
        },
        button: {
          hover: "#E46B0B",
          hoverPink: "#773BD9",
        },
        border: {
          soft: "#F5F5F5",
        },
        background: {
          hardElevation: "#F1F1F1",
          softGrey: "#F8F9FB",
          pink: "#8B58DF",
          lightPink: "#E4E5FF",
          lightBlue: "#F9FCFF",
          hoverPink: "#AD89E8",
        },
      },
      dropShadow: {
        navigationBoxShadow:
          "drop-shadow(0px 4px 14px rgba(46, 24, 182, 0.14)) drop-shadow(0px 4px 55px rgba(145, 36, 231, 0.08))",
      },
      boxShadow: {
        buttonShadow:
          "0px 4px 14px rgba(46, 24, 182, 0.14), 0px 4px 55px rgba(145, 36, 231, 0.08)",
        cardShadow: "0px 3.89465px 75.2966px rgba(174, 93, 255, 0.05)",
        tableShadow:
          "0px 7.31958px 100.644px rgba(0, 56, 108, 0.08), 0px 8.44128px 163.198px rgba(97, 93, 255, 0.05)",
        cardShadow1: "0px 3.89465px 75.2966px rgba(174, 93, 255, 0.05)",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
