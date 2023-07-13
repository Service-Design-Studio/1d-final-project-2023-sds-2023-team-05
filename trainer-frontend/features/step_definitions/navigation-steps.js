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
