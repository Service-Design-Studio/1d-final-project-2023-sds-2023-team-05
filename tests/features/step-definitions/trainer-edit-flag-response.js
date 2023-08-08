const { Given, When, Then, And } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const { expect, assert } = require('chai');
const { Driver } = require('selenium-webdriver/safari');

/// Trainer heads to Chatbot page

/// Trainer reviews a sensitive question about Islam
When('I see a flagged response', async function () {
  const bodyText = await driver.findElement(By.tagName('body')).getText();
  expect(bodyText).to.contain('flagged');
});

When("I press the 'Edit' button", async function () {
  const button = await driver.findElement(By.className('editButton'));
  await button.click();
});

Then("I see the 'Edit Chatbot Response' pop up", async function () {
  const editChatbotDialog = await driver.findElement(
    By.id('edit-chatbot-dialog')
  );
  expect(editChatbotDialog).to.exist;
});

When(
  "I key in the edited response in the 'Trained Response' text box",
  async function () {
    const inputField = await driver.findElement(By.id('answer-input'));
    await inputField.sendKeys('This is an edited response');
  }
);

Then(
  "I click 'Submit' button in the 'Edit Chatbot Response' pop up",
  async function () {
    const button = await driver.findElement(By.id('submit-question'));
    await button.click();
  }
);

/// Scenario: Trainer reviews edited response for the sensitive question about Islam
When("I click the 'Edited Responses' tab", async function () {
  const editedTabButton = await driver.findElement(By.id('editedresponses'));
  await editedTabButton.click();
});

Then("I will be on the 'Edited Responses' tab page", async function () {
  const bodyText = await driver.findElement(By.tagName('body')).getText();
  expect(bodyText).to.contain('Responses you have edited');
});

Then('I will see my edited response', async function () {
  const bodyText = await driver.findElement(By.tagName('body')).getText();
  expect(bodyText).to.contain('This is an edited response');
});
