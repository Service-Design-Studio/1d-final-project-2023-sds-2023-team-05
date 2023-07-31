const { Given, When, Then, And } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const { expect, assert } = require('chai');

async function keyInDigit(sessionCode, digitIndex) {
  const digit = sessionCode[digitIndex];
  const box = await driver.findElement(By.id(digitIndex.toString()));
  await box.sendKeys(digit);
}

/////////////////////////////// Learner sees a customised FAQ page ////////////////////////////

/////////////////////////////// Learner sees the chatbot page ////////////////////////////
Given('I am on the customised FAQ page', async function () {
  await keyInDigit('725018', 0);
  await keyInDigit('725018', 1);
  await keyInDigit('725018', 2);
  await keyInDigit('725018', 3);
  await keyInDigit('725018', 4);
  await keyInDigit('725018', 5);

  await driver.sleep(1000);

  return await driver.findElement(By.id('faq-header')).then((element) => {
    expect(element).to.not.be.null;
  });
});

When('I click on the chatbot icon', async function () {
  const chatbotButton = await driver.findElement(By.id('chatbot-icon'));
  chatbotButton.click();
});

Then('I will see the chatbot page', async function () {
  await driver.sleep(1000);

  return await driver.findElement(By.id('chatbot-header')).then((element) => {
    expect(element).to.not.be.null;
  });
});

/////////////////////////////// Learner asks an interfaith related question in the chatbot ////////////////////////////
Given('I am on the chatbot page', async function () {
  await keyInDigit('725018', 0);
  await keyInDigit('725018', 1);
  await keyInDigit('725018', 2);
  await keyInDigit('725018', 3);
  await keyInDigit('725018', 4);
  await keyInDigit('725018', 5);

  await driver.sleep(1000);

  await driver.findElement(By.id('chatbot-icon')).click();

  await driver.sleep(1000);

  return await driver.findElement(By.id('chatbot-header')).then((element) => {
    expect(element).to.not.be.null;
  });
});

When(
  /^I ask my interfaith related question with the prompt '(.*)'/,
  async function (prompt) {
    const chatbotPrompt = await driver.findElement(By.id('chatbot-prompt'));
    await chatbotPrompt.sendKeys(prompt);

    const sendButton = await driver.findElement(By.id('send-button'));
    sendButton.click();
  }
);

Then(
  /^I will receive an answer that contains the text '(.*)'/,
  async function (answer) {
    await driver.sleep(3000);
    const chatbotAnswers = await driver.findElements(
      By.className('promptAnswer')
    );

    const promptAnswerWebElement = chatbotAnswers.pop();
    const promptAnswer = await promptAnswerWebElement.getText();
<<<<<<< Updated upstream
		const promptAnswerWebElement = chatbotAnswers.pop();
		const promptAnswer = await promptAnswerWebElement.getText();

    return promptAnswer.includes(answer);
  }
);

/////////////////////////////// Learner flags an inappropriate answer with the reason 'Rude or Offensive' ////////////////////////////
Given('I have already asked my interfaith related question', async function () {
  await keyInDigit('725018', 0);
  await keyInDigit('725018', 1);
  await keyInDigit('725018', 2);
  await keyInDigit('725018', 3);
  await keyInDigit('725018', 4);
  await keyInDigit('725018', 5);

  await driver.sleep(2000);

  await driver.findElement(By.id('chatbot-icon')).click();

  await driver.sleep(1000);

  const chatbotPrompt = await driver.findElement(By.id('chatbot-prompt'));
  await chatbotPrompt.sendKeys('What is your name?');

  await driver.sleep(1000);

  const sendButton = await driver.findElement(By.id('send-button'));
  sendButton.click();
});

When('I click the flag button', async function () {
  await driver.sleep(3000);

  const flags = await driver.findElements(By.className('flagButton'));

  await driver.sleep(1000);
  const mostRecentFlag = flags.pop();

  await driver.sleep(1000);
  await mostRecentFlag.click();
});

Then(
  "I will see a pop up with the question 'Why are you flagging this answer?'",
  async function () {
    await driver.sleep(1000);
    const flagPopUp = await driver.findElement(By.id('flag-pop-up'));
  }
);

When("I click the option 'Rude or Offensive'", async function () {
  const flagOption1 = await driver.findElement(By.id('modalReasonRoO'));
  await driver.sleep(1000);
  await flagOption1.click();
});

When("I press the button 'Flag Question'", async function () {
  const flagQuestionButton = await driver.findElement(By.id('flag-question'));
  await driver.sleep(1000);
  await flagQuestionButton.click();
  await driver.sleep(1000);
});

Then('I will return to the Chatbot page', async function () {
  return await driver.findElement(By.id('chatbot-header')).then((element) => {
    expect(element).to.not.be.null;
  });
});

/////////////////////////////// Learner flags an inappropriate answer with the reason 'Inaccurate information' ////////////////////////////
Given('I am at the flag pop up', async function () {
  await keyInDigit('725018', 0);
  await keyInDigit('725018', 1);
  await keyInDigit('725018', 2);
  await keyInDigit('725018', 3);
  await keyInDigit('725018', 4);
  await keyInDigit('725018', 5);

  await driver.sleep(2000);
  await driver.findElement(By.id('chatbot-icon')).click();

  await driver.sleep(1000);
  await driver
    .findElement(By.id('chatbot-prompt'))
    .sendKeys('What is your name?');

  await driver.sleep(1000);
  await driver.findElement(By.id('send-button')).click();

  await driver.sleep(3000);
  const flags = await driver.findElements(By.className('flagButton'));
  const mostRecentFlag = flags.pop();

  await driver.sleep(1000);
  await mostRecentFlag.click();
});

When("I click the option 'Inaccurate information'", async function () {
  const flagOption2 = await driver.findElement(By.id('modalReasonM'));
  await driver.sleep(1000);
  await flagOption2.click();
});

/////////////////////////////// Learner flags an inappropriate answer with the reason 'Does not answer the question' ////////////////////////////
When("I click the option 'Does not answer the question'", async function () {
  const flagOption3 = await driver.findElement(By.id('modalReasonDNATQ'));
  await driver.sleep(1000);
  await flagOption3.click();
});
/////////////////////////////// Learner flags an inappropriate answer with the reason 'Religious Propaganda' ////////////////////////////
When("I click the option 'Religious Propaganda'", async function () {
  const flagOption3 = await driver.findElement(By.id('modalReasonRP'));
  await driver.sleep(1000);
  await flagOption3.click();
});
/////////////////////////////// Learner flags an inappropriate answer with the reason 'Others' ////////////////////////////
When("I click the option 'Others'", async function () {
  const flagOption4 = await driver.findElement(By.id('modalReasonO'));
  await driver.sleep(1000);
  await flagOption4.click();
});

Then('I will see a text field', async function () {
  return await driver.findElement(By.id('otherReasonTextField'));
});

When(/^I enter a reason with text '(.*)'/, async function (reason) {
  const textField = await driver.findElement(By.id('otherReasonTextField'));
  await textField.sendKeys(reason);
});
/////////////////////////////// Learner asks a non-interfaith related question in the chatbot ////////////////////////////
When(
  /^I ask my non-interfaith related question with the prompt '(.*)'/,
  async function (prompt) {
    const chatbotPrompt = await driver.findElement(By.id('chatbot-prompt'));
    await chatbotPrompt.sendKeys(prompt);

    const sendButton = await driver.findElement(By.id('send-button'));
    sendButton.click();
  }
);
