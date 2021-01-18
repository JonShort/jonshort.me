describe('Article page test', () => {
  it('Visits homepage', () => {
    cy.visit('/');
  });

  it('sees a list of articles', () => {
    cy.get('section').children('article').should('not.have.length', 0);
  });

  it('vists the first article', () => {
    cy.get('section a:first')
      .click()
      .then(($anchor) => {
        const articleUrl = $anchor.attr('href');

        cy.url().should('include', articleUrl);
      });
  });

  it('checks the header format', () => {
    cy.get('article > header').find('time').should('exist');

    cy.get('article > header').find('h3').should('exist');

    cy.get('article > header').find('h4').should('exist');

    cy.get('article > header').find('h5').should('exist');
  });

  it('checks body copy exists', () => {
    cy.get('.t-body').children().should('not.have.length', 0);
  });

  it('returns to home', () => {
    cy.get('.t-body').next().find('a').click();

    cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
  });
});
