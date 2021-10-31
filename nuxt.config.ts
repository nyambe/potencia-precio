import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  // Add entry css file
  build: {
    postcss: {
      // add Postcss options
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
