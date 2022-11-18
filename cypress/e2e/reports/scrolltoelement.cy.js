describe('scroll to element', () => {
it('scroll to element', () => {

    cy.visit("http://localhost:8080/ui/#login") 
    
    cy.wait(2000) 
    
    cy.get('.loginForm__login-field--2NeYx > .fieldErrorHint__field-error-hint--1LHfk > .inputOutside__input-outside--3DBix > .inputOutside__input--1Sg9p').click().type('superadmin') 
    
    cy.get('.loginForm__password-field--2IH1A > .fieldErrorHint__field-error-hint--1LHfk > .inputOutside__input-outside--3DBix > .inputOutside__input--1Sg9p').click().type('erebus') 
    
    cy.get('.bigButton__big-button--ivY7j').click() 
    
    cy.get('.sidebar__top-block--6oCNs > :nth-child(2) > .tooltip__tooltip-trigger--3Z4Hc > .sidebarButton__sidebar-nav-btn--1prEO > .sidebarButton__nav-link--2TC0L > .sidebarButton__wrapper--3Q79X > .sidebarButton__btn-icon--1lJxI > svg > path').click() 
    cy.wait(2000) 
    cy.contains('build:3.28.5.5.37').scrollIntoView().should('have.text','build:3.28.5.5.37').click()

})
})
