describe('BioEuropeLogistics', () => { 
    beforeEach(() => {
    cy.ntlm(["web04"], Cypress.env('username') , Cypress.env('password'));
       cy.visit("http://web04/TEST-BioEuropeLogistics/Pages/OpenDeals?filters=|||1||")
       cy.viewport(1800, 1400)
       Cypress.on('uncaught:exception', (err, runnable) => {
           return false
       })
    })
it('Check weather Enable Single or multiple Document Upload feature in BIO Europe Logistics App. ', (done) =>{
        cy.get('img').should("be.visible")
        cy.title().should('eq','TCMS Bio Europe Logistics | Open Deals')
        cy.get('div.navbar-header > a.bars').click({force: true})
        cy.get('span.user-email').contains('Ananda Mohan Mallipudi') 
        cy.get('#LeftSidebar_liOpenDeals > .waves-effect > span').click()
        cy.get(':nth-child(2) > :nth-child(3) > #lnkDealNumber').click(); 
        cy.get('#lnkbtnEditPage > .material-icons').click().wait(600); 
        cy.get('.card > :nth-child(1) > :nth-child(1) > :nth-child(1)').should('contain', 'Delivery Line Detail')
        cy.get('#cphContent_txtBxVesselName').type('Hope Bargae')
        cy.get('#cphContent_txtbxDOL').type('2023-10-24').click({force: true})
        cy.get('#txtBxDensity').type('12')
        cy.get('#txtBxLoadedQuantity').type('33')
        cy.get('#txtbxArrival').type('22')
        cy.get('#txtbxArrivalVol').type('55')
        cy.get('#txtbxLoadedVol').type('44')
        //cy.get('#txtBxDensity2').type('13')
        //cy.get('#txtBxDensity3').type('14')
        cy.get('#txtBxDensity4').type('15')
        cy.get('#txtBxLoadedQuantity').type('8')
        cy.get('#txtBxLoadedQuantity').type('45')
        cy.get('#cphContent_lbltankVol').should('contain', 'Loaded Volume(Targray Tank)')
        cy.get('#cphContent_lblDischarged').should('contain', 'Discharge Quantity(Customer Tank)')
        cy.get('#cphContent_lblDischargedVol').should('contain', 'Discharge Volume(Customer Tank)')
        cy.get('#cphContent_txtBxComments').type('dshbjvhbhjbhbjhsbjcbbcjhbjdnbcjknjkndjknjckdnjcnknncjnjdnjcnjnjdkvnjkn jkdn vjknjknjknvjknjknjvnjkfnjvnjnjvnjnjnckmdkslcmdkmkcmkldkcdmckmckcmkmkcmkkmckkdmckdkckdckdkdk',{delay:0})//Notes
        cy.get('select[name="ctl00$cphContent$ddlStatus"]').and('contain',"Expected").and('contain',"Planned").and('contain',"Discharged").and('contain',"Washout") //Status
        cy.get('select[name="ctl00$cphContent$ddlStatus"]').select('In-transit',{force: true}).wait(1000) 
        cy.get('#cphContent_txtbxBankName').type('IDFC BANK')
        cy.get('#cphContent_txtbxValues').type('45')
        cy.get('#cphContent_txtbxBOL').type('WSD2223')
        cy.get('#cphContent_txtbxAgents').type('ANANDA')
        cy.get('#cphContent_txtbxShipper').type('VFNGFBC')
        cy.get('#cphContent_txtbxConsignee').type('DCHHBHCBHUBTAGGRAY')
        cy.get('#cphContent_txtbxNotify').type('TARGRAYIMNDIA')
        cy.get('#cphContent_txtbxCompany').type('INDIADIMCDMNJVU')
        //cy.get('#lnkSaveDelivery').click()

        cy.get('#cphContent_fuUploadDocuments').should("be.visible")
        cy.get('#btnUpload').should("be.visible").contains('Upload Document')
        cy.get('select[name="ctl00$cphContent$ddlDocumentType"]').and('contain',"LC’S").and('contain',"MULTI-DOCS").and('contain',"OTHER").and('contain',"Bill of Lading").and('contain',"Certificate of Origin").and('contain',"Chemical Residue Cert.").and('contain',"Container Cleanliness Cert.").and('contain',"Quality Cert.").and('contain',"Proof Of Sustainability - POS").and('contain',"In-land Transportation Stmt.").and('contain',"Insurance Certificate for Shipments").and('contain',"Invoice List").and('contain',"LDC CERTIFICATE").and('contain',"Veterinary Cert.")//Option Type
        cy.get('select[name="ctl00$cphContent$ddlDocumentType"]').select('Quality Cert.',{force: true}).wait(1000) //division
        cy.get('#tbxDocumentNotes').type('ANANDA MOHAN MALLIPUDI PLEASE CHECK max lenght is 200 AKASHJSDJKCYHBNCYHDSCJKHUJXNCJKNCJKNCJKNHJKSDVN JKNJKCNKJCXNJKXCNJNJKVNJKCVNJKLCX VNJKCVYBCJHHBDHUVDHUB CHJ XCJHBX CHJB XHJXC UYFHB XJBHJDDANANADA').invoke('val').should('not.have.lengthOf', 201) ;
        /*cy.fixture('30mb.pdf').as('myPDF')
        cy.fixture('45MB - fiveth.pdf').as('myPDF2')
        cy.fixture('45MB - fourth.pdf').as('myPDF3')
        cy.fixture('45MB -second.pdf').as('myPDF4')
        cy.fixture('45MB-third.pdf').as('myPDF5')
        cy.fixture('45MB.pdf').as('myPDF6')*/
     cy.fixture('621-23-03399 - North Carolina - Targray Markets Europe SA_1.pdf', { encoding: null }).as('myPDF')
        cy.fixture('EU-BM-18-Lfr-27930000-999-12345678-NTNw-11450748 (3.219 m³).pdf', { encoding: null }).as('myPDF2')
        cy.fixture('EU-BM-18-Lfr-27930000-999-12345678-NTNw-11450749 (1,021.335 m³).pdf', { encoding: null }).as('myPDF3')
        cy.fixture('EU-BM-18-Lfr-27930000-999-12345678-NTNw-11450750 (96.905 m³).pdf', { encoding: null }).as('myPDF4')
        cy.fixture('EU-BM-18-Lfr-27930000-999-12345678-NTNw-11450751 (12 m³).pdf', { encoding: null }).as('myPDF5')
        cy.fixture('TPTS-0408.pdf', { encoding: null }).as('myPDF6')
        cy.get('input[type=file]').selectFile(['@myPDF','@myPDF2','@myPDF3','@myPDF4','@myPDF5','@myPDF6']).wait(1000)
        cy.get('#btnUpload').click()
        cy.get('[data-notify="message"]').should('have.text','Document uploaded successfully.')
        cy.get(':nth-child(5) > [style="text-align: center;"] > #ahrefDownloadDocument_SharePoint').click()
        
       })
    })