import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spice: {
          cream: "#F2E5BD",
          gold: "#D9AE5F",
          copper: "#BF7636",
          brown: "#592202",
          light: "#F2F2F2"
        }
      },
      backgroundImage: {
        'spice-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23bf7636\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      },
      rotate: {
        '20': '20deg',
      }
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            50: "#FDF8E8",
            100: "#FAF0D1",
            200: "#F5E1A3",
            300: "#F0D275",
            400: "#EBC347",
            500: "#D9AE5F", // Primary color
            600: "#BF7636",
            700: "#A55E2B",
            800: "#8B4620",
            900: "#592202",
            DEFAULT: "#D9AE5F",
            foreground: "#592202"
          },
          secondary: {
            DEFAULT: "#BF7636",
            foreground: "#F2E5BD"
          },
          background: {
            DEFAULT: "#F2E5BD"
          },
          content1: {
            DEFAULT: "#F2E5BD",
            foreground: "#592202"
          },
          content2: {
            DEFAULT: "#F2F2F2",
            foreground: "#592202"
          }
        }
      }
    }
  })],
}
