const commonData = require("../../fixtures/common/data.json")

describe('Variable',function(){
    //test case
    it('Constant',function(){
        const sum = 1+1;
        cy.log(sum)
        sum = 3
    })
    it('Variable',function(){
        cy.log(sum)
        var sum = 1+1;
        cy.log(sum)
        sum = 3
        cy.log(sum)
    })
    it('Let',function(){
        cy.log(sum)
        let sum = 1+1;
        cy.log(sum)
    })
    it('Aliases',function(){
        cy.fixture("example.json").then((loadData) => {
            cy.log(loadData)
            console.log(loadData)
        })
    })
    it('Load Data by Environment',function(){
        cy.fixture("example.json").then((loadData) => {
            cy.log(loadData.env)
            cy.log(Cypress.env().environment)  //call cypress_sit.json
            cy.log(commonData.key)
        })
    })
    it('Load Common Data',function(){
        cy.log(commonData)
    })
})