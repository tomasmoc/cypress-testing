context('MyFirstTest', () => {
  beforeEach(() => {
    cy.visit('http://example.cypress.io/commands/actions')
  })

  // it('has an h1 on the page', () => {
  //   cy.get('h1').should('exist')
  // })

  // it('renders tge correct h1 text', () => {
  //   cy.get('h1').should('contain.text', 'Actions')
  // })

  // it('renders a paragraph under the h1', () => {
  //   cy.get('.container').eq(1).find('p').should('exist')
  // })

  // it('renders a section with the correct elements', () => {
  //   cy.get('.container').eq(2).within(() => {
  //     cy.get('p').should('exist')
  //     cy.get('a').should('exist')
  //     cy.get('ul').should('exist')
  //     cy.get('li').should('exist')
  //   })
  // })

  // it('correctly renders the cypress website link', () => {
  //   cy.findByText('cypress.io').should('exist')
  // })
  // it('types into an email field', () => { 
  //   cy.visit('http://example.cypress.io/commands/actions')
  //   cy.findByPlaceholderText('Email').type('test@email.com')
  //   cy.wait(2000).then(() => {
  //     console.log('test is finished')
  //     fetch('https://api.spacexdata.com/v3/missions')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data)
  //       })
  //   })
  // })

  it('shows an active class for current page,'() => {
    cy.visit('/commands/actions')
    cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
  })
})
