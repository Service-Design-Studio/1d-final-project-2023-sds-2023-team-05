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

Then("I should see a button to edit a question", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending"
})

Then("I should see a button to delete a question", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending"
})
Then(/^I should( not)? see a question with text "([^"]*)"$/, async function (negative, expectedText) {
  const table = await driver.findElement(By.id("question-table"));
  const rows = await table.findElements(By.css("tr"));
  let found = false;

  for (const row of rows) {
    const texts = await row.findElements(By.css("span"));

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
});