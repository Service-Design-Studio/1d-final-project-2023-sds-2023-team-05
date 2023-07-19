const { Given, When, Then, And } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const { expect, assert } = require('chai');

/////////////////////////////// Repeated Steps ////////////////////////////
When(/^I key in the class code (.*) $/, async function (sessionCode) {
	// key in first digit
	const firstDigit = sessionCode.toString().charAt(0);
	const firstBox = await driver.findElement(By.id('0'));
	firstBox.sendkey(firstDigit);

	// key in second digit
	const secondDigit = sessionCode.toString().charAt(1);
	const secondBox = await driver.findElement(By.id('1'));
	firstBox.sendkey(secondDigit);

	// key in third digit
	const thirdDigit = sessionCode.toString().charAt(2);
	const thirdBox = await driver.findElement(By.id('2'));
	firstBox.sendkey(thirdDigit);

	// key in fourth digit
	const fourthDigit = sessionCode.toString().charAt(3);
	const fourthBox = await driver.findElement(By.id('3'));
	firstBox.sendkey(fourthDigit);

	// key in fifth digit
	const fifthDigit = sessionCode.toString().charAt(4);
	const fifthBox = await driver.findElement(By.id('4'));
	firstBox.sendkey(fifthDigit);

	// key in sixth digit
	const sixthDigit = sessionCode.toString().charAt(5);
	const sixthBox = await driver.findElement(By.id('5'));
	firstBox.sendkey(sixthDigit);
});

/////////////////////////////// Learner asks interfaith related question ////////////////////////////

/////////////////////////////// Learner asks non-interfaith related question ////////////////////////////

/////////////////////////////// Learner flags chatbot answer ////////////////////////////
