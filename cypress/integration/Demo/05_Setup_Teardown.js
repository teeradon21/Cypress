
describe('Setup Teardown',() => {
    //test case

    before(() => {
        cy.log("Test Suite Setup")
    })

    after(() => {
        cy.log("Test Suite Teardown")
    })

    beforeEach(() => {
        cy.log("Test Case Setup")
    })

    afterEach(() => {
        cy.log("Test Case Teardown")
    })

    it('Testcase 1',() => {
        cy.log("Testcase 1")
    })
    it('Testcase 2',() => {
        cy.log("Testcase 2")
    })
    it('Testcase 3',() => {
        cy.log("Testcase 3")
    })
})

