describe('TapTime - Registration & Login Flow', () => {
  const testData = {
    companyName: 'TapTime Demo Company',
    companyStreet: '123 Business Street',
    companyCity: 'Chennai',
    companyState: 'Tamil Nadu',
    companyZip: '600001',
    noOfDevices: '5',
    noOfEmployees: '25',
    firstName: 'Logi',
    lastName: 'Ammu',
    email: 'logiammu123@gmail.com',
    phone: '9876543210',
    customerStreet: '456 Customer Lane',
    customerCity: 'Chennai',
    customerState: 'Tamil Nadu',
    customerZip: '600002',
    password: 'Logi@515'
  }

  it('should complete registration and login flow', () => {
    // REGISTRATION
    cy.visit('/register')
    cy.waitForPageLoad()
    
    // Step 1
    cy.get('input[name="companyName"]').type(testData.companyName)
    cy.get('input[name="companyStreet"]').type(testData.companyStreet)
    cy.get('input[name="companyCity"]').type(testData.companyCity)
    cy.get('input[name="companyState"]').type(testData.companyState)
    cy.get('input[name="companyZip"]').type(testData.companyZip)
    cy.get('input[name="noOfDevices"]').type(testData.noOfDevices)
    cy.get('input[name="noOfEmployees"]').type(testData.noOfEmployees)
    
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
    
    // Step 2
    cy.get('input[name="firstName"]').type(testData.firstName)
    cy.get('input[name="lastName"]').type(testData.lastName)
    cy.get('input[name="email"]').type(testData.email)
    cy.get('input[name="phone"]').type(testData.phone)
    cy.get('input[name="customerStreet"]').type(testData.customerStreet)
    cy.get('input[name="customerCity"]').type(testData.customerCity)
    cy.get('input[name="customerState"]').type(testData.customerState)
    cy.get('input[name="customerZip"]').type(testData.customerZip)
    cy.get('input[name="password"]').type(testData.password)
    cy.get('input[name="confirmPassword"]').type(testData.password)
    
    cy.get('button[type="submit"]').click()
    cy.wait(5000)
    
    // LOGIN
    cy.visit('/login')
    cy.waitForPageLoad()
    
    cy.get('input[name="email"]').type(testData.email)
    cy.get('input[name="password"]').type(testData.password)
    cy.get('button[type="submit"]').click()
    cy.wait(5000)
    
    // VERIFY DASHBOARD
    cy.url().should('include', '/employee-management')
    cy.get('body').should('be.visible')
  })

  it('should validate form fields', () => {
    cy.visit('/register')
    
    // Test empty submission
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
    
    // Test numeric validation
    cy.get('input[name="noOfDevices"]').type('abc123')
    cy.get('input[name="noOfDevices"]').should('have.value', '123')
  })
})