// const { Given, When, Then, And } = require('@cucumber/cucumber');
// const { By } = require('selenium-webdriver');
// const { expect, assert } = require('chai');

// // function: Key in session code
// async function keyInDigit(sessionCode, digitIndex) {
// 	const digit = sessionCode[digitIndex];
// 	const box = await driver.findElement(By.id(digitIndex.toString()));
// 	await box.sendKeys(digit);
// }

// Given('I am on the sign in page', async function () {
// 	const h2Element = await driver.findElement(By.xpath('/html/body/main/div/h2'));
// 	const pageTitle = await h2Element.getText();
// 	assert.strictEqual(pageTitle, 'Kampung Klass');
// });

// When(/^I key in the class code (.*)$/, async function (sessionCode) {
// 	// Convert the sessionCode to string
// 	sessionCode = sessionCode.toString();

// 	// Iterate through each digit in the sessionCode and key it in
// 	for (let i = 0; i < sessionCode.length; i++) {
// 		await keyInDigit(sessionCode, i);
// 	}
// });

// Then(
// 	'I will see the customised FAQ page with the following questions:',
// 	async function (dataTable) {
//   // Wait for a short period to allow the page to load properly
//   		await driver.sleep(1000);

//   // Get all the questions from the customised FAQ page
//   		const questions = await driver.findElements(By.className('question'));

//   // Get the text of each question and store them in questionTexts array
//   		const questionTexts = await Promise.all(
//     		questions.map(async (question) => {
//       			return await question.getText();
//     		})
//   		);

//   // Flatten the dataTable rows into a single array
//   		const dataTableTexts = dataTable.raw().flat();


//   // Compare each question from the dataTable with the questions on the page
//   		for (const data of dataTableTexts) {
//     		expect(questionTexts.includes(data)).to.be.true;
//   		}
// 	}
// );



// ///// Learner sees a different customised FAQ page for the training session with code 725018

///// Learner clicks into a question of interest to see the answer
// Given('I am on the customised FAQ page for session code', async function () {
// 	await keyInDigit('725018', 0); // key in first digit
// 	await keyInDigit('725018', 1); // key in second digit
// 	await keyInDigit('725018', 2); // key in third digit
// 	await keyInDigit('725018', 3); // key in fourth digit
// 	await keyInDigit('725018', 4); // key in fifth digit
// 	await keyInDigit('725018', 5); // key in sixth digit

// 	await driver.sleep(1000);
// 	}
// );

// When(/^I click the question with text'(.*)'/, 
// async function () {
// 	const firstQuestion = await driver.findElement(By.id('table_text'));
// 	await firstQuestion.click();
// });

// Then(/^I will see the corresponding answer with text "(.*)"/, 
// async function () {
// 	const firstAnswer = await driver.findElement(By.id('table_answer'));
// 	await firstAnswer.click();
// });

// ///// Learner successfully searches for a question regarding pilgrimage in the search bar for session code 725018
// When(/^I click the question with text "(.*)"/, async function (question) {
// 	return true;
// });

// Then(
// 	/^I will see the corresponding answer with text "(.*)"/,
// 	async function (answer) {
// 		return true;
// 	}
// );

// ///// Learner fails to search for a question regarding pilgrimage in the search bar for session code 952255
// Then('I will see nothing on the screen', async function () {
// 	return true;
// });

// ///// Learner goes back to landing page from the FAQ page
// When('I click the back button', async function () {
// 	return true;
// });

// Then(/^I will see the landing page titled "(.*)"/, async function (pageTitle) {
// 	return true;
// });
