const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until, Condition } = require('selenium-webdriver');
const { useEffect } = require('react');

async function waitForUrlToChange(driver, timeout) {
  const currentUrl = await driver.getCurrentUrl();
  await driver.wait(
    new Condition(
      'URL to change',
      async function (driver) {
        const newUrl = await driver.getCurrentUrl();
        return newUrl !== currentUrl;
      }
    ),
    timeout
  );
}

Before(async function () {
  // Set up the Selenium WebDriver
  this.driver = await new Builder().forBrowser('chrome').build();
});

After(async function () {
  // Quit the Selenium WebDriver after each scenario
  await this.driver.quit();
});


//////////////// OPENING RECENT TRANSACTIONS PAGE //////////////////////////////////////////////////////////////////////////////////////////////

Given(/^(?:I )?started the application$/, async function () {
  // Navigate to the homepage
  await this.driver.get('http://localhost:3000');
  await this.driver.manage().window().setRect({ width: 393, height: 851 });
});

When(/^I click the button with text "([^"]*)"$/, async function (buttonText) {
  const buttonSelector = By.xpath(`//button[text()="${buttonText}"]`);
  this.foundButton = await this.driver.findElement(buttonSelector);
  await new Promise(resolve => setTimeout(resolve, 1000));
  await this.foundButton.click();
  await waitForUrlToChange(this.driver, 5000); // Wait for 5 seconds or adjust the timeout as needed
});


Then(/^I will be on the Google sign in page$/, async function () {
  const expectedUrl = 'https://accounts.google.com/v3/signin/identifier';
  const currentUrl = await this.driver.getCurrentUrl();
  const urlWithoutIdentifier = currentUrl.split('?')[0]; // Extract the part before the '?'
  assert.strictEqual(urlWithoutIdentifier, expectedUrl, 'The URL without the identifier does not match');
})

When(/^I input Gmail account "([^"]*)"$/, async function (gmailAccount) {
  const inputSelector = By.css('input[type="email"]');
  const inputField = await this.driver.findElement(inputSelector);
  await inputField.sendKeys(gmailAccount);
});


module.exports = {
  Given,
  When,
  Then,
  Before,
  After,
};
