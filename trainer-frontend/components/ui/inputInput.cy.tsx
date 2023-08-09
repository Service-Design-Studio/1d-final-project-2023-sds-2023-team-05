import { Input } from "./input"

describe("<Input />", () => {
  const inputProps = {
    type: "text",
    placeholder: "Enter text",
  }

  beforeEach(() => {
    cy.mount(<Input {...inputProps} />)
  })

  it("renders an input with the correct type and placeholder", () => {
    cy.get("input")
      .should("have.attr", "type", inputProps.type)
      .and("have.attr", "placeholder", inputProps.placeholder)
  })

  it("allows users to type into the input", () => {
    const typedText = "Hello, World!"
    cy.get("input").type(typedText).should("have.value", typedText)
  })

  it("handles the disabled state", () => {
    cy.mount(<Input {...inputProps} disabled />)
    cy.get("input").should("be.disabled")
  })
})
