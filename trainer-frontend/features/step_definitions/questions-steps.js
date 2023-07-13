const { Given, When, Then } = require("@cucumber/cucumber")
const { By } = require("selenium-webdriver")
const { expect, assert } = require("chai")

Then(
  "I should see a table of questions posted by different trainers",
  function () {
    // see if the table is present
    return driver.findElement(By.id("question-table")).then((element) => {
      expect(element).to.not.be.null
    })
  }
)

Then("I should see a button to add a new question", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending"
})

Then("I should see a button to edit a question", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending"
})

Then("I should see a button to delete a question", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending"
})
