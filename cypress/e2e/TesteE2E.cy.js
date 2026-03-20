/// <reference types="cypress" />
import { faker } from '@faker-js/faker';


describe('Teste E2E do site da EBAC', () => {

    beforeEach(() => {
        cy.visit('/')
    })
    it('Teste E2E do site da EBAC', () => {
        cy.login('teste@77gmail.com', 'teste123')
        cy.addProdutos('Cassia Funnel Sweatshirt', 'XS', 'Orange')
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'L', 'Green')
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'M', 'Blue')
        cy.addProdutos('Josie Yoga Jacket', 'L', 'Black')
        cy.Checkout()
    });

});

