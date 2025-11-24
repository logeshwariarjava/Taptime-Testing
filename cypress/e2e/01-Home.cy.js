describe('TapTime - Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.waitForPageLoad()
  })

  it('should load homepage and display main content', () => {
    cy.contains('Employee Time Tracking').should('be.visible')
    cy.contains('Made Simple').should('be.visible')
    cy.contains('One tap solution').should('be.visible')
    cy.get('body').should('be.visible')
  })

  it('should display hero section and buttons', () => {
    cy.contains('Get Started Free').should('be.visible')
    cy.contains('Watch Demo').should('be.visible')
    cy.contains('10K+').should('be.visible')
    cy.contains('Active Users').should('be.visible')
  })

  it('should display features section', () => {
    cy.contains('Facial Recognition').should('be.visible')
    cy.contains('Clock In/Out').should('be.visible')
    cy.contains('Timesheet Reports').should('be.visible')
    cy.contains('Admin Dashboard').should('be.visible')
  })

  it('should display contact form', () => {
    cy.get('#contact').scrollIntoView()
    cy.contains('Get in Touch').should('be.visible')
    cy.get('input[name="firstName"]').should('be.visible')
    cy.get('input[name="lastName"]').should('be.visible')
    cy.get('input[name="email"]').should('be.visible')
    cy.get('textarea[name="message"]').should('be.visible')
  })

  it('should be responsive on mobile', () => {
    cy.viewport(375, 667)
    cy.reload()
    cy.contains('Employee Time Tracking').should('be.visible')
    cy.get('#contact').scrollIntoView()
    cy.get('input[name="firstName"]').should('be.visible')
  })
})