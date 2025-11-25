describe('Simple Test', () => {
  it('should load the website', () => {
    cy.visit('/')
    cy.get('body').should('be.visible')
    cy.contains('TapTime').should('exist')
  })
})