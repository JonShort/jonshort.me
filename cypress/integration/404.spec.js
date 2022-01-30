describe('404 page test', () => {
  it('Visits a page which will 404', () => {
    cy.visit('/not/found/page');
  });

  it('Checks the header & external links', () => {
    cy.get('header').find('h1').should('contain', '404');
    cy.get('header').find('h2').should('contain', "I've become lost in the matrix");
  });

  it('Navigates to homepage using link', () => {
    cy.get('a:contains("Home")').click();

    cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
  });
});
