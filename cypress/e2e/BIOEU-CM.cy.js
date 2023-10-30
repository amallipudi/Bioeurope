describe('BioEuropeLogistics', () => { 
    beforeEach(() => {
         
    cy.ntlm(["web04"], Cypress.env('username') , Cypress.env('password'));
       cy.visit("https://targray-corp-uat.crm3.dynamics.com/main.aspx?appid=5a338062-8977-ed11-81ac-0022486df36c&pagetype=entitylist&etn=tar_strip&viewid=65e28876-255c-ed11-9562-000d3af4fee0&viewType=1039")
       cy.viewport(2000, 1400)
       Cypress.on('uncaught:exception', (err, runnable) => {
           return false
       })
    })
it('Check weather Enable Single or multiple Document Upload feature in BIO Europe Logistics App. ', (done) =>{
        cy.get('img').should("be.visible")
        cy.title().should('eq','Feedstock Contract Management | Deals')
         
})
    })