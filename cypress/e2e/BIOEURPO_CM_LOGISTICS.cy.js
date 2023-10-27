describe('BioEuropeLogistics', () => { 
    beforeEach(() => {
    cy.ntlm(["web04"], Cypress.env('username') , Cypress.env('password'));
       cy.visit("http://web04/TEST-BioEuropeContractManagement/pages/Deals#")
       cy.viewport(2000, 1400)
       Cypress.on('uncaught:exception', (err, runnable) => {
           return false
       })
    })
it('Check weather Enable Single or multiple Document Upload feature in BIO Europe Logistics App. ', (done) =>{
        cy.get('img').should("be.visible")
        cy.title().should('eq','Targray Bio Europe Contract Management | Deals')
        cy.get('div.navbar-header > a.bars').click({force: true})
        cy.get('span.user-email').contains('Ananda Mohan Mallipudi') 
        cy.get('.waves-effect').click().wait(1000)
        cy.get('#lnkbtnAdd').should('not.be.disabled');
        cy.get('#lnkbtnAdd').click()//Add New Deal
        cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlGPCompany"]').and('contain',"TIN").and('contain',"TME") //Great Plains Company
        cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlGPCompany"]').select('TME',{force: true}).wait(1000) 
        cy.get('#pnlDealHeader > :nth-child(2) > :nth-child(1)').should('contain', 'Great Plains Company:')
        cy.get('#cphContent_cphContent_lblDealtype').should('contain', 'Deal Type')
        cy.get('#cphContent_cphContent_rdDealType > tbody > tr > :nth-child(1) > label').should("be.visible")
        cy.get('#cphContent_cphContent_rdDealType > tbody > tr > :nth-child(1) > label').should('have.lengthOf', 1)
        cy.get('#cphContent_cphContent_rdDealType > tbody > tr > :nth-child(1) > label').click().wait(1000); // deal type
        cy.get(':nth-child(2) > .col-lg-6 > .form-label').should('contain', 'Title')
        cy.get('#txtDealTitle').type("TESTING TARGRAY -FEEDSTOCK CONTRACT ANANDA MALLIPUDITESTING TARGRAY -FEEDSTOCK nbcvc cccc", {delay:0}).invoke('val').should('not.have.lengthOf', 102)     //.wait(2000); // TITLE
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > .form-label').should('contain', 'Agreement Date')
        cy.get('#cphContent_cphContent_lblTraderName').should('contain', 'Ananda Mohan Mallipudi')
        cy.get(':nth-child(3) > :nth-child(2) > .form-label').should('contain', 'Bank')
        cy.get('#txtBank').type('IDFC BANK')
        cy.get(':nth-child(2) > :nth-child(3) > :nth-child(1) > .form-label').should('contain', 'Governing Law (countries)')
        cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlDealGoverningLawCountries"]').and('contain',"Switzerland (CH)").and('contain',"Spain (ES)").and('contain',"France (FR)").and('contain',"The Netherlands (NL)").and('contain',"English Law (UK)").and('contain',"Italy(IT)") //GoverningLaw
        cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlDealGoverningLawCountries"]').select('Germany (DE)',{force: true}).wait(1000) 
        cy.get('#divGtnc > .form-label').should('contain', 'GTnC')
        cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlGtnc"]').and('contain',"BP gtnc’s").and('contain',"Shell gtnc’s").and('contain',"TTB rules") //GTnC
        cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlGtnc"]').select('Vitol gtnc’s',{force: true}).wait(1000)
       cy.get('#divCounterpartyContract > .form-label').should('contain', 'Counterparty Contract')
       cy.get('#txtCounterpartyContract').should('have.lengthOf', 1)
       cy.get('#txtCounterpartyContract').type("testing targray testing targraement IF").invoke('val').should('not.have.lengthOf', 101) ; //counterparty contract
       cy.get(':nth-child(2) > :nth-child(4) > :nth-child(1) > .form-label').should('contain', 'Contract Terms')
       cy.get('#txtContractTerms').should('have.lengthOf', 1)
    cy.get('#txtContractTerms').type("Companies may also evaluate product qual", {delay:0}).invoke('val').should('not.have.lengthOf', 8001) ;//Contract Terms
    cy.get(':nth-child(4) > :nth-child(2) > .form-label').should('contain', 'Contract Notes')
    cy.get('#txtDealNotes').should('have.lengthOf', 1)
    cy.get('#txtDealNotes').type(" IFC Discount Note Program was launched in JLENGTH IS 1000", {delay:0}).invoke('val').should('not.have.lengthOf', 1001) ;//DEAL NOTES
    cy.get(':nth-child(5) > .col-lg-6 > .form-label').should('contain', 'Special Clause')
    cy.get('#TxtSpecialClause').should('have.lengthOf', 1)
    cy.get('#TxtSpecialClause').type("Companies may also evaluate product qualityy according to", {delay:0}).invoke('val').should('not.have.lengthOf', 1001) ;//SPECIALCLUASE
   cy.get(':nth-child(3) > :nth-child(2) > .col-lg-3 > .form-label').should('contain', 'Broker')// BROKER
   cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlBroker"]').and('contain',"Atlas").and('contain',"Atlas Commodity Markets") //Broker dropdown
   cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlBroker"]').select('Khandelwal Associates',{force: true}).wait(1000)
   cy.get('#txtBrokerFee').type(1234567).invoke('val').should('not.have.lengthOf', 21)   // broker fee  
   cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlBrokerFeeUOM"]').and('contain',"Metric Tons").and('contain',"Cubic Meters") //Unit of measure
   cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlBrokerFeeUOM"]').select('Metric Tons',{force: true}).wait(1000)
    cy.get('#txtBrokerNotes').should('have.lengthOf', 1)
    cy.get('#txtBrokerNotes').type('There are a few SIDENT far exceeds  my team to do is to see what more', {delay:0}).invoke('val').should('not.have.lengthOf', 1001) ; // Broker notes
    cy.get('#cphContent_cphContent_dvddlGPCustomer > .btn-group > .btn > .filter-option').click();// GP CUSTOMER
    cy.get('#cphContent_cphContent_dvddlGPCustomer > .btn-group > .open > .bs-searchbox > .form-control').type('ADM INTERNATIONAL SARL{enter}').wait(3000)
    cy.get('.col-lg-4 > .form-label').should('contain',  'Great Plains Customer')
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlProduct"]').and('contain',"[ Fame -10 ] - Fame -10").and('contain',"[ Fame -5 ] - Fame -5")//product dropdown
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlProduct"]').select('[ Fame +5 ] - Fame +5',{force: true}).wait(1000)
    cy.get('#txtCFPP').type("5")
    cy.get('#txtWaterContent').type("10")
    cy.get('#txtmonoglyceride').type("9")
    cy.get('#txtTotalContamination').type("8")
    cy.get('#txtQualityNotes').type("testing targray testing targrayIFCs", {delay:0})
    cy.get('#txtPOSGHGS').type("12")
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlCertification"]').and('contain',"EC Recognised").and('contain',"NIS")//certification dropdown
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlCertification"]').select('RFS Compliant',{force: true}).wait(1000)
    cy.get('#cblRawMaterials > tbody > tr > :nth-child(1) > label').click()
    cy.get('tr > :nth-child(4) > label').click()
    cy.get('tr > :nth-child(6) > label').click()
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlPOSDelivery"]').and('contain',"5 working days").and('contain',"15 working days")//POS dropdown
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlPOSDelivery"]').select('30 working days',{force: true}).wait(1000)
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlSustainabilityCounting"]').and('contain',"Single").and('contain',"Double")//Counting dropdown
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlSustainabilityCounting"]').select('Italian Double Counting',{force: true}).wait(1000)
    cy.get('#tbxSustainabilityNotes').type("testing targray testing targrayIFCs", {delay:0})
    cy.get('#cblCountries > tbody > :nth-child(1) > :nth-child(1) > label').click()
    cy.get('#cblCountries > tbody > :nth-child(1) > :nth-child(3) > label').click()
    cy.get('#cblCountries > tbody > :nth-child(1) > :nth-child(5) > label').click()
    cy.get('#cblCountries > tbody > :nth-child(1) > :nth-child(6) > label').click()
    cy.get('#lnkSaveDeal').click()
    //Edit strip page
    cy.get('#lnkbtnEditDetails > .far').click()
    cy.get('#txtContractStartDate').type('26-10-2023').click({force: true})
    cy.get('#txtContractEndDate').type('29-10-2023').click({force: true})
    cy.get('#txtVolQuantity').type('20')
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlUoM"]').and('contain',"Metric Tons").and('contain',"Cubic Meters")//UOM dropdown
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlUoM"]').select('Cubic Meters',{force: true}).wait(1000)
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlTolerance"]').and('contain',"0 %").and('contain',"1 %")//Tolerance dropdown
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlTolerance"]').select('9 %',{force: true}).wait(1000)
    cy.get('#cphContent_cphContent_rblOptionList > tbody > tr > :nth-child(1) > label').click()//Byer option
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddltitleTansferLocation"]').and('contain',"ARA Range").and('contain',"Ghent (BE)")//Title transfer dropdown
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddltitleTansferLocation"]').select('Huelva (ES)',{force: true}).wait(1000)
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlIncoTerm"]').and('contain',"CFR").and('contain',"CPT")//Inco Term dropdown
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlIncoTerm"]').select('DEQ',{force: true}).wait(1000)
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlIncoTermlocation"]').and('contain',"Ghent (BE)").and('contain',"Lavera (FR)")//IncoTerm Location dropdown
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlIncoTermlocation"]').select('Amsterdam (NL)',{force: true}).wait(1000)
    cy.get('#cphContent_cphContent_rblstStripPricingType > tbody > tr > :nth-child(2) > label').click()
    cy.get('#txtBxFixedPrice').type('45')
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlFixedPriceCurrency"]').and('contain',"EUR").and('contain',"GBP")// Price Currency pricing dropdown
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlFixedPriceCurrency"]').select('USD',{force: true}).wait(1000)
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlFixedPriceUOM"]').and('contain',"Metric Tons").and('contain',"Cubic Meters")//UOM dropdown
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlFixedPriceUOM"]').select('Cubic Meters',{force: true}).wait(1000)
    cy.get('#lnkUpdateStrip').click()

    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlTransportMode"]').and('contain',"Sea Vessel").and('contain',"Transload")// Accrual Type dropdown
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlTransportMode"]').select('Barge',{force: true}).wait(1000)
    cy.get('#txtFreightCost').type('4')
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlCostPer"]').and('contain',"Metric Tons").and('contain',"Cubic Meters")// freight Cost Unit dropdown
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlCostPer"]').select('Cubic Meters',{force: true}).wait(1000)
    cy.get('#lnkbtnAddTransport').click()  
    cy.get('#cphContent_cphContent_Back').click()
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlDocumentType"]').and('contain',"Sale Contract").and('contain',"Invoice List")// upload  document Type dropdown
    cy.get('select[name="ctl00$ctl00$cphContent$cphContent$ddlDocumentType"]').select('MULTI-DOCS',{force: true}).wait(1000)
    cy.get('#tbxDocumentNotes').type('hello test ananda')
    cy.get('#cphContent_cphContent_fuUploadDocuments').should("be.visible")  
    cy.get('#btnUpload').should("be.visible").contains('Upload Document')
        cy.fixture('621-23-03399 - North Carolina - Targray Markets Europe SA_1.pdf', { encoding: null }).as('myPDF')
        cy.fixture('EU-BM-18-Lfr-27930000-999-12345678-NTNw-11450748 (3.219 m³).pdf', { encoding: null }).as('myPDF2')
        cy.fixture('EU-BM-18-Lfr-27930000-999-12345678-NTNw-11450749 (1,021.335 m³).pdf', { encoding: null }).as('myPDF3')
        cy.fixture('EU-BM-18-Lfr-27930000-999-12345678-NTNw-11450750 (96.905 m³).pdf', { encoding: null }).as('myPDF4')
        cy.fixture('EU-BM-18-Lfr-27930000-999-12345678-NTNw-11450751 (12 m³).pdf', { encoding: null }).as('myPDF5')
        cy.fixture('TPTS-0408.pdf', { encoding: null }).as('myPDF6')
        cy.get('input[type=file]').selectFile(['@myPDF','@myPDF2','@myPDF3','@myPDF4','@myPDF5','@myPDF6']).wait(2000)
        cy.get('#btnUpload').click()
        cy.get('[data-notify="message"]').should('have.text','Document uploaded successfully.')
        cy.get('#lnkUpdateDeal').click()
        cy.get('[data-notify="message"]').should('have.text','Deal Updated successfully.')
        cy.get('#lnkbtnPublishContract').click()
        cy.visit("http://web04/TEST-BioEuropeLogistics/Pages/OpenDeals?filters=|||1||")
        //cy.get(':nth-child(1) > [style="text-align: center;"] > #ahrefDownloadDocument_SharePoint').click()
        //cy.get(':nth-child(2) > [style="text-align: center;"] > #ahrefDownloadDocument_SharePoint').click()
        //cy.get(':nth-child(3) > [style="text-align: center;"] > #ahrefDownloadDocument_SharePoint').click()
       // cy.get(':nth-child(4) > [style="text-align: center;"] > #ahrefDownloadDocument_SharePoint').click()
        //cy.get(':nth-child(5) > [style="text-align: center;"] > #ahrefDownloadDocument_SharePoint').click()
        cy.get('img').should("be.visible")
        cy.title().should('eq','TCMS Bio Europe Logistics | Open Deals')
        cy.get('div.navbar-header > a.bars').click({force: true})
        cy.get('span.user-email').contains('Ananda Mohan Mallipudi') 
        cy.get('#LeftSidebar_liOpenDeals > .waves-effect > span').click()
        cy.get(':nth-child(1) > :nth-child(3) > #lnkDealNumber').click(); 
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
        cy.get(':nth-child(5) > [style="text-align: center;"] > #ahrefDownloadDocument_SharePoint').click().wait(5000)
        y.get('input[type="email"]').type('amallipudi@targray.com'),
      cy.get('input[type="submit"]').click(),
      cy.get('input[type="password"]').type('KLanand@456'),
      cy.get('input[type="submit"]').click(),
      cy.get('#idBtn_Back').click()
})
    })