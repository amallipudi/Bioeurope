const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
chromeWebSecurity: false,
defaultCommandTimeout: 60000,

  },
  
  
})
