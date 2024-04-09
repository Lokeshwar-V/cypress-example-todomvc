import Button from './Button'
describe('template spec', () => {
  it('passes', () => {
   cy.mount(<Button>Click me!</Button>)
  cy.get('button').should('contains.text', 'Click me!')

  })
})

