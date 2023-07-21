const { Given, When, Then } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const { expect, assert } = require('chai');

///// Trainer sees a table of questions
Given('I am on the questions page', async function () {
	const h2Element = await driver.findElement(By.id('faq'));
	const pageTitle = await h2Element.getText();
	assert.strictEqual(pageTitle, 'FAQs');
});

Then(
	'I will see the customised FAQ page with the following first five questions:',
	function (dataTable) {
		// code needs to change
		return driver.findElement(By.id('question-table')).then((element) => {
			expect(element).to.not.be.null;
		});
	}
);

///// Trainer sees a add session pop up

///// Trainer creates a new session

///// Trainer sees the newly created session

///// Trainer fails to create a new session

Then('I should see a button to edit a question', function () {
	// Write code here that turns the phrase above into concrete actions
	return 'pending';
});

Then('I should see a button to delete a question', function () {
	// Write code here that turns the phrase above into concrete actions
	return 'pending';
});
Then(
	/^I should( not)? see a question with text "([^"]*)"$/,
	async function (negative, expectedText) {
		const table = await driver.findElement(By.id('question-table'));
		const rows = await table.findElements(By.css('tr'));
		let found = false;

		for (const row of rows) {
			const texts = await row.findElements(By.css('span'));

			for (const text of texts) {
				const questionText = await text.getText();

				if (questionText.includes(expectedText)) {
					found = true;
					break;
				}
			}

			if (found) {
				break;
			}
		}

		if (negative) {
			expect(found).to.be.false;
		} else {
			expect(found).to.be.true;
		}
	}
);

Then(
	/^I open the menu for the question of text "([^"]*)"$/,
	async function (expectedText) {
		const table = await driver.findElement(By.id('question-table'));
		const rows = await table.findElements(By.css('tr'));

		for (const row of rows) {
			const text = await row.findElement(By.css('span'));
			const questionText = await text.getText();
			if (questionText.includes(expectedText)) {
				const button = await row.findElement(
					By.xpath(".//button[.//span[text()='Open menu']]")
				);
				await button.click();
				break;
			}
		}
	}
);
