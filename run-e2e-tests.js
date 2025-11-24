const { execSync } = require('child_process');

console.log('🚀 TapTime E2E Test Suite - Custom Flow');
console.log('=====================================\n');

const testSequence = [
  { file: '01-Home.cy.js', description: 'Homepage functionality and UI tests' },
  { file: '02-Register.cy.js', description: 'Registration with logiammu123@gmail.com' },
  { file: '03-Login.cy.js', description: 'Login with test credentials' },
  { file: '04-Contact.cy.js', description: 'Contact form demo submission' }
];

console.log('📋 Test Execution Order:');
testSequence.forEach((test, index) => {
  console.log(`   ${index + 1}. ${test.file} - ${test.description}`);
});
console.log('\n');

let results = [];

function runSingleTest(testFile, description) {
  console.log(`\n🧪 Running: ${testFile}`);
  console.log(`📝 ${description}`);
  console.log('─'.repeat(60));
  
  try {
    const command = `npx cypress run --spec "cypress/e2e/${testFile}" --browser chrome`;
    console.log(`Executing: ${command}`);
    
    const output = execSync(command, { 
      encoding: 'utf8',
      stdio: 'inherit'
    });
    
    console.log(`✅ PASSED: ${testFile}`);
    results.push({ file: testFile, status: 'PASSED', description });
    return true;
    
  } catch (error) {
    console.log(`❌ FAILED: ${testFile}`);
    console.log(`Error: ${error.message}`);
    results.push({ file: testFile, status: 'FAILED', description, error: error.message });
    return false;
  }
}

// Run tests in sequence
console.log('🎬 Starting test execution...\n');

testSequence.forEach((test, index) => {
  console.log(`\n[${ index + 1 }/${ testSequence.length }] Starting ${test.file}...`);
  runSingleTest(test.file, test.description);
});

// Summary
console.log('\n' + '='.repeat(60));
console.log('📊 EXECUTION SUMMARY');
console.log('='.repeat(60));

const passed = results.filter(r => r.status === 'PASSED').length;
const failed = results.filter(r => r.status === 'FAILED').length;

console.log(`Total Tests: ${results.length}`);
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`📈 Success Rate: ${((passed / results.length) * 100).toFixed(1)}%`);

console.log('\n📋 DETAILED RESULTS:');
results.forEach((result, index) => {
  const status = result.status === 'PASSED' ? '✅' : '❌';
  console.log(`${index + 1}. ${status} ${result.file} - ${result.status}`);
  console.log(`   ${result.description}`);
  if (result.error) {
    console.log(`   Error: ${result.error.substring(0, 100)}...`);
  }
});

console.log('\n🎯 Test Flow Completed!');
console.log('Check Cypress screenshots and videos for detailed results.');

process.exit(failed > 0 ? 1 : 0);