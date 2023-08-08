const { Given, When, Then, And } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const { expect, assert } = require('chai');
const { Driver } = require('selenium-webdriver/safari');

/// Trainer generates response from question about Christianity
When("I click the button 'AI Assist'", async function () {
  const button = await driver.findElement(By.id('ai-assist'));
  await button.click();
});

Then(
  /^I will see a generated answer that contains the word '(.*)'/,
  async function (word) {
    await driver.sleep(4000);
    const inputField = await driver.findElement(By.id('answer-input'));
    const text = await inputField.getAttribute('value');
    expect(text).to.contain(word);
  }
);

/// Trainer generates response from question about Islam

/// Trainer generates response from question about Buddhism
