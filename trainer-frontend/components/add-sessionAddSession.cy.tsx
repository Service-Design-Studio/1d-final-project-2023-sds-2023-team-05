import React from 'react'
import AddSession from './add-session'

describe('<AddSession />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddSession />)
  })
})