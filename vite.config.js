import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/css-tailwind/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), "index.html"),
        feed: resolve(process.cwd(), "feed/index.html"),
        profile: resolve(process.cwd(), "profile/index.html"),
        about: resolve(process.cwd(), "about/index.html"),
      },
    },
  },
});
