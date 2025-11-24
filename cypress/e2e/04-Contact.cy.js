describe('TapTime - Contact Form Tests', () => {
  const contactData = {
    firstName: 'Logi',
    lastName: 'Ammu',
    email: 'logiammu123@gmail.com',
    phone: '+91 9876543210',
    company: 'TapTime Demo Company',
    message: 'This is a demo contact form submission for E2E testing. Testing the complete contact flow with all form fields filled properly.'
  }

  beforeEach(() => {
    cy.visit('/')
    cy.waitForPageLoad()
    cy.get('#contact').scrollIntoView()
  })

  it('should fill and submit contact form with validation', () => {
    // Test empty form validation
    cy.get('button[type="submit"]').click()
    cy.get('input[name="firstName"]:invalid').should('exist')
    
    // Test invalid email validation
    cy.get('input[name="firstName"]').type('Test')
    cy.get('input[name="lastName"]').type('User')
    cy.get('input[name="email"]').type('invalid-email')
    cy.get('textarea[name="message"]').type('Test message')
    cy.get('button[type="submit"]').click()
    cy.get('input[name="email"]:invalid').should('exist')
    
    // Fill complete form with valid data
    cy.get('input[name="firstName"]').clear().type(contactData.firstName)
    cy.get('input[name="lastName"]').clear().type(contactData.lastName)
    cy.get('input[name="email"]').clear().type(contactData.email)
    cy.get('input[name="phone"]').type(contactData.phone)
    cy.get('input[name="company"]').type(contactData.company)
    cy.get('textarea[name="message"]').clear().type(contactData.message)
    
    // Verify all fields are filled
    cy.get('input[name="firstName"]').should('have.value', contactData.firstName)
    cy.get('input[name="lastName"]').should('have.value', contactData.lastName)
    cy.get('input[name="email"]').should('have.value', contactData.email)
    cy.get('textarea[name="message"]').should('have.value', contactData.message)
    
    // Submit form
    cy.get('button[type="submit"]').click()
    cy.wait(3000)
  })

  it('should display form elements correctly', () => {
    cy.contains('Get in Touch').should('be.visible')
    cy.get('input[name="firstName"]').should('be.visible')
    cy.get('input[name="lastName"]').should('be.visible')
    cy.get('input[name="email"]').should('be.visible')
    cy.get('input[name="phone"]').should('be.visible')
    cy.get('input[name="company"]').should('be.visible')
    cy.get('textarea[name="message"]').should('be.visible')
    cy.get('button[type="submit"]').should('contain', 'Send Message')
  })

  it('should be responsive on mobile', () => {
    cy.viewport(375, 667)
    cy.reload()
    cy.get('#contact').scrollIntoView()
    cy.get('input[name="firstName"]').should('be.visible')
    cy.get('input[name="email"]').should('be.visible')
    cy.get('textarea[name="message"]').should('be.visible')
  })
})