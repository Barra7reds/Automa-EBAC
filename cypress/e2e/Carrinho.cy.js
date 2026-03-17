/// <reference types="cypress" />

describe('Funcionalidade: Adição ao carrinho', () => {

    it('Deve adicionar um produto ao carrinho', () => {
        cy.visit('/home-3/')
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > [name="s"]').click().type('Cassia Funnel Sweatshirt')
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.single_add_to_cart_button').click()

    })



});
