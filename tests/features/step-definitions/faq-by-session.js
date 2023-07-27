const { Given, When, Then, And } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const { expect, assert } = require('chai');

// function: Key in session code
async function keyInDigit(sessionCode, digitIndex) {
  const digit = sessionCode[digitIndex];
  const box = await driver.findElement(By.id(digitIndex.toString()));
  await box.sendKeys(digit);
}

///// Learner sees a customised FAQ page for the training session with code 952555
Given('I am on the sign in page', async function () {
  const h2Element = await driver.findElement(
    By.xpath('/html/body/main/div/h2')
  );
  const pageTitle = await h2Element.getText();
  assert.strictEqual(pageTitle, 'Kampung Klass');
});

When(/^I key in the class code (.*)/, async function (sessionCode) {
  await keyInDigit(sessionCode, 0); // key in first digit
  await keyInDigit(sessionCode, 1); // key in second digit
  await keyInDigit(sessionCode, 2); // key in third digit
  await keyInDigit(sessionCode, 3); // key in fourth digit
  await keyInDigit(sessionCode, 4); // key in fifth digit
  await keyInDigit(sessionCode, 5); // key in sixth digit
});

Then(
  'I will see the customised FAQ page with the following questions:',
  async function (dataTable) {
    await driver.sleep(1000);
    const questions = await driver.findElements(By.className('question'));

    const questionTexts = await Promise.all(
      questions.map(async (question) => {
        return await question.getText();
      })
    );

    const dataTableTexts = dataTable.raw().flat();

    for (data of dataTableTexts) {
      expect(questionTexts.includes(data)).to.be.true;
    }
  }
);

// ///// Learner sees a different customised FAQ page for the training session with code 725018

///// Learner clicks into a question of interest to see the answer
Given(
  /^I am on the customised FAQ page for session code (.*)/,
  async function (sessionCode) {
    await keyInDigit(sessionCode, 0); // key in first digit
    await keyInDigit(sessionCode, 1); // key in second digit
    await keyInDigit(sessionCode, 2); // key in third digit
    await keyInDigit(sessionCode, 3); // key in fourth digit
    await keyInDigit(sessionCode, 4); // key in fifth digit
    await keyInDigit(sessionCode, 5); // key in sixth digit

    // await driver.sleep(1000);
  }
);

When(/^I type "(.*)" in the search bar/, async function (search) {
  await driver.sleep(1000);
  const searchInput = await driver.findElement(By.id('searchInput'));
  await searchInput.sendKeys(search);
});

Then(/^I will see a question with text "(.*)"/, async function (search) {
  await driver.sleep(1000);
  const question = await driver.findElement(By.className('question'));
  const questionText = await question.getText();
  expect(questionText).to.equal(search);
});

///// Learner successfully searches for a question regarding pilgrimage in the search bar for session code 725018
When(/^I click the question with text "(.*)"/, async function (question) {
  await driver.sleep(1000);
  const questionElement = await driver.findElement(By.className('question'));
  await questionElement.click();
});

Then(
  /^I will see the corresponding answer with text "(.*)"/,
  async function (answer) {
    await driver.sleep(1000);
    const answerElement = await driver.findElement(By.className('answer'));
    const answerText = await answerElement.getText();
    expect(answerText).to.equal(answer);
  }
);

///// Learner fails to search for a question regarding pilgrimage in the search bar for session code 952255
Then('I will see "dont have question" on the screen', async function () {
  await driver.sleep(1000);
  const noQuestion = await driver.findElement(By.className('noQuestion'));
  expect(noQuestion).to.exist;
});

///// Learner goes back to landing page from the FAQ page
When('I click the back button', async function () {
  await driver.sleep(500);
  const backButton = await driver.findElement(By.className('backButton'));
  await backButton.click();
  await driver.sleep(1000);
});
