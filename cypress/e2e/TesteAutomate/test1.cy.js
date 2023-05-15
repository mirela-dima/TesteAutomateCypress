describe('Siteul Libris.ro', () => { 
  it('False credentials', () => {
    cy.visit('https://www.libris.ro/auth/login.jsp');
    cy.wait(8000);
    cy.get('.modal-form-newsletter-img-wr > .modal-content').type('{esc}');
    
    cy.get('.log-in-cont-form-ct');
    cy.get('#date-inregistrare-user').type('mirela.dima1982@yahoo.it');
    cy.get('#parola').type('aaaaaa');
    cy.get('#parola').type('{enter}');
    cy.get('.log-in-cont-form-date-inregistrare-ct > :nth-child(2)').should('exist');
    })
})
