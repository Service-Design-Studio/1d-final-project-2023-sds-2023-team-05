// const { Given, When, Then } = require('@cucumber/cucumber');
// const { By } = require('selenium-webdriver');
// const { expect, assert } = require('chai');
// const {
// 	default: TestRunHookDefinition,
// } = require('@cucumber/cucumber/lib/models/test_run_hook_definition');

// // function: Select question on trainer question page
// async function selectQuestion(question) {
// 	return true;
// }

// ///// Trainer sees a table of questions
// Given('I am on the questions page', async function () {
// 	const h2Element = await driver.findElement(By.id('faq'));
// 	const pageTitle = await h2Element.getText();
// 	assert.strictEqual(pageTitle, 'FAQs');
// });

// Then(
// 	'I will see the customised FAQ page with the following first five questions:',
// 	function (dataTable) {
// 		// code needs to change
// 		return driver.findElement(By.id('question-table')).then((element) => {
// 			expect(element).to.not.be.null;
// 		});
// 	}
// );

// ///// Trainer sees a add session pop up
// When(
// 	/^I click on the checkbox to select the question with text '(.*)'/,
// 	async function (question) {
// 		selectQuestion(question);
// 	}
// );

// Then('I will see a create new session button', async function () {
// 	return true;
// });

// When('I click create new session button', async function () {
// 	return true;
// });

// Then('I will see Add Session pop up', async function () {
// 	return true;
// });

// ///// Trainer creates a new session
// Given('I am on the Add Session pop up', async function () {
// 	return true;
// });

// When(/^I input '(.*)' as title into the form/, async function (sessionTitle) {
// 	return true;
// });

// Then('I click the submit button', async function () {
// 	return true;
// });

// ///// Trainer sees the newly created session
// When('I click into the sessions page', async function () {
// 	return true;
// });

// Then(
// 	/^I will see the session '(.*)' in the sessions table/,
// 	async function (sessionTitle) {
// 		return true;
// 	}
// );

// ///// Trainer fails to create a new session
// Then("I should expect an alert with text 'Input Title!'", async function () {
// 	return true;
// });

// // // Working Code (Archived First)
// // Then('I should see a button to edit a question', function () {
// // 	// Write code here that turns the phrase above into concrete actions
// // 	return 'pending';
// // });

// // Then('I should see a button to delete a question', function () {
// // 	// Write code here that turns the phrase above into concrete actions
// // 	return 'pending';
// // });
// // Then(
// // 	/^I should( not)? see a question with text "([^"]*)"$/,
// // 	async function (negative, expectedText) {
// // 		const table = await driver.findElement(By.id('question-table'));
// // 		const rows = await table.findElements(By.css('tr'));
// // 		let found = false;

// // 		for (const row of rows) {
// // 			const texts = await row.findElements(By.css('span'));

// // 			for (const text of texts) {
// // 				const questionText = await text.getText();

// // 				if (questionText.includes(expectedText)) {
// // 					found = true;
// // 					break;
// // 				}
// // 			}

// // 			if (found) {
// // 				break;
// // 			}
// // 		}

// // 		if (negative) {
// // 			expect(found).to.be.false;
// // 		} else {
// // 			expect(found).to.be.true;
// // 		}
// // 	}
// // );

// // Then(
// // 	/^I open the menu for the question of text "([^"]*)"$/,
// // 	async function (expectedText) {
// // 		const table = await driver.findElement(By.id('question-table'));
// // 		const rows = await table.findElements(By.css('tr'));

// // 		for (const row of rows) {
// // 			const text = await row.findElement(By.css('span'));
// // 			const questionText = await text.getText();
// // 			if (questionText.includes(expectedText)) {
// // 				const button = await row.findElement(
// // 					By.xpath(".//button[.//span[text()='Open menu']]")
// // 				);
// // 				await button.click();
// // 				break;
// // 			}
// // 		}
// // 	}
// // );
