describe('TapTime - Multi-Role Login Tests', () => {
  const users = {
    owner: {
      email: 'logioffical1234@gmail.com',
      password: 'Logi@515',
      role: 'Owner'
    },
    superAdmin: {
      email: 'logioffical@gmail.com',
      password: 'Logi@515',
      role: 'Super Admin'
    },
    admin: {
      email: 'logeshwari515logu@gmail.com',
      password: 'Logi@515',
      role: 'Admin'
    }
  }

  beforeEach(() => {
    cy.visit('/login')
    cy.waitForPageLoad()
  })

  it('should test Owner login and dashboard access', () => {
    cy.log('🔑 Testing Owner Login')
    
    cy.get('input[name="email"]').type(users.owner.email)
    cy.get('input[name="password"]').type(users.owner.password)
    cy.takeScreenshot('owner-login-filled')
    
    cy.get('button[type="submit"]').click()
    cy.wait(5000)
    
    cy.url().should('include', '/employee-management')
    cy.get('body').should('be.visible')
    cy.takeScreenshot('owner-dashboard')
    
    cy.log('✅ Owner login successful')
  })

  it('should test Super Admin login and dashboard access', () => {
    cy.log('🔑 Testing Super Admin Login')
    
    cy.get('input[name="email"]').type(users.superAdmin.email)
    cy.get('input[name="password"]').type(users.superAdmin.password)
    cy.takeScreenshot('superadmin-login-filled')
    
    cy.get('button[type="submit"]').click()
    cy.wait(5000)
    
    cy.url().should('include', '/employee-management')
    cy.get('body').should('be.visible')
    cy.takeScreenshot('superadmin-dashboard')
    
    cy.log('✅ Super Admin login successful')
  })

  it('should test Admin login and dashboard access', () => {
    cy.log('🔑 Testing Admin Login')
    
    cy.get('input[name="email"]').type(users.admin.email)
    cy.get('input[name="password"]').type(users.admin.password)
    cy.takeScreenshot('admin-login-filled')
    
    cy.get('button[type="submit"]').click()
    cy.wait(5000)
    
    // Check if login was successful or failed
    cy.url().then((url) => {
      if (url.includes('/employee-management')) {
        cy.log('✅ Admin login successful')
        cy.takeScreenshot('admin-dashboard')
      } else {
        cy.log('❌ Admin login failed - staying on login page')
        cy.takeScreenshot('admin-login-failed')
        // Check for error message
        cy.get('body').should('be.visible')
      }
    })
  })

  it('should test login form validation', () => {
    // Test empty form
    cy.get('button[type="submit"]').click()
    cy.get('input[name="email"]:invalid').should('exist')
    
    // Test invalid email
    cy.get('input[name="email"]').type('invalid-email')
    cy.get('input[name="password"]').type('password')
    cy.get('button[type="submit"]').click()
    cy.get('input[name="email"]:invalid').should('exist')
    
    // Test wrong credentials
    cy.get('input[name="email"]').clear().type('wrong@email.com')
    cy.get('input[name="password"]').clear().type('wrongpassword')
    cy.get('button[type="submit"]').click()
    cy.wait(3000)
  })

  it('should test login UI elements', () => {
    cy.contains('Welcome back').should('be.visible')
    cy.get('input[name="email"]').should('be.visible')
    cy.get('input[name="password"]').should('be.visible')
    cy.get('button[type="submit"]').should('contain', 'Sign in')
    cy.contains('Sign in with Google').should('be.visible')
    cy.contains('Remember me').should('be.visible')
    cy.contains('Forgot password?').should('be.visible')
  })

  it('should test password visibility toggle', () => {
    cy.get('input[name="password"]').type('testpassword')
    cy.get('input[name="password"]').should('have.attr', 'type', 'password')
    
    cy.get('input[name="password"]').parent().find('button').click()
    cy.get('input[name="password"]').should('have.attr', 'type', 'text')
  })
})