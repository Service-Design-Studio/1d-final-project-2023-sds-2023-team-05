import { MainNav } from "./main-nav"

describe("<MainNav />", () => {
  const items = [
    { title: "Home", href: "/home" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact", disabled: true },
  ]

  it("renders without items", () => {
    cy.mount(<MainNav />)

    // Assert that the site name is rendered
    cy.get("a").contains("Interfaith.ai").should("exist")

    // Assert that the navigation items are not rendered
    cy.get("nav").should("not.exist")
  })

  it("renders with items", () => {
    cy.mount(<MainNav items={items} />)

    // Assert that the site name is rendered
    cy.get("a").contains("Interfaith.ai").should("exist")

    // Assert that the navigation items are rendered
    cy.get("nav a").should("have.length", items.length)

    // Check individual navigation items
    items.forEach((item, index) => {
      cy.get("nav a").eq(index).should("contain", item.title)
      if (item.disabled) {
        cy.get("nav a")
          .eq(index)
          .should("have.class", "cursor-not-allowed")
          .should("have.class", "opacity-80")
      }
    })
  })
})
