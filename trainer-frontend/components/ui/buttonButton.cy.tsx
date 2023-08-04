import { Button } from "./button"

describe("<Button />", () => {
  // Default Variant
  it("renders default button variant", () => {
    cy.mount(<Button variant="default" />)
    cy.get("button").should("have.class", "bg-slate-900")
  })

  // Destructive Variant
  it("renders destructive button variant", () => {
    cy.mount(<Button variant="destructive" />)
    cy.get("button").should("have.class", "bg-red-500")
  })

  // Outline Variant
  it("renders outline button variant", () => {
    cy.mount(<Button variant="outline" />)
    cy.get("button").should("have.class", "border")
  })

  // Secondary Variant
  it("renders secondary button variant", () => {
    cy.mount(<Button variant="secondary" />)
    cy.get("button").should("have.class", "bg-slate-100")
  })

  // Ghost Variant
  it("renders ghost button variant", () => {
    cy.mount(<Button variant="ghost" />)
    cy.get("button").should("have.class", "hover:bg-slate-100")
  })

  // Link Variant
  it("renders link button variant", () => {
    cy.mount(<Button variant="link" />)
    cy.get("button").should("have.class", "text-slate-900")
  })

  // Default Size
  it("renders default size", () => {
    cy.mount(<Button size="default" />)
    cy.get("button").should("have.class", "h-10")
  })

  // Small Size
  it("renders small size", () => {
    cy.mount(<Button size="sm" />)
    cy.get("button").should("have.class", "h-9")
  })

  // Large Size
  it("renders large size", () => {
    cy.mount(<Button size="lg" />)
    cy.get("button").should("have.class", "h-11")
  })

  // Icon Size
  it("renders icon size", () => {
    cy.mount(<Button size="icon" />)
    cy.get("button").should("have.class", "h-8")
  })

  // More specific tests as needed
})
