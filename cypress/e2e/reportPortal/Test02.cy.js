
describe('My First Test', () => {
  it('ReportPortalTC01', () => {
    cy.visit("http://localhost:8080/ui/#login?redirectPath=%2Fsuperadmin_personal%2Flaunches%2Fall")
    cy.wait(5000)
    cy.get('.loginForm__login-field--2NeYx > .fieldErrorHint__field-error-hint--1LHfk > .inputOutside__input-outside--3DBix > .inputOutside__input--1Sg9p').click().type('superadmin')
    cy.get('.loginForm__password-field--2IH1A > .fieldErrorHint__field-error-hint--1LHfk > .inputOutside__input-outside--3DBix > .inputOutside__input--1Sg9p').click().type('erebus')
    cy.get('.bigButton__big-button--ivY7j').click()
})
})

//cy.get('.loginForm__password-field--2IH1A > .fieldErrorHint__field-error-hint--1LHfk > .inputOutside__input-outside--3DBix > .inputOutside__input--1Sg9p').click().type('erebus')
//cy.get('.bigButton__big-button--ivY7j').click()