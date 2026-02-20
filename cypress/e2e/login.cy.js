/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {

    it('Deve fazer o login com sucesso', () => {
        cy.visit(' http://lojaebac.ebaconline.art.br/')
        cy.get('.dropdown-toggle > .zmdi').click()
        cy.get('#topmenu > .menu-item-221 > a').click()
        cy.get('[name="username"]').type('teste@77gmail.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste123')
        cy.get('[name="rememberme"]').click()
        cy.get('[name="login"]').click()

    });

});

//Melhorias gerais serão feitas quando eu estiver com mais polimento, mas essas versões mesmo rudimentares, já estão funcionando.