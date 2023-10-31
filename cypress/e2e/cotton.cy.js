describe('Azure Active Directory Authentication', () => {
    it('verifies the user logged in has the correct name', () => {
       cy.loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'))
      
     cy.visit('https://apps.powerapps.com/play/e/c4135715-1e02-e817-846b-2768f08b1ff3/a/551edba9-59da-47de-81f2-d581a759c521?tenantId=26422a3a-c74b-4d07-9e29-8d6ecf66fa8d#')
     cy.wait(38000) 
        cy.get("appmagic-content-control-name appmagic-control-view canvasContentDiv _vst_").type("anand142533")
      })
      })
      
      