/// <reference types="Cypress" />
/// const dataJson = require('../../fixtures/createuser')

let id='';
describe('dashboard', () => {
   
    let accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Njg1NTg1ODMsInVzZXJfbmFtZSI6InN1cGVyYWRtaW4iLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOSVNUUkFUT1IiXSwianRpIjoiMGIyNzc4YzktODUyOS00ZTY1LTg1OTgtYWYwZjNiNDM1YzFkIiwiY2xpZW50X2lkIjoidWkiLCJzY29wZSI6WyJ1aSJdfQ.4F51h6bL7HSm45Acc-tD8hSbROjE2-XbhWAD-98u_Wc'
    it('create dashboard', () => {
    
       // cy.fixture('createuser').then((payload) =>{
            
            //1. create dashboard (POST)
            cy.request({
                method: 'POST',
                url: 'localhost:8080/api/v1/SUPERADMIN_PERSONAL/dashboard',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
               
                body: {
                    "description": "test",
                    "name": "test33",
                    "share": true
                  }
   
            }).then((res)=>{
                cy.log(JSON.stringify(res)) 
                expect(res.status).to.eq(201) 
                id=res.body.id
                cy.log(id)    
            })
        })
            // Edit dashboard

            it('update dashboard', () => {
            cy.request({
                method: 'PUT',
                url: `localhost:8080/api/v1/SUPERADMIN_PERSONAL/dashboard/${id}`,
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
               
                body: {
                    "description": "testestest",
                    "name": "new3",
                    "share": true,
                    "updateWidgets": [
                      {
                        "share": true,
                        "widgetId": 0,
                        "widgetName": "string",
                        "widgetOptions": {},
                        "widgetPosition": {
                          "positionX": 0,
                          "positionY": 0
                        },
                        "widgetSize": {
                          "height": 0,
                          "width": 0
                        },
                        "widgetType": "string"
                      }
                    ]
                  }
   
            })

                               
            })
        

        })
        