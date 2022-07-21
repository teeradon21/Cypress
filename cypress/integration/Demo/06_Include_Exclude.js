describe('Include Exclude',() => {
    //test case

    it.skip('Testcase 1',() => {
        cy.log("Testcase 1")
    })
    it.only('Testcase 2',() => {    //only higher priority
        cy.log("Testcase 2")
    })
    it('Testcase 3',() => {
        cy.log("Testcase 3")
    })
})

