const { Given, When, Then } = require("@cucumber/cucumber")
const { By } = require("selenium-webdriver")
const { expect, assert } = require("chai")

Given(/^I am on the (.*) page$/, async function (page) {
  // Write code here that turns the phrase above into concrete actions
  var actualUrl = await driver.getCurrentUrl()
  actualUrl = actualUrl.split("/")[3]
  expect(actualUrl).to.equal(page)
})

Given("I am logged in", async function () {
  // Write code here that turns the phrase above into concrete actions
  await driver.get(baseUrl)
  await driver.sleep(1000)
})

Then(/^I should see a "([^"]*)" with id "([^"]*)"$/, async function (element, id) {
  return driver.findElement(By.id(id)).then((element) => {
    expect(element).to.not.be.null
  })
  // Write code here that turns the phrase above into concrete actions
})

When(/^I click the "([^"]*)" with id "([^"]*)"$/, async function (element, id) {
  const button = driver.findElement(By.id(id))
  await button.click();
})

When(/^I select and input "([^"]*)" in the field with id "([^"]*)"$/, async function (textInput, fieldID) {
  const field = driver.findElement(By.id(fieldID))
  field.sendKeys(textInput)
})

Then(/^I should expect an alert with text "([^"]*)"$/, async function (expectedText) {
  const alert = await driver.switchTo().alert();
  const actualText = await alert.getText();
  expect(actualText).to.equal(expectedText);
  await alert.accept();
  await driver.switchTo().defaultContent(); // Switch back to the main page
})

When(/^I refresh the page$/, async function () {
  await driver.navigate().refresh();
})



