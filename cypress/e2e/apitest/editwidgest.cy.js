/// <reference types="Cypress" />
/// const dataJson = require('../../fixtures/createuser')
let id='';

describe('dashboard', () => {
    let accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Njg2NDU5OTMsInVzZXJfbmFtZSI6InN1cGVyYWRtaW4iLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOSVNUUkFUT1IiXSwianRpIjoiYjIxOTA0YzYtNjhlOC00MGM0LWFmZWUtZjllYjRjNDBiMGU0IiwiY2xpZW50X2lkIjoidWkiLCJzY29wZSI6WyJ1aSJdfQ.iyXvxRAosOd5TE3Q9icQ-M2YiCjSZqvYUX8X5tEPbt0'
   //let token = '481c36fe-7e40-4114-b70f-6df237f72f9a'

    it('create widgest', () => {
    
                
            //1. create widgest (POST)
            cy.request({
                method: 'POST',
                url: 'localhost:8080/api/v1/SUPERADMIN_PERSONAL/widget',
                headers: {
                 'Authorization': 'Bearer ' + accessToken
                   // 'Authorization': 
                },
               
                body:
                {
                    "contentParameters": {
                      "contentFields": [
                        "tes"
                      ],
                      "itemsCount": 60,
                      "widgetOptions": {}
                    },
                    "description": "string",
                    "filterIds": [
                      1
                    ],
                    "name": "new6",
                    "share": true,
                    "widgetType": "Overallstatistics"
                  }
   
            }).then((res)=>{
                cy.log(JSON.stringify(res)) 
                expect(res.status).to.eq(201)
                id=res.body.id
                cy.log(id)   

                               
            })
        })
         // Edit widget

         it('update widget', () => {
          cy.request({
              method: 'PUT',
              url: `localhost:8080/api/v1/SUPERADMIN_PERSONAL/widget/${id}`,
              headers: {
                  'Authorization': 'Bearer ' + accessToken
              },
             
              body:  {
                "contentParameters": {
                  "contentFields": [
                    "tes"
                  ],
                  "itemsCount": 60,
                  "widgetOptions": {}
                },
                "description": "string",
                "filterIds": [
                  1
                ],
                "name": "new151",
                "share": true,
                "widgetType": "Overallstatistics"
              }
 
          })
    })
  })
