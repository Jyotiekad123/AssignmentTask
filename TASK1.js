import { Selector } from 'testcafe';

fixture`Login Tests`
  .page`https://beta.deepthought.education/login`;

const browsers = ['chrome', 'firefox']; // List of browsers to test

browsers.forEach(browser => {
  test(`Test on ${browser}`, async t => {
    await t
      .useRole(yourUserRole) // If applicable
      .typeText('input[name="username"]', 'your-username')
      .typeText('input[name="password"]', 'your-password')
      .click('button[type="submit"]');

    // Assert that you're on the dashboard screen after successful login
    await t.expect(Selector('h1').withText('Dashboard').exists).ok();
  });
});
