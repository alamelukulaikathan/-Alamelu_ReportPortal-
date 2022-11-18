describe('drag and drop', () => {
it('drag and drop', () => {

    cy.visit("http://localhost:8080/ui/#login") 
    
    cy.wait(2000) 
    
    cy.get('.loginForm__login-field--2NeYx > .fieldErrorHint__field-error-hint--1LHfk > .inputOutside__input-outside--3DBix > .inputOutside__input--1Sg9p').click().type('superadmin') 
    
    cy.get('.loginForm__password-field--2IH1A > .fieldErrorHint__field-error-hint--1LHfk > .inputOutside__input-outside--3DBix > .inputOutside__input--1Sg9p').click().type('erebus') 
    
    cy.get('.bigButton__big-button--ivY7j').click() 
    cy.get('[data-id="15"] > .gridRow__grid-row--1pS-5 > .dashboardTable__name--1sWJs').click()
    cy.wait(2000) 

    cy.get('div.pageSwitcher__pageSwitcher--34K0k div.layout__layout--bNQ7A div.layout__slide-container--2i0_p div.layout__content--2bbWd div.scrollWrapper__scroll-component--3vuv7 div.scrollWrapper__scrolling-content--XWgeG.scrollWrapper__with-footer--25_wC div.layout__scrolling-content--1Wdau div.layout__page-container--qkF50 div.pageLayout__page-layout--1YfSw div.pageLayout__page-content--2R36V div.dashboardItemPage__dashboard-item--z--Cl div.container div.widgets-grid div.react-grid-layout > div.react-grid-item.widgetsGrid__widget-view--dVnmj.react-draggable.cssTransforms.react-resizable:nth-child(2)').drag('div.pageSwitcher__pageSwitcher--34K0k div.layout__layout--bNQ7A div.layout__slide-container--2i0_p div.layout__content--2bbWd div.scrollWrapper__scroll-component--3vuv7 div.scrollWrapper__scrolling-content--XWgeG.scrollWrapper__with-footer--25_wC div.layout__scrolling-content--1Wdau div.layout__page-container--qkF50 div.pageLayout__page-layout--1YfSw div.pageLayout__page-content--2R36V div.dashboardItemPage__dashboard-item--z--Cl div.container div.widgets-grid div.react-grid-layout > div.react-grid-item.widgetsGrid__widget-view--dVnmj.react-draggable.cssTransforms.react-resizable:nth-child(1)')

    cy.reload()
    cy.get('div.pageSwitcher__pageSwitcher--34K0k div.layout__layout--bNQ7A div.layout__slide-container--2i0_p div.layout__content--2bbWd div.scrollWrapper__scroll-component--3vuv7 div.scrollWrapper__scrolling-content--XWgeG.scrollWrapper__with-footer--25_wC div.layout__scrolling-content--1Wdau div.layout__page-container--qkF50 div.pageLayout__page-layout--1YfSw div.pageLayout__page-content--2R36V div.dashboardItemPage__dashboard-item--z--Cl div.container div.widgets-grid div.react-grid-layout div.react-grid-item.widgetsGrid__widget-view--dVnmj.react-draggable.cssTransforms.react-resizable:nth-child(1) div.widget__widget-container--3ZTIX div.widget__widget-header--eR4Gu.draggable-field.widget__modifiable--3g79h div.widgetHeader__widget-header--UUJmn div.widgetHeader__info-block--1n0yX div.widgetHeader__widget-name--FjJLi:nth-child(1) > div.widgetHeader__widget-name-block--7fZoV').contains('DEMO_FILTER_209')

})
})