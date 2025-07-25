import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        civic: {
          blue: {
            50: "hsl(var(--civic-blue-50))",
            100: "hsl(var(--civic-blue-100))",
            200: "hsl(var(--civic-blue-200))",
            300: "hsl(var(--civic-blue-300))",
            400: "hsl(var(--civic-blue-400))",
            500: "hsl(var(--civic-blue-500))",
            600: "hsl(var(--civic-blue-600))",
            700: "hsl(var(--civic-blue-700))",
            800: "hsl(var(--civic-blue-800))",
            900: "hsl(var(--civic-blue-900))",
          },
          green: {
            50: "hsl(var(--civic-green-50))",
            100: "hsl(var(--civic-green-100))",
            200: "hsl(var(--civic-green-200))",
            300: "hsl(var(--civic-green-300))",
            400: "hsl(var(--civic-green-400))",
            500: "hsl(var(--civic-green-500))",
            600: "hsl(var(--civic-green-600))",
            700: "hsl(var(--civic-green-700))",
            800: "hsl(var(--civic-green-800))",
            900: "hsl(var(--civic-green-900))",
          },
          purple: {
            500: "hsl(var(--civic-purple-500))",
            600: "hsl(var(--civic-purple-600))",
            700: "hsl(var(--civic-purple-700))",
          },
          gold: {
            400: "hsl(var(--civic-gold-400))",
            500: "hsl(var(--civic-gold-500))",
            600: "hsl(var(--civic-gold-600))",
          },
          slate: {
            50: "hsl(var(--civic-slate-50))",
            100: "hsl(var(--civic-slate-100))",
            200: "hsl(var(--civic-slate-200))",
            300: "hsl(var(--civic-slate-300))",
            600: "hsl(var(--civic-slate-600))",
            700: "hsl(var(--civic-slate-700))",
            800: "hsl(var(--civic-slate-800))",
            900: "hsl(var(--civic-slate-900))",
          },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
