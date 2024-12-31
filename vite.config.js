import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  base: "https://anindyashafa.reactjssanbercode.my.id",
  plugins: [react()],
  plugins: [tailwindcss()],
});
