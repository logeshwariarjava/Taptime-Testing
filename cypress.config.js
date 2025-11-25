import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: "c52jbq",
  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000
  },
})