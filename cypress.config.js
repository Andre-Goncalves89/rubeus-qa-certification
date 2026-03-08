const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qualidade.apprbs.com.br',
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    
    // ESTA É A LINHA QUE RESOLVE O ERRO:
    // Dizemos ao Cypress que não vamos usar o ficheiro de suporte padrão.
    supportFile: false,

    setupNodeEvents(on, config) {
      // Listeners de eventos
    },
    
    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});