/// <reference types="cypress" />

describe('Funcionalidade: Registro', () => {

    it('Deve fazer o registro com sucesso', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.visit(' http://lojaebac.ebaconline.art.br/')
        cy.get('.dropdown-toggle > .zmdi').click()
        cy.get('#topmenu > .menu-item-221 > a').click()
        cy.get('[name="email"]').type(email)
        cy.get('.register > :nth-child(2) > [name="password"]').type('teste123')
        cy.get('[name="register"]').click()
        //Equivalente ao pré-cadastro
    });

});