describe('Employee List Tests', () => {
  beforeEach(() => {
    cy.visit('/employees')
  })

  it('should display employee list page', () => {
    cy.contains('Employee Management')
    cy.get('[data-cy=employee-card]').should('exist')
  })

  it('should open add employee modal', () => {
    cy.get('[data-cy=add-employee-btn]').click()
    cy.contains('Add Employee')
  })

  it('should filter employees by search', () => {
    cy.get('[data-cy=search-input]').type('John')
    cy.get('[data-cy=employee-card]').should('contain', 'John')
  })
})