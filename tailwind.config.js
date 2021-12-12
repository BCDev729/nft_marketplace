module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        "1/7": "14.3%",
      },
      screens: {
        "3xl": "1740px",
        "4xl": "1960px",
      },
      textColor: {
        legendary: "#C78920",
      },
      borderColor: {
        legendary: "#A48C17",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        legendary: "#7F5429",
        black: {
          100: "#0000004d",
          500: "#1C1B24",
          700: "#121117",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        gray: {
          DEFAULT: "#707070",
        },
        pink: {
          300: "#C077AE",
          500: "#b06fa0",
          700: "#BC6FA8",
          800: "#8827A5",
          900: "#7a2395",
        },
        red: {
          500: "#F22E2C",
          900: "#600B14",
        },
        yellow: {
          500: "#DBA207",
          700: "#FADF49",
          900: "#89500A",
        },
        purple: {
          300: "#A67ACB",
          400: "#9059BA",
          500: "#9a71bc",
          600: "#7E12AB",
          700: "#571B87",
          900: "#390B60",
        },
        green: {
          DEFAULT: "#2EC25B",
        },
      },
    },
  },
};
