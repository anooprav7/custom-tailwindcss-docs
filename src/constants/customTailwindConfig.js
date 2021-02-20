const tailwindConfig = {
  theme: {
    extend: {},
    fontSize: {
      lgg: ["1.77rem", { lineHeight: "1.77rem" }]
    },
    // https://baseweb.design/guides/theming/#sizing
    spacing: {
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      48: "48px",
      56: "56px",
      64: "64px",
      96: "96px",
      128: "128px",
      192: "192px",
    },
    fontFamily: {
      sans: ["-apple-system", "BlinkMacSystemFont", "sans-serif"],
      mono: ["SFMono-Regular", "Consolas", "Menlo", "Courier", "monospace"]
    },
    // https://material-ui.com/customization/default-theme/
    fontSize: {
      h1: [
        "6rem",
        {
          letterSpacing: "-0.01562em",
          lineHeight: "1.167"
        }
      ],
      h2: [
        "3.75rem",
        {
          letterSpacing: "-0.00833em",
          lineHeight: "1.2"
        }
      ],
      h3: [
        "3rem",
        {
          letterSpacing: "0em",
          lineHeight: "1.167"
        }
      ],
      h4: [
        "2.125rem",
        {
          letterSpacing: "0.00735em",
          lineHeight: "1.235"
        }
      ],
      h5: [
        "1.5rem",
        {
          letterSpacing: "0em",
          lineHeight: "1.334"
        }
      ],
      h6: [
        "1.25rem",
        {
          letterSpacing: "0.0075em",
          lineHeight: "1.6"
        }
      ],
      subtitle1: [
        "1rem",
        {
          letterSpacing: "0.00938em",
          lineHeight: "1.75"
        }
      ],
      subtitle2: [
        "0.875rem",
        {
          letterSpacing: "0.00714em",
          lineHeight: "1.57"
        }
      ],
      body1: [
        "1rem",
        {
          letterSpacing: "0.00938em",
          lineHeight: "1.5"
        }
      ],
      body2: [
        "0.875rem",
        {
          letterSpacing: "0.01071em",
          lineHeight: "1.43"
        }
      ],
      caption: [
        "0.75rem",
        {
          letterSpacing: "0.03333em",
          lineHeight: "1.66"
        }
      ],
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

export default tailwindConfig;
