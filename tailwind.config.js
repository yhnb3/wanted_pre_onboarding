module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
