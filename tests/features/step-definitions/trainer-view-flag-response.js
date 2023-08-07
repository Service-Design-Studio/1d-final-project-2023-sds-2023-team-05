const { Given, When, Then, And } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const { expect, assert } = require('chai');
const { Driver } = require('selenium-webdriver/safari');

/// Scenario: Trainer heads to Chatbot page
When('I click on the Chatbot button in the header', async function () {
	await driver.get('http://localhost:3001/chatbot');
	// return true;
});

Then('I will be on the chatbot page', async function () {
	const chatbotTitle = await driver.findElement(By.id('chatbot-title'));
	// return true;
});
/// Scenario: Trainer heads to the All tab to see all the chatbot
Given('I am on chatbot page', async function () {
	await driver.get('http://localhost:3001/chatbot');
	// return true;
});

When("I click the 'All' tab", async function () {
	const allTabButton = await driver.findElement(By.id('allresponses'));
	await allTabButton.click();
});

Then("I will be on the 'All' tab page", async function () {
	const allTabSentence = await driver.findElement(By.id('all-tab-sentence'));
});
/// Scenario: Trainer heads to Flagged tab from All tab
Given("I am on the 'All' tab", async function () {
	await driver.get('http://localhost:3001/chatbot');
	await driver.findElement(By.id('allresponses')).click();
});

When("I click the 'Flagged' tab", async function () {
	const flaggedTabButton = await driver.findElement(By.id('flaggedresponses'));
	await flaggedTabButton.click();
});

Then("I will be on the 'Flagged' tab page", async function () {
	const flaggedTabSentence = await driver.findElement(
		By.id('flagged-tab-sentence')
	);
});
