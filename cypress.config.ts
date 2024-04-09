import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: false,

  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:8888",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
