const { Given, When, Then } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const { expect, assert } = require('chai');
const {
	default: TestRunHookDefinition,
} = require('@cucumber/cucumber/lib/models/test_run_hook_definition');

// // function: Select question on trainer question page
// async function selectQuestion(question) {
// 	return true;
// }

///// Trainer sees a table of questions
Given('I am on the questions page', async function () {
	const h2Element = await driver.findElement(By.id('faq'));
	const pageTitle = await h2Element.getText();
	assert.strictEqual(pageTitle, 'FAQs');
});

Then(
	'I will see the FAQ page with all the created questions',
	async function () {
		return driver.findElement(By.id('faq'));
	}
);

///// Trainer sees a add session pop up
When(
	"I click on the checkbox to select the question with text 'What is the concept of sin in Christianity?'",
	async function () {
		const firstCheckBox = await driver.findElement(By.id('select-2'));
		await firstCheckBox.click();
	}
);

When(
	"I click on the checkbox to select the question with text 'What is the role of mindfulness in Buddhism?'",
	async function () {
		const secondCheckBox = await driver.findElement(By.id('select-3'));
		await secondCheckBox.click();
	}
);

When(
	"I click on the checkbox to select the question with text 'What is the concept of the Ummah in Islam?'",
	async function () {
		const thirdCheckBox = await driver.findElement(By.id('select-3'));
		await thirdCheckBox.click();
	}
);

Then('I will see a create new session button', async function () {
	return driver.findElement(By.id('create-new-session-button'));
});

When('I click create new session button', async function () {
	const createNewSessionButton = await driver.findElement(
		By.id('create-new-session-button')
	);
	await createNewSessionButton.click();
});

Then('I will see Add Session pop up', async function () {
	return driver.findElement(By.id('new-session-dialog'));
});

///// Trainer creates a new session
Given('I am on the Add Session pop up', async function () {
	driver.findElement(By.id('select-1')).click();
	driver.findElement(By.id('select-2')).click();
	driver.findElement(By.id('select-3')).click();

	await driver.sleep(1000);
	driver.findElement(By.id('create-new-session-button')).click();

	await driver.sleep(1000);
});

When(/^I input '(.*)' as title into the form/, async function (sessionTitle) {
	const sessionTitleInput = await driver.findElement(
		By.id('add-session-title')
	);
	await driver.sleep(1000);
	await sessionTitleInput.sendKeys(sessionTitle);
});

Then('I click the submit button', async function () {
	const sessionTitleSubmitButton = await driver.findElement(
		By.id('add-session-submit-button')
	);
	sessionTitleSubmitButton.click();
	await driver.sleep(1000);
});

///// Trainer sees the newly created session
When('I click into the sessions page', async function () {
	await driver.get('http://localhost:3001/sessions');
});

Then(
	/^I will see the session '(.*)' in the sessions table/,
	async function (sessionTitle) {
		const allSessionTitle = await driver.findElements(
			By.className('sessionTitle')
		);
		return allSessionTitle.includes(sessionTitle);
	}
);

///// Trainer fails to create a new session
Then(
	/^I should expect an alert with text '(.*)'/,
	async function (alertMessage) {
		const alert = await driver.switchTo().alert();

		await driver.sleep(1000);
		const alertText = await alert.getText();

		expect(alertText).to.equal(alertMessage);

		await alert.accept();
	}
);

///// Trainer creates a new session from Sessions page
Given("I am on the 'Sessions' page", async function () {
	await driver.get('https://e-blyqvsvnka-as.a.run.app/sessions');
	await driver.sleep(1000);
});

When("I click 'Create New Session' button", async function () {
	const createNewSessionButton = await driver.findElement(
		By.id('create-new-session-button')
	);
	await createNewSessionButton.click();
	await driver.sleep(1000);
});

When("I click the 'Add Question' button", async function () {
	const addQuestionButton = await driver.findElement(
		By.id('add-question-button')
	);
	await addQuestionButton.click();
	await driver.sleep(1000);
});

Then(/^I am on '(.*)' session page/, async function (sessionName) {
	const sessionTitleText = await driver
		.findElement(By.id('session-title'))
		.getText();
	assert.strictEqual(sessionTitleText, sessionName);
});
