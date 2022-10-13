/// <reference types="Cypress" />


describe('My First Test', () => {
  it('Sucessful Test!', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]')
    cy.on('window:alert',(str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    cy.get('#opentab').invoke('remove','target').click()
    })
})
