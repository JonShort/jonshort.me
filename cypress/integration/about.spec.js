describe('About page test', function() {
  it('Visits localhost', function() {
    cy.visit('http://localhost:3000/')
  })

  it('Visits about page', function() {
    cy.contains('About').click()
    
    cy.url().should('include', '/about')
  })

  it('Checks the header & external links', function() {
    cy.get('header').find('h1').should('contain', 'About')

    cy.get('header').find('a[title="GitHub"]').should('have.attr', 'href', 'https://github.com/JonShort')

    cy.get('header').find('a[title="Twitter"]').should('have.attr', 'href', 'https://twitter.com/altshort')
  })

  it('Checks body copy exists', function() {
    cy
      .get('article')
      .children('div')
      .children()
      .should('have.length', 4)
  })

  it('Returns to homepage', function() {
    cy.get('a:contains("Home")').click()

    cy.url().should('be', 'http://localhost:3000/')
  })
})