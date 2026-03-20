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
       cy.get('.page-title').should('contain', 'Minha conta')
       cy.url().should('contain', 'my-account')

})
import { faker } from '@faker-js/faker';

Cypress.Commands.add('addProdutos', (produto, tamanho, cor) => {
       cy.visit('/home-3/')
       cy.get('.search-form > .btn').eq(1).click({ force: true })
       cy.get('[name="s"]').eq(2).type(produto, { force: true })
       cy.get('.button-search').eq(2).click({ force: true })
       cy.get('.variations_form.cart').should('be.visible')
       cy.get(`.button-variable-item-${tamanho}`).click()
       cy.get(`.button-variable-item-${cor}`).click()
       cy.get('.single_add_to_cart_button').click()
       cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
})

Cypress.Commands.add('Checkout', () => {
       cy.visit('/checkout/')
       cy.get('.page-title').should('contain', 'Checkout')
       cy.url().should('include', 'checkout')
       let firstName = faker.person.firstName()
       let lastName = faker.person.lastName()
       let company = faker.company.name()
       let address1 = faker.location.street()
       let address2 = faker.location.secondaryAddress()
       let city = faker.location.city()
       let postcode = faker.location.zipCode('#####-###')
       let phone = faker.phone.number('51 9####-####')

       cy.get('[name="billing_first_name"]').type(firstName).clear().type(firstName)
       cy.get('[name="billing_last_name"]').type(lastName).clear().type(lastName)
       cy.get('[name="billing_company"]').type(company).clear().type(company)
       cy.get('[name="billing_address_1"]').type(address1).clear().type(address1)
       cy.get('[name="billing_address_2"]').type(address2).clear().type(address2)
       cy.get('[name="billing_city"]').type(city).clear().type(city)
       cy.get('[name="billing_postcode"]').type(postcode).clear().type('98765-432')
       cy.get('[name="billing_phone"]').type(phone).clear().type(51 + '9876-5432')
       cy.get('#payment_method_bacs').click()
       cy.get('#terms').click()
       cy.get('#place_order').click()
       cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
})
       
    
      









