module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      animation: {
        buttonOff: "buttonOff 0.5s forwards",
        buttonOn: "buttonOn 0.5s forwards",
        slideLM: "slideLM 0.4s forwards",
        slideMR: "slideMR 0.4s forwards",
        slideRM: "slideRM 0.4s forwards",
        slideML: "slideML 0.4s forwards",
      },
      keyframes: {
        buttonOff: {
          to: {
            transform: "translateX(0)",
          },
          from: {
            transform: "translateX(4rem)",
          },
        },
        buttonOn: {
          to: {
            transform: "translateX(4rem)",
          },
          from: {
            transform: "translateX(0)",
          },
        },
        slideLM: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(8rem)",
          },
        },
        slideMR: {
          from: {
            transform: "translateX(8rem)",
          },
          to: {
            transform: "translateX(16rem)",
          },
        },
        slideRM: {
          from: {
            transform: "translateX(16rem)",
          },
          to: {
            transform: "translateX(8rem)",
          },
        },
        slideML: {
          from: {
            transform: "translateX(8rem)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
