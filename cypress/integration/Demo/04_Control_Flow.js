const commonUtil = require("../../support/commonUtil.js")

describe('Control Flow',function(){
    //test case
    it('Repeating',function(){
        for (let i=0; i<10; i++){
            cy.log(i)
        }
      })
    it('Data Driven',function(){
        let obj = {a:1, b:2, c:3}
        for (let i in obj){
            cy.log(i,obj[i])
        }
      })
    it('Load Other Function',function(){
        cy.log(commonUtil.addNumber(3,4))
        cy.log(cy.addNumber(1,2))  //in support/commands
      })
})

