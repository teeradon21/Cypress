
describe('My First Test',function(){
    //test case
    it('First Test Case',function(){
        const sum = 1+1;
        cy.log(sum)
        console.log(sum)
        cy.pause().then( () => {
            expect(3).to.equal(sum)
        })
        //expect(2).to.equal(sum)
    })
})