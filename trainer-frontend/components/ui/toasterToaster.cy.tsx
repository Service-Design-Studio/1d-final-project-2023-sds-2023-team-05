import React from 'react'
import { Toaster } from './toaster'

describe('<Toaster />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Toaster />)
  })
})