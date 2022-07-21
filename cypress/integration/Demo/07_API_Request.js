const commonRequest = require("../../support/commonRequest")
const statusCode = require("../../fixtures/common/statusCode.json")

describe('API Request',() => {
    //test case

    it('Get Sample API',() => {
        cy.request({
            method : "GET",
            url : "https://jsonplaceholder.typicode.com/users"
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    })

    it('Post API with header',() => {
        const expected_response = {
            "name": "sue"
        }
        cy.request({
            method : "POST",
            url : "postman-api-learner.glitch.me/info",
            headers : {
                "Content-Type" : "application/json"
            },
            body: {
                "name": "sue"
            }
        }).then(response => {
            expect(response.status).to.equal(200)
            cy.log(response.body.data)
            expect(response.body.data).to.deep.equal(expected_response)
        })
    })
})
