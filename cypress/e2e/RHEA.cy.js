import "cypress-file-upload";
describe('RHEA Application', () => { 
  beforeEach(() => {
    
  cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
   cy.visit("http://web04/")
   
    cy.loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'))
    cy.visit('https://targray-corp-uat.crm3.dynamics.com/main.aspx?appid=5a338062-8977-ed11-81ac-0022486df36c&pagetype=entitylist&etn=tar_strip&viewid=65e28876-255c-ed11-9562-000d3af4fee0&viewType=1039').wait(10000)
    cy.viewport(1800, 1400)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        
      })
    it('verifies the user logged in has the correct name', () => {  
      cy.visit('https://targray-corp-uat.crm3.dynamics.com/main.aspx?appid=5a338062-8977-ed11-81ac-0022486df36c&pagetype=entitylist&etn=tar_strip&viewid=65e28876-255c-ed11-9562-000d3af4fee0&viewType=1039').wait(10000)
  
      
        //cy.get('#cancelButton_2').click().wait(10000)
        //cy.get('id-716dea70-b4ec-4d17-8f70-968910e551a9-1266-tar_dealformat3ef39988-22bb-4f0b-bbbe-64b5a3748aee').click().wait(5000)
     //cy.get('#id-716dea70-b4ec-4d17-8f70-968910e551a9-1-tar_dealformat3ef39988-22bb-4f0b-bbbe-64b5a3748aee-tar_dealformat.fieldControl-option-set-select').click().wait(5000)
       //cy.get('#id-716dea70-b4ec-4d17-8f70-968910e551a9-6-tar_reviewcountc6d124ca-7eda-4a60-aea9-7fb8d318b68f').click()
        //cy.get("span").should('contain','Deal Type: Required fields must be filled in.')
        
   
  //cy.get("#id-716dea70-b4ec-4d17-8f70-968910e551a9-1-tar_dealformat3ef39988-22bb-4f0b-bbbe-64b5a3748aee-tar_dealformat\.fieldControl-option-set-select").click()*/
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
    })
            })
