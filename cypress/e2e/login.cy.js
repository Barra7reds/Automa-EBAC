/// <reference types="cypress" />
import { faker } from '@faker-js/faker';


describe('Teste E2E do site da EBAC', () => {

    it('Teste E2E do site da EBAC', () => {
        cy.login('teste@77gmail.com', 'teste123')
        cy.addProdutos('Cassia Funnel Sweatshirt')
        cy.addProdutos2('Ariel Roll Sleeve Sweatshirt')
        cy.addProdutos3('Ajax Full-Zip Sweatshirt')
        cy.addProdutos4('Josie Yoga Jacket')
        cy.get('.dropdown-toggle > .text-skin').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.url().should('contain', 'checkout')
        cy.checkout()

        

        
    
    });





});

