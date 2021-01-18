describe('About page test', () => {
  it('Visits about page', () => {
    cy.visit('/about');
  });

  it('Checks the header & external links', () => {
    cy.get('header').find('h1').should('contain', 'About');

    cy.get('header')
      .find('a[title="GitHub"]')
      .should('have.attr', 'href', 'https://github.com/JonShort');

    cy.get('header')
      .find('a[title="Twitter"]')
      .should('have.attr', 'href', 'https://twitter.com/altshort');
  });

  it('Checks body copy exists', () => {
    cy.get('article')
      .children('div')
      .children()
      .should((a) =>
        expect(a.length, 'body copy [array]').to.be.greaterThan(0)
      );
  });

  it('Navigates to homepage', () => {
    cy.get('a:contains("Home")').click();

    cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
  });

  it('Returns to about page', () => {
    cy.contains('About').click();

    cy.url().should('include', '/about');
  });
});
