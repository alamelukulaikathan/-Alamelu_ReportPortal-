import { Given,When,Then,And } from "cupress-cucumber-preprocessor/steps";

Given('I open reportportal page',() =>
{
    cy.visit("http://localhost:8080/ui/#login")
})
//when I navigate to Launches
When ('I navigate to Launches', () =>
{
    cy.get('.sidebar__top-block--6oCNs > m:nth-child(2) > .tooltip__tooltip-trigger--3Z4Hc > .sidebarButton__sidebar-nav-btn--1prEO > .sidebarButton__nav-link--2TC0L > .sidebarButton__wrapper--3Q79X > .sidebarButton__btn-icon--1lJxI > svg > path').click()
    

})
//And Select Suite with Retries
And('Select Suite with Retries',() => 
{
    cy.get('[data-id="5"] > :nth-child(2) > .launchSuiteGrid__name-col--_sfp1 > .itemInfo__item-info--QT06M > .itemInfo__main-info--2HB9g > :nth-child(1) > .tooltip__tooltip-trigger--3Z4Hc > span').click()
})
//    Then Results are appeared as expected
Then('Results are appeared as expected', function ()
{
    cy.get('div.pageSwitcher__pageSwitcher--34K0k div.layout__layout--bNQ7A div.layout__slide-container--2i0_p div.layout__content--2bbWd div.scrollWrapper__scroll-component--3vuv7 div.scrollWrapper__scrolling-content--XWgeG.scrollWrapper__with-footer--25_wC div.layout__scrolling-content--1Wdau div.layout__page-container--qkF50 div.pageLayout__page-layout--1YfSw div.pageLayout__page-content--2R36V div.grid__grid--utIJA:nth-child(4) > div.gridHeader__grid-header--3qdVQ:nth-child(1)')
    .each(function($row,index,$rows){
        cy.wrap($row).within(function(){
          cy.get('.headerCell__title-full--2CU9W').each(function($cellData,index,$columns){
            expect($cellData).to.contain(this.data.header[index])
      
        //cy.log($cellData.text())
        
        })
      })
    })

    // to verify the remaining table
    cy.get('.grid__grid--utIJA').each(function($row,index,$rows){
      //cy.get('div.pageSwitcher__pageSwitcher--34K0k div.layout__layout--bNQ7A div.layout__slide-container--2i0_p div.layout__content--2bbWd div.scrollWrapper__scroll-component--3vuv7 div.scrollWrapper__scrolling-content--XWgeG.scrollWrapper__with-footer--25_wC div.layout__scrolling-content--1Wdau div.layout__page-container--qkF50 div.pageLayout__page-layout--1YfSw div.pageLayout__page-content--2R36V div.grid__grid--utIJA:nth-child(4) div.gridRow__grid-row-wrapper--1dI9K:nth-child(2) > div.gridRow__grid-row--1pS-5').each(function($row,index,$rows){
        cy.wrap($row).within(function(){
        cy.get('.executionStatistics__value--2d21r').each(function($cellData,index,$columns){
        expect($cellData).to.contain(this.data.row1[index])
          })
      })
      }) 

})