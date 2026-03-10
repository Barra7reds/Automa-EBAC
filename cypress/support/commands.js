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
       cy.visit(' http://lojaebac.ebaconline.art.br/')
       cy.get('.dropdown-toggle > .zmdi').click()
       cy.get('#topmenu > .menu-item-221 > a').click()
       cy.get('[name="username"]').type(email)
       cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(password)
       cy.get('[name="rememberme"]').click()
       cy.get('[name="login"]').click()
       cy.url().should('contain', 'my-account')

})

Cypress.Commands.add('addProdutos', (produto) => {
       cy.visit('http://lojaebac.ebaconline.art.br/home-3/')
       cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > [name="s"]').click().type(produto)
       cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
       cy.get('.button-variable-item-XS').click()
       cy.get('.button-variable-item-Orange').click()
       cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('addProdutos2', (produto) => {
       cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > [name="s"]').click().type(produto)
       cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
       cy.get('.button-variable-item-S').click()
       cy.get('.button-variable-item-Purple').click()
       cy.get('.single_add_to_cart_button').click()

})

Cypress.Commands.add('addProdutos3', (produto) => {
       cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > [name="s"]').click().type(produto)
       cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
       cy.get('.button-variable-item-XS').click()
       cy.get('.button-variable-item-Red').click()
       cy.get('.single_add_to_cart_button').click()

})

Cypress.Commands.add('addProdutos4', (produto) => {
       cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > [name="s"]').click().type(produto)
       cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
       cy.get('.button-variable-item-L').click()
       cy.get('.button-variable-item-Blue').click()
       cy.get('.single_add_to_cart_button').click()
})

import { faker } from '@faker-js/faker';

Cypress.Commands.add('checkout', () => {
       let nome = faker.person.firstName()
       let sobrenome = faker.person.lastName()
       let empresa = faker.company.name()
       let pais = faker.location.country()
       let endereco = faker.location.streetAddress()
       let numero = faker.number.int({ min: 1, max: 1000 })
       let cidade = faker.location.city()
       let estado = faker.location.state()
       let cep = faker.location.zipCode('#####-###')
       let telefone = faker.phone.number('###########')
       let email = faker.internet.email()
})




