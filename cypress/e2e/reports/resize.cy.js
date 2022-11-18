describe('drag and drop', () => {

it('drag and drop', () => {

    cy.visit("http://localhost:8080/ui/#login") 
    
    cy.wait(2000) 
    
    cy.get('.loginForm__login-field--2NeYx > .fieldErrorHint__field-error-hint--1LHfk > .inputOutside__input-outside--3DBix > .inputOutside__input--1Sg9p').click().type('superadmin') 
    
    cy.get('.loginForm__password-field--2IH1A > .fieldErrorHint__field-error-hint--1LHfk > .inputOutside__input-outside--3DBix > .inputOutside__input--1Sg9p').click().type('erebus') 
    
    cy.get('.bigButton__big-button--ivY7j').click() 
    cy.get('[data-id="15"] > .gridRow__grid-row--1pS-5 > .dashboardTable__name--1sWJs').click()
    
    cy.wait(2000) 
    
 //let x = cy.get('[style="width: 894px; height: 428px; position: absolute; touch-action: none; transform: translate(10px, 448px);"] > .react-resizable-handle')
 //let y = cy.get('[style="width: 894px; height: 428px; position: absolute; touch-action: none; transform: translate(10px, 448px);"] > .react-resizable-handle')
  cy.get('[style="width: 894px; height: 428px; position: absolute; touch-action: none; transform: translate(10px, 448px);"] > .react-resizable-handle')
  .trigger('mousedown', { which: 1, pageX: 100, pageY: 300 })
 .trigger('mousemove', { which: 1, pageX: 200, pageY: 400 })
 .trigger('mouseup', { force: true })
    //const text = cy.get('[style="width: 894px; height: 428px; position: absolute; touch-action: none; transform: translate(10px, 448px);"] > .react-resizable-handle')
   
})
})
