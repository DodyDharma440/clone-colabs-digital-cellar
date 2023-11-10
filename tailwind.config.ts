import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        body: "#f9f8f6",
        "nav-hover": "#005241",
        footer: "#2a2c2d",
        "green-yellow": "#d9db4d",
        "light-brown": "#dcb688",
        "bright-green": "#32c58b",
      },
      fontFamily: {
        "matter-sq": "'Matter SQ', sans-serif",
      },
      boxShadow: {
        linear: "0 0 15px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
