module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        actionalert: "var(--actionalert)",
        blackblack: "var(--blackblack)",
        "blackblack-100": "var(--blackblack-100)",
        blackgray: "var(--blackgray)",
        blackwhite: "var(--blackwhite)",
        "blue-themeblack-colorsgrey": "var(--blue-themeblack-colorsgrey)",
        "blue-themeblack-colorsgrey-2": "var(--blue-themeblack-colorsgrey-2)",
        "border-colors": "var(--border-colors)",
        "color-options01-priamary-color":
          "var(--color-options01-priamary-color)",
        "color-options01-primary-light-color":
          "var(--color-options01-primary-light-color)",
        "color-options01-secondary-color":
          "var(--color-options01-secondary-color)",
        "color-options01-secondary-light-color":
          "var(--color-options01-secondary-light-color)",
        "color-options02-primary-color": "var(--color-options02-primary-color)",
        "color-options02-primary-light-color":
          "var(--color-options02-primary-light-color)",
        "color-options02-secondary-color":
          "var(--color-options02-secondary-color)",
        "color-options02-secondary-light-color":
          "var(--color-options02-secondary-light-color)",
        "color-options03-primary-color": "var(--color-options03-primary-color)",
        "color-options03-primary-light-color":
          "var(--color-options03-primary-light-color)",
        "color-options03-secondary-color":
          "var(--color-options03-secondary-color)",
        "color-options03-secondary-light-color":
          "var(--color-options03-secondary-light-color)",
        "color-options04-primary-color": "var(--color-options04-primary-color)",
        "color-options04-primary-light-color":
          "var(--color-options04-primary-light-color)",
        "color-options04-secondary-color":
          "var(--color-options04-secondary-color)",
        "color-options04-secondary-light-color":
          "var(--color-options04-secondary-light-color)",
        "colors-for-light-themeaction-colorspurple":
          "var(--colors-for-light-themeaction-colorspurple)",
        "colors-for-light-themeaction-colorspurple-light":
          "var(--colors-for-light-themeaction-colorspurple-light)",
        "colors-for-light-themeaction-colorssuccess":
          "var(--colors-for-light-themeaction-colorssuccess)",
        "colors-for-light-themeaction-colorssucess-light":
          "var(--colors-for-light-themeaction-colorssucess-light)",
        "colors-for-light-themeaction-colorswarning":
          "var(--colors-for-light-themeaction-colorswarning)",
        "colors-for-light-themeaction-colorswarning-light":
          "var(--colors-for-light-themeaction-colorswarning-light)",
        "colors-for-light-themeblack-shadesblack-10":
          "var(--colors-for-light-themeblack-shadesblack-10)",
        "colors-for-light-themeblack-shadesblack-40":
          "var(--colors-for-light-themeblack-shadesblack-40)",
        "colors-for-light-themeblack-shadesblack-60":
          "var(--colors-for-light-themeblack-shadesblack-60)",
        "colors-for-light-themeprimary-colorsblack":
          "var(--colors-for-light-themeprimary-colorsblack)",
        "colors-for-light-themeprimary-colorsprimary-blue":
          "var(--colors-for-light-themeprimary-colorsprimary-blue)",
        "colors-for-light-themeprimary-colorsprimary-light-blue-color":
          "var(--colors-for-light-themeprimary-colorsprimary-light-blue-color)",
        "colors-for-light-themeprimary-colorswhite":
          "var(--colors-for-light-themeprimary-colorswhite)",
        "colors-for-light-themesecondary-colorssecondary-light-blue":
          "var(--colors-for-light-themesecondary-colorssecondary-light-blue)",
        "colors-for-light-themesecondary-colorssecondary-light-orange":
          "var(--colors-for-light-themesecondary-colorssecondary-light-orange)",
        "colors-for-light-themesecondary-colorssecondary-orange":
          "var(--colors-for-light-themesecondary-colorssecondary-orange)",
        "dark-themebackground": "var(--dark-themebackground)",
        "dark-themeborder": "var(--dark-themeborder)",
        "dark-themedark-error-color": "var(--dark-themedark-error-color)",
        "dark-themedark-info-color": "var(--dark-themedark-info-color)",
        "dark-themedark-primary-color": "var(--dark-themedark-primary-color)",
        "dark-themedark-secondary-color":
          "var(--dark-themedark-secondary-color)",
        "dark-themedark-success-color": "var(--dark-themedark-success-color)",
        "dark-themedark-warning-color": "var(--dark-themedark-warning-color)",
        "font-color-black": "var(--font-color-black)",
        "font-color-white": "var(--font-color-white)",
        "grey-background": "var(--grey-background)",
        "light-color-versionaction-colorwarning-color":
          "var(--light-color-versionaction-colorwarning-color)",
        "light-color-versiongrey-tonegrey-tone-02":
          "var(--light-color-versiongrey-tonegrey-tone-02)",
        "light-color-versiongrey-tonegrey-tone-06":
          "var(--light-color-versiongrey-tonegrey-tone-06)",
        "light-themeaction-lightlight-error":
          "var(--light-themeaction-lightlight-error)",
        "light-themeaction-lightlight-info":
          "var(--light-themeaction-lightlight-info)",
        "light-themeaction-lightlight-success":
          "var(--light-themeaction-lightlight-success)",
        "light-themeaction-lightlight-warning":
          "var(--light-themeaction-lightlight-warning)",
        "light-themeactionerror": "var(--light-themeactionerror)",
        "light-themeactioninfo": "var(--light-themeactioninfo)",
        "light-themeactionsuccess": "var(--light-themeactionsuccess)",
        "light-themeactionwarning": "var(--light-themeactionwarning)",
        "light-themegraydark-blue-grey": "var(--light-themegraydark-blue-grey)",
        "light-themegraylight-grey": "var(--light-themegraylight-grey)",
        "light-themegraylighter-grey": "var(--light-themegraylighter-grey)",
        "light-themegraylightest-grey": "var(--light-themegraylightest-grey)",
        "light-themegraymd-new-grey": "var(--light-themegraymd-new-grey)",
        "light-themegraymedium-blue-grey":
          "var(--light-themegraymedium-blue-grey)",
        "light-themegraypure-white": "var(--light-themegraypure-white)",
        "light-themeprimarylight-primary":
          "var(--light-themeprimarylight-primary)",
        "light-themeprimaryprimary": "var(--light-themeprimaryprimary)",
        "light-themeprimaryprimary-v2": "var(--light-themeprimaryprimary-v2)",
        "light-themesecondarylight-secondary":
          "var(--light-themesecondarylight-secondary)",
        "light-themesecondarysecondary-color":
          "var(--light-themesecondarysecondary-color)",
        "light-themesecondarysecondary-v2":
          "var(--light-themesecondarysecondary-v2)",
        neutralblack: "var(--neutralblack)",
        neutralgray: "var(--neutralgray)",
        neutralwhite: "var(--neutralwhite)",
        primaryblue: "var(--primaryblue)",
        secondarypurple: "var(--secondarypurple)",
        secondaryred: "var(--secondaryred)",
        white: "var(--white)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        big: "var(--big-font-family)",
        "big-regular": "var(--big-regular-font-family)",
        "button-normal": "var(--button-normal-font-family)",
        "button-text-regular": "var(--button-text-regular-font-family)",
        "chart-text": "var(--chart-text-font-family)",
        "custom-text": "var(--custom-text-font-family)",
        "custom-text-2-semibold": "var(--custom-text-2-semibold-font-family)",
        "heading-h1": "var(--heading-h1-font-family)",
        "heading-h2": "var(--heading-h2-font-family)",
        "heading-h3": "var(--heading-h3-font-family)",
        "heading-h4": "var(--heading-h4-font-family)",
        "heading-h5": "var(--heading-h5-font-family)",
        "heading-h6": "var(--heading-h6-font-family)",
        "heading-style-h5": "var(--heading-style-h5-font-family)",
        "heading-style-h6": "var(--heading-style-h6-font-family)",
        "large-regular": "var(--large-regular-font-family)",
        "large-semibold": "var(--large-semibold-font-family)",
        "LP-h1": "var(--LP-h1-font-family)",
        "LP-h2": "var(--LP-h2-font-family)",
        "LP-h3": "var(--LP-h3-font-family)",
        "LP-h4": "var(--LP-h4-font-family)",
        "medium-regular": "var(--medium-regular-font-family)",
        "medium-semibold": "var(--medium-semibold-font-family)",
        normal: "var(--normal-font-family)",
        "normal-semibold": "var(--normal-semibold-font-family)",
        "paragraph-extra-small": "var(--paragraph-extra-small-font-family)",
        "paragraph-large": "var(--paragraph-large-font-family)",
        "paragraph-normal": "var(--paragraph-normal-font-family)",
        "paragraph-regular": "var(--paragraph-regular-font-family)",
        "paragraph-small": "var(--paragraph-small-font-family)",
        small: "var(--small-font-family)",
        "small-semibold": "var(--small-semibold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "button-shadow": "var(--button-shadow)",
        "custom-shadow-1": "var(--custom-shadow-1)",
        "custom-shadow-2": "var(--custom-shadow-2)",
        "custom-shadow-3": "var(--custom-shadow-3)",
        "custom-shadow-4": "var(--custom-shadow-4)",
        "custom-shadow-5": "var(--custom-shadow-5)",
        "custom-shadow-6": "var(--custom-shadow-6)",
        "LP-icon-shadow": "var(--LP-icon-shadow)",
        shadow: "var(--shadow)",
        "shadow-1": "var(--shadow-1)",
        "shadow-medium": "var(--shadow-medium)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
