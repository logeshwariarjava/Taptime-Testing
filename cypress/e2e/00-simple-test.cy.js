describe('Simple Test', () => {
  it('should load the website', () => {
    cy.visit('/')
    cy.get('body').should('be.visible')
    cy.contains('Kitchen Sink').should('exist')
  })
})