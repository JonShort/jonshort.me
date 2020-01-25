describe('Article page test', function() {
    it('Visits localhost', function() {
        cy.visit('http://localhost:3000/')
    })

    it('Sees a list of articles', function(){
        cy.get('section')
          .children('article')
          .should('not.have.length', 0)
    })

    it('Vists the first article', function() {
        cy.get('section a:first')
          .click()
          .then(function($anchor) {
            const articleUrl = $anchor.attr('href')

            cy.url()
              .should('include', articleUrl)
          })
    })

    it('Checks the header format', function() {
        cy.get('article > header')
          .find('time')
          .should('exist')

        cy.get('article > header')
          .find('h3')
          .should('exist')

        cy.get('article > header')
          .find('h4')
          .should('exist')

        cy.get('article > header')
          .find('h5')
          .should('exist')
    })

    it('Checks body copy exists', function() {
        cy.get('.t-body')
          .children()
          .should('not.have.length', 0)
    })

    it('Returns to home', function() {
        cy.get('.t-body')
          .next()
          .find('a')
          .click()

        cy.url()
          .should('be', 'http://localhost:3000/')
    })
  })
