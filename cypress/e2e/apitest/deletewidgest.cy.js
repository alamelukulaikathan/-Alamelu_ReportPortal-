/// <reference types="Cypress" />
/// const dataJson = require('../../fixtures/createuser')
let id='';
let sname='';
let randomText = "" 

describe('dashboard', () => {
   // let accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Njg2NDU5OTMsInVzZXJfbmFtZSI6InN1cGVyYWRtaW4iLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOSVNUUkFUT1IiXSwianRpIjoiYjIxOTA0YzYtNjhlOC00MGM0LWFmZWUtZjllYjRjNDBiMGU0IiwiY2xpZW50X2lkIjoidWkiLCJzY29wZSI6WyJ1aSJdfQ.iyXvxRAosOd5TE3Q9icQ-M2YiCjSZqvYUX8X5tEPbt0'
   let token = '481c36fe-7e40-4114-b70f-6df237f72f9a'

    it('create widgest', () => {
      var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
      for (var i = 0; i < 10; i++)       
      randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length)); 
                
            //1. create widgest (POST)
            cy.request({
                method: 'POST',
                url: 'localhost:8080/api/v1/SUPERADMIN_PERSONAL/widget',
                headers: {
                 //'Authorization': 'Bearer ' + accessToken
                   'Authorization': 'Bearer ' + token
                },
               
                body:
                {
                    "contentParameters": {
                      "contentFields": [
                        "ran"
                      ],
                      "itemsCount": 60,
                      "widgetOptions": {}
                    },
                    "description": "string",
                    "filterIds": [
                      1
                    ],
                    "name": randomText,
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
         // add widget to dashboar

                 it('add widget to dashboard', () => {
            cy.request({
                method: 'PUT',
                url: `localhost:8080/api/v1/SUPERADMIN_PERSONAL/dashboard/49/add`,
                headers: {
                    'Authorization': 'Bearer ' + token
                },
               
                body:  {            
                    "addWidget": {
                      "share": true,
                      "widgetId": id,
                      "widgetName": randomText,
                      "widgetOptions": {},
                      "widgetPosition": {
                        "positionX": 0,
                        "positionY": 0
                      },
                      "widgetSize": {
                        "height": 10,
                        "width": 10
                      },
                      "widgetType": "Overallstatistics"
                    }
                },
          })
        })

          it('delete dashboard', () => {
            cy.request({
                method: 'DELETE',
                url: `localhost:8080/api/v1/SUPERADMIN_PERSONAL/dashboard/49/${id}`,
                headers: {
                    'Authorization': 'Bearer ' + token
                },
               
                body: {
                  "message": "string"
                        },
                    
                      })

    })
  
  })