export function request_get(path,headers){
    cy.request({
        method : "GET",
        url : path,
        headers : headers
    }).as('resp').should((resp) => {

    })
    return cy.get("@resp")
}