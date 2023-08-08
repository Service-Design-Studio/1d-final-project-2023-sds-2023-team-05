const { Given, When, Then, And } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const { expect, assert } = require('chai');
const { Driver } = require('selenium-webdriver/safari');
const { URLS } = require('./init');

Given('I am on chatbot page', async function () {
  const bodyText = await driver.findElement(By.tagName('body')).getText();
  expect(bodyText).to.contain('Chatbot');
});

/// Scenario: Trainer heads to Chatbot page
When('I click on the Chatbot button in the header', async function () {});

Then('I will be on the chatbot page', async function () {
  driver.sleep(500);
  const bodyText = await driver.findElement(By.tagName('body')).getText();
  expect(bodyText).to.contain('Chatbot');
});

Given('I am on the trainer chatbot page', async function () {
  const currentURL = await driver.getCurrentUrl();
  // strip current url to the base
  const base = currentURL.split('/').slice(0, 3).join('/');
  await driver.get(base + '/chatbot');
  driver.sleep(500);
});

When('I click on the {string} tab', async function (string) {
  if (string === 'Flagged') {
    await driver.findElement(By.id('flaggedresponses')).click();
  } else if (string === 'All') {
    await driver.findElement(By.id('allresponses')).click();
  } else if (string === 'Edited') {
    await driver.findElement(By.id('editedresponses')).click();
  }
});

Then(
  'I will see all the questions that have been {string}',
  async function (string) {
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    if (string === 'asked') {
      // bodyText contains all responses
      expect(bodyText).to.contain('View all responses from the chatbot.');
    } else if (string === 'flagged') {
      expect(bodyText).to.contain('Responses students have flagged.');
    } else if (string === 'edited') {
      expect(bodyText).to.contain('Responses you have edited.');
    }
  }
);
