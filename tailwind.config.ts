import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const color = (name: string) => `hsl(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{astro,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
        display: ['"Fraunces Variable"', "Georgia", "serif"],
      },
      colors: {
        border: color("border"),
        input: color("input"),
        ring: color("ring"),
        background: color("background"),
        foreground: color("foreground"),
        sand: color("sand"),
        primary: {
          DEFAULT: color("primary"),
          foreground: color("primary-foreground"),
          soft: color("primary-soft"),
          hover: color("primary-hover"),
          light: color("primary-light"),
          glow: color("primary-glow"),
        },
        secondary: { DEFAULT: color("secondary"), foreground: color("secondary-foreground") },
        destructive: { DEFAULT: color("destructive"), foreground: color("destructive-foreground") },
        muted: { DEFAULT: color("muted"), foreground: color("muted-foreground") },
        accent: { DEFAULT: color("accent"), foreground: color("accent-foreground"), blue: color("accent-blue") },
        popover: { DEFAULT: color("popover"), foreground: color("popover-foreground") },
        card: { DEFAULT: color("card"), foreground: color("card-foreground") },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        premium: "var(--premium-shadow)",
        soft: "var(--soft-shadow)",
        button: "var(--button-shadow)",
        glow: "var(--glow-shadow)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
