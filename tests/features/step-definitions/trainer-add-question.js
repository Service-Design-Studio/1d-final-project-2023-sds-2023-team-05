// const { Given, When, Then } = require('@cucumber/cucumber');
// const { By, Button } = require('selenium-webdriver');
// const { expect, assert } = require('chai');

// /// Trainer sees a table of questions

// /// Trainer see the Add Question pop up
// When('I click the Add Question button', async function () {
// 	return true;
// });

// Then('I see the Add Question pop up', async function () {
// 	return true;
// });

Then('I see the Add Question pop up', async function () {
  // driver.findElement(By.id('new-question-dialog'));
  return true;
});

/// Trainer adds a question and answer
Given('I am at the Add Question pop up', async function () {
  // await driver.findElement(By.id('add-question-button')).click();
  return true;
});

When(/^I enter the question with text '(.*)'/, async function (question) {
  // const questionInput = await driver.findElement(By.id('question-input'));
  // await questionInput.sendKeys(question);
  return true;
});

When(/^I choose the tag with text '(.*)'/, async function (tagName) {
  // const dropdownElement = await driver.findElement(By.id('tag-selector'));
  // await dropdownElement.click();

  // await driver.sleep(1000);
  // const dropdownOption = await driver.findElement(
  // 	By.xpath('/html/body/div[4]')
  // );
  // await dropdownOption.click();
  return true;
});

When(/^I enter the answer with text '(.*)'/, async function (answer) {
  // const answerInput = await driver.findElement(By.id('answer-input'));
  // await answerInput.click();
  // await answerInput.sendKeys(answer);
  return true;
});

When("I click the 'Submit' button", async function () {
  // const submitButton = await driver.findElement(By.id('submit-question'));
  // await submitButton.click();
  // await driver.sleep(1000);
  return true;
});

Then('I will be on the question page', async function () {
  // const h2Element = await driver.findElement(By.id('faq'));
  // const pageTitle = await h2Element.getText();
  // assert.strictEqual(pageTitle, 'FAQs');
  return true;
});

// When(
// 	"I click on the kebab menu of the question with text 'SX Testing Question'",
// 	async function () {
// 		return true;
// 	}
// );

// When("I click the 'Delete' option", async function () {
// 	return true;
// });

// /// Trainer fails to enter question
// Then(
// 	"I will see an alert with text 'Fill question properly!'",
// 	async function () {
// 		return true;
// 	}
// );

// /// Trainer fails to enter answer
// Then(
// 	"I will see an alert with text 'Fill answer properly!'",
// 	async function () {
// 		return true;
// 	}
// );
