describe('Azure Active Directory Authentication', () => {
    it('verifies the user logged in has the correct name', () => {
       cy.loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'))
      
       cy.visit('https://targray-corp-uat.crm3.dynamics.com/').wait(10000)
       cy.viewport(1800, 1400)
     cy.wait(38000) 
     Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
      })
      })
      
      