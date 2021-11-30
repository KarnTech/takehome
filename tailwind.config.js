module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: [".75rem", "1.28"], //12px
      tiny: [".875rem", "1
      .28"], //14px
      base: ["1rem", "1.3"], //16px
      lg: "1.125rem", //18px
      xl: ["1.3125rem", "1.3"], //21px
      "2xl": ["1.5rem", "1.3"], //24px
      "3xl": ["1.875rem", "1.3"],
      "4xl": "2.5rem", //40px
      "5xl": ["3.625rem", "1.05"],
      "6xl": "4rem",
      "7xl": "5rem",
    },
    fontFamily: {
      sans: "Roboto, Arial, Helvetica, sans-serif",
    },
    spacing: {
      0: "0px",
      5: "5px",
      10: "10px",
      15: "15px",
      20: "20px",
      25: "25px",
      30: "30px",
      40: "40px",
      50: "50px",
      60: "60px",
      70: "70px",
      80: "80px",
      120: "120px",
      125: "125px",
      160: "160px",
      200: "200px",
      250: "250px",
      270: "270px",
      300: "300px",
      400: "400px",
      600: "600px",
    },
    container: {
      screens: {
        sm: "100%",
        md: "1024px",
        lg: "1024px",
        xl: "1024px",
        "2xl": "1024px",
      },
    },
    borderRadius: {
      default: "3px",
      10: "10px",
      200: "200px",
      full: "50%",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      error: "#FF0000",
      blue: {
        lighter: "#F5F9FD",
        light: "#D6E5F2",
        default: "#0060BC",
        border: "#7FADD7",
        lightest: "#F0F5FA",
      },
      gray: {
        light: "#C2C7CF",
        default: "#f6f6f6",
        dark: "#708090",
      },
      green: {
        default: "#559C56",
      },
      black: {
        0: "#000000",
        default: "#25364C",
      },
      yellow: {
        default: "#FAD062",
      },
    },
    extend: {
      translate: {
        "-2/3": "-66.6%",
      },
      inset: {
        "1/2": "50%",
        10: "10px",
      },
      width: {
        sm: "30px",
        md: "40px",
        lg: "60px",
        150: "150px",
        max: "max-content",
      },
      height: {
        xs: "20px",
        sm: "30px",
        md: "40px",
        lg: "50px",
        xl: "70px",
        150: "150px",
      },
      minWidth: {
        xs: "20px",
      },
      boxShadow: {
        lg: "0px 3px 10px #00000026",
      },
      borderWidth: {
        5: "5px",
      },
    },
  },
  variants: {
    flex: ["responsive", "first"],
  },
  plugins: [],
};
