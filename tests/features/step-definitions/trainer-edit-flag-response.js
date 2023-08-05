const { Given, When, Then, And } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const { expect, assert } = require('chai');
const { Driver } = require('selenium-webdriver/safari');

/// Trainer heads to Chatbot page

/// Trainer reviews a sensitive question about Islam
When('I see a sensitive flagged Q&A about Islam', async function () {
	return true;
});

When("I press the 'Edit' button", async function () {
	return true;
});

Then("I see the 'Edit Chatbot Response' pop up", async function () {
	return true;
});

When(
	"I key in the edited response in the 'Trained Response' text box",
	async function () {
		return true;
	}
);

Then(
	"I click 'Submit' button in the 'Edit Chatbot Response' pop up",
	async function () {
		return true;
	}
);

/// Scenario: Trainer reviews edited response for the sensitive question about Islam
When("I click the 'Edited Responses' tab", async function () {
	return true;
});

Then("I will be on the 'Edited Responses' tab page", async function () {
	return true;
});

Then(
	'I will see my edited response for the sensitive question about Islam',
	async function () {
		return true;
	}
);
