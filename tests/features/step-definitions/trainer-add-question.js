const { Given, When, Then } = require('@cucumber/cucumber');
const { By, Button } = require('selenium-webdriver');
const { expect, assert } = require('chai');

/// Trainer sees a table of questions

/// Trainer see the Add Question pop up
When('I click the Add Question button', async function () {
  await driver.sleep(500);
  await driver.findElement(By.id('add-question-button')).click();
});

Then('I see the Add Question pop up', async function () {
  await driver.sleep(500);
  const dialog = await driver.findElement(By.id('new-question-dialog'));
  // check that it exists
  assert.exists(dialog);
});

/// Trainer adds a question and answer
Given('I am at the Add Question pop up', async function () {
  await driver.findElement(By.id('add-question-button')).click();
  // return true;
});

When(/^I enter the question with text '(.*)'/, async function (question) {
  const questionInput = await driver.findElement(By.id('question-input'));
  await questionInput.sendKeys(question);
  // return true;
});

When(/^I choose the tag with text '(.*)'/, async function (tagName) {
  const dropdownElement = await driver.findElement(By.id('tag-selector'));
  await dropdownElement.click();

  await driver.sleep(500);
  const dropdownOption = await driver.findElement(
    By.id('Christianity-selector')
  );
  await dropdownOption.click();
  // return true;
});

When(
  'I will see the newly added question with text {string}',
  async function (string) {
    const text = await driver.findElement(
      By.xpath('//*[contains(text(), string)]')
    );
    expect(text).to.exist;
  }
);

Then(
  'I will see the newly added answer with text {string}',
  async function (string) {
    // Write code here that turns the phrase above into concrete actions
    const text = await driver.findElement(
      By.xpath('//*[contains(text(), string)]')
    );
    expect(text).to.exist;
  }
);

When(/^I enter the answer with text '(.*)'/, async function (answer) {
  const answerInput = await driver.findElement(By.id('answer-input'));
  await answerInput.click();
  await answerInput.sendKeys(answer);
  // return true;
});

When("I click the 'Submit' button", async function () {
  const submitButton = await driver.findElement(By.id('submit-question'));
  await submitButton.click();
  await driver.sleep(1000);
  // return true;
});

When('I see the question with text {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  const text = await driver.findElement(
    By.xpath('//*[contains(text(), string)]')
  );
  expect(text).to.exist;
});

Then('I will be on the question page', async function () {
  const h2Element = await driver.findElement(By.id('faq'));
  const pageTitle = await h2Element.getText();
  assert.strictEqual(pageTitle, 'FAQs');
  // return true;
});

When(
  "I click on the kebab menu of the question with text 'SX Testing Question'",
  async function () {
    const kebabMenu = await driver.findElement(By.className('menuButton'));
    await kebabMenu.click();
    await driver.sleep(500);
  }
);

Then(
  'the question with text {string} will be deleted',
  async function (string) {
    // const text = await driver.findElement(
    //   By.xpath('//*[contains(text(), SX Testing Question)]')
    // );
    // !expect(text).to.not.exist;
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert.notInclude(bodyText, string);
  }
);

When("I click the 'Delete' option", async function () {
  const deleteButton = await driver.findElement(By.id('delete-question'));
  await deleteButton.click();
  await driver.sleep(500);
});

/// Trainer fails to enter question
Then(
  "I will see an alert with text 'Fill question properly!'",
  async function () {
    // check for alert with text
    await driver.sleep(500);
    // Store the alert in a variable
    let alert = await driver.switchTo().alert();

    //Store the alert text in a variable
    let alertText = await alert.getText();

    assert.strictEqual(alertText, 'Fill question properly!');

    //Press the OK button
    await alert.accept();
  }
);

/// Trainer fails to enter answer
Then(
  "I will see an alert with text 'Fill answer properly!'",
  async function () {
    // check for alert with text
    await driver.sleep(500);
    // Store the alert in a variable
    let alert = await driver.switchTo().alert();

    //Store the alert text in a variable
    let alertText = await alert.getText();

    assert.strictEqual(alertText, 'Fill answer properly!');

    //Press the OK button
    await alert.accept();
  }
);
