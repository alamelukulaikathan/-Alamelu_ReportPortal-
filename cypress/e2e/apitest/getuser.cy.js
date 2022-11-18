/// <reference types ="Cypress" />

describe('get api user tests', () => {

    let accessToken='dfb2c32ea5eca6305f90475d5bdd3bc1e8eecb0a0ce8198c596ccc4f28e9277f'

it('get users', ()=> {

    cy.request({
        method : 'GET',
        url : 'https://gorest.co.in/public-api/users',
        headers : {
            'authorization' : "Bearer"+ accessToken
        }
    }). then((res)=>{
        expect(res.status).to.eq(200)
        expect(res.body.meta.pagination.limit).to.eq(10)
        

    })
})

it.only('get users by id', ()=> {

    cy.request({
        method : 'GET',
        url : 'https://gorest.co.in/public-api/users/2',
        headers : {
            'authorization' : "Bearer"+ accessToken
        }
    }). then((res)=>{
        expect(res.status).to.eq(200)
        expect(res.body.data.name).to.eq('Suman Prajapat MD')

    })
})


})