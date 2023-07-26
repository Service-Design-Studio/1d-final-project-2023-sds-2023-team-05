const { Given, When, Then, And } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const { expect, assert } = require('chai');

async function keyInDigit(sessionCode, digitIndex) {
	const digit = sessionCode[digitIndex];
	const box = await driver.findElement(By.id(digitIndex.toString()));
	await box.sendKeys(digit);
}

/////////////////////////////// Learner sees a customised FAQ page ////////////////////////////

// Then(
// 	'I will see the customised FAQ page with the following questions:',
// 	async function (dataTable) {
// 		// Get the list of expected questions from the Cucumber table
// 		const expectedQuestions = dataTable.raw().flat();

// 		// Assuming you have located the FAQ questions on the page, you can retrieve them and verify
// 		const actualQuestions = await driver.findElements(By.id('faq-question'));

// 		// Extract the text from the actual questions
// 		const actualQuestionsText = await Promise.all(
// 			actualQuestions.map(async (element) =>
// 				element.innerText.trim().split('\n')[1].trim()
// 			)
// 		);

// 		// Compare the expected and actual questions
// 		expect(actualQuestionsText).to.deep.equal(expectedQuestions);
// 	}
// );

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

Then(/^I will receive an answer with the text '(.*)'/, async function (answer) {
	await driver.sleep(3000);
	const chatbotAnswers = await driver.findElements(
		By.className('promptAnswer')
	);

	const promptAnswerWebElement = chatbotAnswers.pop();
	// const promptAnswer = await promptAnswerWebElement.getText();

	// assert.strictEqual(promptAnswer, answer);
});

/////////////////////////////// Learner flags an inappropriate answer given by the chatbot ////////////////////////////
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
	await driver.sleep(5000);
	console.log('hi');

	const flags = await driver.findElements(By.className('flagButton'));
	const mostRecentFlag = flags.pop();

	await driver.sleep(1000);
	await mostRecentFlag.click();
});

Then(
	"I will see a pop up with the question 'Why are you flagging this answer?'",
	async function () {
		const flagPopUp = await driver.findElement(By.id('flag-pop-up'));
	}
);

When("I click the option 'Rude or Offensive'", async function () {
	const flagOption1 = await driver.findElement(By.id('modalReasonRoO'));
	await flagOption1.click();
});

When("I press the button 'Flag Question'", async function () {
	const flagQuestionButton = await driver.findElement(By.id('flag-question'));
	await flagQuestionButton.click();
});

Then('I will return to the Chatbot page', async function () {
	return await driver.findElement(By.id('chatbot-header')).then((element) => {
		expect(element).to.not.be.null;
	});
});
