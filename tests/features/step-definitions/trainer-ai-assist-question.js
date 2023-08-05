const { Given, When, Then, And } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const { expect, assert } = require('chai');
const { Driver } = require('selenium-webdriver/safari');

/// Trainer generates response from question about Christianity
When("I click the button 'AI Assist'", async function () {
	return true;
});

Then(
	/^I will see a generated answer that contains the word '(.*)'/,
	async function (word) {
		await driver.sleep(5000);
		return true;
	}
);

/// Trainer generates response from question about Islam

/// Trainer generates response from question about Buddhism
