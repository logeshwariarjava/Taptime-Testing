// ***********************************************
// TapTime Custom Commands
// ***********************************************

// Login command with your test credentials
Cypress.Commands.add('login', (email = 'logiammu123@gmail.com', password = 'Logi@515') => {
  cy.visit('/login')
  cy.get('input[name="email"]').clear().type(email)
  cy.get('input[name="password"]').clear().type(password)
  cy.get('button[type="submit"]').click()
  cy.wait(3000)
})

// Quick login for authenticated tests
Cypress.Commands.add('loginAsTestUser', () => {
  cy.login('logiammu123@gmail.com', 'Logi@515')
})

// Navigate to specific pages
Cypress.Commands.add('navigateToEmployeeManagement', () => {
  cy.visit('/employee-management')
})

Cypress.Commands.add('navigateToReports', () => {
  cy.visit('/reports')
})

Cypress.Commands.add('navigateToProfile', () => {
  cy.visit('/profile')
})

// Form helpers
Cypress.Commands.add('fillContactForm', (formData) => {
  cy.get('input[name="firstName"]').type(formData.firstName)
  cy.get('input[name="lastName"]').type(formData.lastName)
  cy.get('input[name="email"]').type(formData.email)
  if (formData.phone) cy.get('input[name="phone"]').type(formData.phone)
  if (formData.company) cy.get('input[name="company"]').type(formData.company)
  cy.get('textarea[name="message"]').type(formData.message)
})

// Wait for page load
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible')
  cy.get('body').should('not.be.empty')
})

// Check if element exists without failing
Cypress.Commands.add('elementExists', (selector) => {
  return cy.get('body').then($body => {
    return $body.find(selector).length > 0
  })
})

// Screenshot with timestamp
Cypress.Commands.add('takeScreenshot', (name) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  cy.screenshot(`${name}-${timestamp}`)
})