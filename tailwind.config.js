module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial Black", "sans-serif"],
      },
      keyframes: {
        slideAndRotate: {
          "0%": {
            transform: "translateX(-100%) rotate(-180deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0) rotate(0deg)",
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-rotate": "slideAndRotate 1s ease-out",
      },
    },
  },
};
