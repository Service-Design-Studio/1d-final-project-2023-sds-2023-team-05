const { Given, When, Then } = require('@cucumber/cucumber');
const { By, Button, Select } = require('selenium-webdriver');
const { expect, assert } = require('chai');
const { Driver } = require('selenium-webdriver/safari');

/// Trainer sees a table of questions

/// Trainer see the Add Question pop up
When('I click the Add Question button', async function () {
	const addQuestionButton = await driver.findElement(
		By.id('add-question-button')
	);

	await addQuestionButton.click();
});

Then('I see the Add Question pop up', async function () {
	driver.findElement(By.id('new-question-dialog'));
});

/// Trainer adds a question and answer
Given('I am at the Add Question pop up', async function () {
	await driver.findElement(By.id('add-question-button')).click();
});

When(/^I enter the question with text '(.*)'/, async function (question) {
	const questionInput = await driver.findElement(By.id('question-input'));
	await questionInput.sendKeys(question);
});

When(/^I choose the tag with text '(.*)'/, async function (tagName) {
	const dropdownElement = await driver.findElement(By.id('tag-selector'));
	await dropdownElement.click();

	await driver.sleep(1000);
	const dropdownOption = await driver.findElement(
		By.xpath('/html/body/div[4]')
	);
	await dropdownOption.click();
});

When(/^I enter the answer with text '(.*)'/, async function (answer) {
	const answerInput = await driver.findElement(By.id('answer-input'));
	await answerInput.click();
	await answerInput.sendKeys(answer);
});

When("I click the 'Submit' button", async function () {
	const submitButton = await driver.findElement(By.id('submit-question'));
	await submitButton.click();
	await driver.sleep(1000);
});

Then('I will be on the question page', async function () {
	const h2Element = await driver.findElement(By.id('faq'));
	const pageTitle = await h2Element.getText();
	assert.strictEqual(pageTitle, 'FAQs');
});

/// Trainer sees the newly created question and answe
When(
	/^I will see the newly added question with text '(.*)'/,
	async function (question) {
		const listOfQA = await driver.findElements(By.className('truncate'));
		await listOfQA.includes(question);
	}
);

Then(
	/^I will see the newly added answer with text '(.*)'/,
	async function (answer) {
		const listOfQA = await driver.findElements(By.className('truncate'));
		await listOfQA.includes(answer);
	}
);

/// Trainer deletes a question and answer

When(
	"I click on the kebab menu of the question with text 'SX Testing Question'",
	async function () {
		const allKebabMenus = await driver.findElements(
			By.className('flex h-8 w-8 p-0 data-[state=open]:bg-muted')
		);

		await driver.sleep(1000);
		const kebabMenu = await allKebabMenus[0];
		kebabMenu.click();
	}
);

When("I click the 'Delete' option", async function () {
	const deleteOption = await driver.findElement(By.id('delete-question'));
	await deleteOption.click();
	await driver.sleep(1000);
});

/// Trainer fails to enter question
Then(/^I will see an alert with text '(.*)'/, async function (alertMessage) {
	const alert = await driver.switchTo().alert();

	await driver.sleep(1000);
	const alertText = await alert.getText();

	expect(alertText).to.equal(alertMessage);

	await alert.accept();
});

/// Trainer fails to enter answer
