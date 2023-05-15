describe('On LinkedIn', () =>{
    it("I can login", () =>{
        cy.visit("https://linkedin.com");
        cy.get('[action-type="ACCEPT"]').click();  
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('mirela.dima29782@gmail.com');
        cy.get('#password').type('y386842t');
        cy.get('.btn__primary--large').click();

        cy.get('#ember15').should('exist');
    
    })
})
