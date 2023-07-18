const { Given, When, Then, And } = require("@cucumber/cucumber")
const { By } = require("selenium-webdriver")
const { expect, assert } = require("chai")

/////////////////////////////// Repeated Steps ////////////////////////////
When(/^I key in the class code (.*) $/, async function () {
  // select question 0
  const selectedQ0Button = await driver.findElement(By.id("select-0"))

  // click the question 0 checkbox
  await selectedQ0Button.click()
})

/////////////////////////////// Learner asks interfaith related question ////////////////////////////

/////////////////////////////// Learner asks non-interfaith related question ////////////////////////////

/////////////////////////////// Learner flags chatbot answer ////////////////////////////
