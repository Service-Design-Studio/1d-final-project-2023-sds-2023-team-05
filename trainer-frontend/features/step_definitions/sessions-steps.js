const { Given, When, Then, And } = require("@cucumber/cucumber")
const { By } = require("selenium-webdriver")
const { expect, assert } = require("chai")

/////////////////////////////// Trainer creates a new session ////////////////////////////
When("I select a question 0", async function () {
  // select question 0
  const selectedQ0Button = await driver.findElement(By.id("select-0"))

  // click the question 0 checkbox
  await selectedQ0Button.click()
})

Then("I select a question 1", async function () {
  // select question 1
  const selectedQ1Button = await driver.findElement(By.id("select-1"))

  // click the question 1 checkbox
  await selectedQ1Button.click()
})

Then("I select a question 2", async function () {
  // select question 2
  const selectedQ2Button = await driver.findElement(By.id("select-2"))

  // click the question 2 checkbox
  await selectedQ2Button.click()
})

Then("I see a create new session button", async function () {
  return driver
    .findElement(By.id("create-new-session-button"))
    .then((element) => {
      expect(element).to.not.be.null
    })
})

When("I click create new session button", async function () {
  // select new session button
  const createSessionButton = await driver.findElement(
    By.id("create-new-session-button")
  )

  // click the new session button
  await createSessionButton.click()
})

Then("I will see Add Session pop up", async function () {
  return driver.findElement(By.id("new-session-dialog")).then((element) => {
    expect(element).to.not.be.null
  })
})

When(
  /^I input (.*) as title into the form and click the submit button$/,
  async function (sessionTitle) {
    const field = driver.findElement(By.id("add-session-title"))
    field.sendKeys(sessionTitle)

    // select submit button
    const sessionSubmitButton = await driver.findElement(
      By.id("add-session-submit-button")
    )

    // click the new session button
    await sessionSubmitButton.click()
  }
)

When("I head to the sessions page", async function () {
  // select sessions button
  const sessionSubmitButton = await driver.findElement(
    By.xpath("/html/body/div/div/section/header/div/div[1]/nav/a[3]")
  )

  // click the sessions button
  await sessionSubmitButton.click()
})

Then(
  /^I will see the session (.*) in the sessions table$/,
  async function (sessionTitle) {
    const sessions = await driver.findElements(By.className("sessionTitle"))

    for (const session of sessions) {
      const title = session.getText()

      if (title == sessionTitle) {
        return true
      }
    }

    return false
  }
)
