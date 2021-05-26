module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  // specify other options here

  theme: {
    extend: {
      fontSize: {
        xxs: ".65rem",
      },
      fontFamily: {
        pixelated: ['"Press Start 2P"', "cursive"],
        play: ["Iceland", "cursive"],
      },
      colors: {
        superiority: "var(--superiority)",
        corn: "var(--corn)",
        grey: "var(--grey)",
        green: "var(--green)",
        mandarin: "var(--mandarin)",
        superiority: "var(--superiority)",
        violet: "var(--violet)",
      },
      boxShadow: {
        superiority: "4px 5px var(--superiority)",
      },
    },
  },
};
