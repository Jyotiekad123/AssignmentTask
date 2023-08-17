import { Selector } from 'testcafe';

fixture`Login Tests`
  .page`https://beta.deepthought.education/login`;

// Test 1: Successful login with valid credentials
test('Successful login with valid credentials', async t => {
  await t
    .typeText('input[name="username"]', 'your-username')
    .typeText('input[name="password"]', 'your-password')
    .click('button[type="submit"]');

  // Assert that you're on the dashboard screen after successful login
  await t.expect(Selector('h1').withText('Dashboard').exists).ok();
});

// Test 2: Unsuccessful login attempts with invalid credentials
test('Unsuccessful login attempts with invalid credentials', async t => {
  await t
    .typeText('input[name="username"]', 'invalid-username')
    .typeText('input[name="password"]', 'invalid-password')
    .click('button[type="submit"]');

  // Assert that an error message is displayed
  await t.expect(Selector('.error-message').exists).ok();
});

// Test 3: Validate error messages for invalid login attempts
test('Validate error messages for invalid login attempts', async t => {
  await t
    .typeText('input[name="username"]', 'invalid-username')
    .typeText('input[name="password"]', 'invalid-password')
    .click('button[type="submit"]');

  // Assert that the specific error message is displayed
  await t.expect(Selector('.error-message').withText('Invalid credentials').exists).ok();
});

// Test 4: Successful login redirects to the dashboard screen
test('Successful login redirects to the dashboard screen', async t => {
  await t
    .typeText('input[name="username"]', 'your-username')
    .typeText('input[name="password"]', 'your-password')
    .click('button[type="submit"]');

  // Assert that you're on the dashboard screen after successful login
  await t.expect(Selector('h1').withText('Dashboard').exists).ok();
});

