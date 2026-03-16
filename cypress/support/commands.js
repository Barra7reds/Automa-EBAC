// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
       cy.get('.dropdown-toggle > .zmdi').click()
       cy.get('#topmenu > .menu-item-221 > a').click()
       cy.get('[name="username"]').type(email)
       cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(password)
       cy.get('[name="rememberme"]').click()
       cy.get('[name="login"]').click()
       cy.url().should('contain', 'my-account')

})
import { faker } from '@faker-js/faker';

Cypress.Commands.add('addProdutos', (produto, tamanho, cor) => {
       cy.visit('http://lojaebac.ebaconline.art.br/home-3/')
       cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > [name="s"]').type(produto)
       cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
       cy.get('.variations_form.cart').should('be.visible')
       cy.get(`.button-variable-item-${tamanho}`).click()
       cy.get(`.button-variable-item-${cor}`).click()
       cy.get('.single_add_to_cart_button').click()
})
       
    
      









