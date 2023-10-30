// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
//import 'cypress-ntlm-auth/dist/commands';
//import 'Cypress-ntlmAuth/dist/commands';

import "cypress-ntlm-auth/dist/commands" ;




// Alternatively you can use CommonJS syntax:
// require('./commands')

require("cypress-xpath")
import './commands'
import 'cypress-mochawesome-reporter/register';

import "cypress-file-upload";

import './commands';
Cypress.Commands.add('loginToAAD', (username, password) => {
  cy.session('user-${username}', () =>{
    cy.visit('login.microsoftonline.com')
    cy.origin('login.microsoftonline.com',()  =>{
      cy.get('input[type="email"]').type('amallipudi@targray.com'),
      cy.get('input[type="submit"]').click(),
      cy.get('input[type="password"]').type('DDanand@456'),
      cy.get('input[type="submit"]').click(),
      cy.get('#idBtn_Back').click()
       
    })
  })
})