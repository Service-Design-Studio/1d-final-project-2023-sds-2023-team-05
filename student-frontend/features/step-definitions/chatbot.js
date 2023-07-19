const { Given, When, Then, And } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const { expect, assert } = require('chai');

/////////////////////////////// Learner sees a customised FAQ page ////////////////////////////
Given('I am on the sign in page', async function () {
	const h2Element = await driver.findElement(
		By.xpath('/html/body/main/div/h2')
	);
	const pageTitle = await h2Element.getText();
	assert.strictEqual(pageTitle, 'Kampung Klass');
});

// Function to run the next line
async function keyInDigit(sessionCode, digitIndex) {
	const digit = sessionCode[digitIndex];
	const box = await driver.findElement(By.id(digitIndex.toString()));
	await box.sendKeys(digit);
}

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
		// Get the list of expected questions from the Cucumber table
		const expectedQuestions = dataTable.raw().flat();

		// Assuming you have located the FAQ questions on the page, you can retrieve them and verify
		const actualQuestions = await driver.findElements(By.css('.faq-question'));

		// Extract the text from the actual questions
		const actualQuestionsText = await Promise.all(
			actualQuestions.map(async (element) => element.getText())
		);

		// Compare the expected and actual questions
		expect(actualQuestionsText).to.deep.equal(expectedQuestions);
	}
);

/////////////////////////////// Learner asks interfaith related question ////////////////////////////

/////////////////////////////// Learner asks non-interfaith related question ////////////////////////////

/////////////////////////////// Learner flags chatbot answer ////////////////////////////
