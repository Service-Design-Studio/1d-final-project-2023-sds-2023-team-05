const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until, Condition, Capabilities } = require('selenium-webdriver');
const { useEffect } = require('react');


const chromeCapabilities = Capabilities.chrome();
chromeCapabilities.set('acceptInsecureCerts', true);

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
  this.driver = await new Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();
});

After(async function () {
  // Quit the Selenium WebDriver after each scenario
  await new Promise(resolve => setTimeout(resolve, 5000));
  await this.driver.quit();
});


//////////////// OPENING RECENT TRANSACTIONS PAGE //////////////////////////////////////////////////////////////////////////////////////////////

Given(/^(?:I )?started the application$/, async function () {
  // Navigate to the homepage
  await this.driver.get('http://localhost:3000');
  await this.driver.manage().window().setRect({ width: 800, height: 851 });
});

When(/^I click the button with text "([^"]*)"$/, async function (buttonText) {
  let element;

  // Try finding the button with XPath
  try {
    const buttonSelector = By.xpath(`//button[text()="${buttonText}"]`);
    element = await this.driver.findElement(buttonSelector);
  } catch (error) {
    // Button not found, search for a span instead
    const spanSelector = By.xpath(`//a[text()="${buttonText}"]`);
    element = await this.driver.findElement(spanSelector);
  }
  await new Promise(resolve => setTimeout(resolve, 1000));
  await element.click();
  await waitForUrlToChange(this.driver, 5000); // Wait for 5 seconds or adjust the timeout as needed
});


Then(/^I will be on the "([^"]*)" page$/, async function (page) {
  const expectedUrl = page;
  const currentUrl = await this.driver.getCurrentUrl();
  const urlWithoutIdentifier = currentUrl.split('?')[0]; // Extract the part before the '?'
  console.log(urlWithoutIdentifier)
  assert.strictEqual(urlWithoutIdentifier, expectedUrl, 'The URL without the identifier does not match');
})

module.exports = {
  Given,
  When,
  Then,
  Before,
  After,
};
