describe('Automation Test Suite - Fixtures', function () { 

 
 

  //Use the cy.fixture() method to pull data from fixture file 
  
  before(function () { 
  
  cy.fixture('example').then(function (data) { 
  
  this.data = data; 
  
  }) 
  
  }) 
  
   
   
  
  it('ReportPortalTC03', function () { 
  
   
   
  
  //Provide the data read from the fixture 
  
  cy.visit("http://localhost:8080/ui/#login") 
  
  cy.wait(2000) 
  
  cy.get('.loginForm__login-field--2NeYx > .fieldErrorHint__field-error-hint--1LHfk > .inputOutside__input-outside--3DBix > .inputOutside__input--1Sg9p').click().type('superadmin') 
  
  cy.get('.loginForm__password-field--2IH1A > .fieldErrorHint__field-error-hint--1LHfk > .inputOutside__input-outside--3DBix > .inputOutside__input--1Sg9p').click().type('erebus') 
  
  cy.get('.bigButton__big-button--ivY7j').click() 
  
  cy.get('.sidebar__top-block--6oCNs > :nth-child(2) > .tooltip__tooltip-trigger--3Z4Hc > .sidebarButton__sidebar-nav-btn--1prEO > .sidebarButton__nav-link--2TC0L > .sidebarButton__wrapper--3Q79X > .sidebarButton__btn-icon--1lJxI > svg > path').click() 
  
  cy.get('[data-id="5"] > :nth-child(2) > .launchSuiteGrid__name-col--_sfp1 > .itemInfo__item-info--QT06M > .itemInfo__main-info--2HB9g > :nth-child(1) > .tooltip__tooltip-trigger--3Z4Hc > span').should('have.text','Demo Api Tests') 
  
  cy.get(':nth-child(4) > .headerCell__title-container--Bt3as > .headerCell__title-short--3_s1A').should('have.text','ttl') 
  
  cy.get(':nth-child(5) > .headerCell__title-container--Bt3as > .headerCell__title-short--3_s1A').should('have.text','ps') 
  
  cy.get(':nth-child(6) > .headerCell__title-container--Bt3as > .headerCell__title-short--3_s1A').should('have.text','fl') 
  
  cy.get(':nth-child(7) > .headerCell__title-container--Bt3as > .headerCell__title-short--3_s1A').should('have.text','skp') 
  
  cy.get(':nth-child(8) > .headerCell__title-container--Bt3as > .headerCell__title-short--3_s1A').should('have.text','product bug') 
  
  cy.get(':nth-child(9) > .headerCell__title-container--Bt3as > .headerCell__title-short--3_s1A').should('have.text','auto bug') 
  
  cy.get(':nth-child(10) > .headerCell__title-container--Bt3as > .headerCell__title-short--3_s1A').should('have.text','system issue') 
  
  cy.get(':nth-child(11) > .headerCell__title-container--Bt3as > .headerCell__title-short--3_s1A').should('have.text','to invest') 
  
  cy.get('[data-id="5"] > :nth-child(2) > .launchSuiteGrid__name-col--_sfp1 > .itemInfo__item-info--QT06M > .itemInfo__main-info--2HB9g > :nth-child(1) > .tooltip__tooltip-trigger--3Z4Hc > span').click() 
  
  cy.get('[data-id="211"] > .gridRow__grid-row--1pS-5 > .launchSuiteGrid__name-col--_sfp1 > .itemInfo__item-info--QT06M > .itemInfo__main-info--2HB9g > :nth-child(1) > .tooltip__tooltip-trigger--3Z4Hc > span').should('have.text','Suite with retries') 
  
  const text = cy.get('.headerCell__title-full--2CU9W'); 
  
  cy.log(text); 
  
   
   
  
  //to verify header 
  
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
  
  }) 
  
   
   