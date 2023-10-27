const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
chromeWebSecurity: false,
defaultCommandTimeout: 6000,
baseUrl: 'http://web04',
  },
  
  
})
