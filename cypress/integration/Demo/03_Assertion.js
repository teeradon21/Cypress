
describe('Assertion',function(){
    //test case
    it('Assert String',function(){
        const expected_string = "Test String Data"
        const data = "Test String Data"
        expect(data).to.equal(expected_string)
        expect(data).to.eq(expected_string)
    })
    it('Assert JSON',function(){
        const expected_string = {
            "name": "Using fixtures to represent data",
            "email": "hello@cypress.io",
            "body": "Fixtures are a great way to mock data for responses to routes"
          }          
        const data = {
            "name": "Using fixtures to represent data",
            "email": "hello@cypress.io",
            "body": "Fixtures are a great way to mock data for responses to routes"
          }
        expect(data).to.equal(expected_string)
        expect(data).to.eq(expected_string)
    })
    it('Assert deep equal JSON',function(){
      const expected_string = {
          "name": "Using fixtures to represent data",
          "email": "hello@cypress.io",
          "body": "Fixtures are a great way to mock data for responses to routes"
        }          
      const data = {
          "name": "Using fixtures to represent data",
          "email": "hello@cypress.io",
          "body": "Fixtures are a great way to mock data for responses to routes"
        }
      expect(data).to.deep.eq(expected_string)
  })
  it('Disorder Array',function(){
    const expected_data = 1
    const expected_data_2 = [3,2,1]
    const data = [1,2,3,4,5]
    expect(data).to.include(expected_data)
    expect(data).to.include.members(expected_data_2)
})
it('Assert to include JSON',function(){
  const expected_data = {
      "name": "Using fixtures to represent data",
      "email": "hello@cypress.io",
    }          
  const data = {
      "name": "Using fixtures to represent data",
      "email": "hello@cypress.io",
      "body": []
    }
    expect(data).to.include(expected_data)
})
it('Assert JSON key',function(){
  const expected_data = ["name","email"]   
  const data = {
      "name": "Using fixtures to represent data",
      "email": "hello@cypress.io",
      "body": []
    }
    expect(data).to.include.all.key(expected_data)
})
it('Assert JSON key',function(){
  const expected_data = {
      "name": "Using fixtures to represent data",
      "email": "hello@cypress.io",
    }          
  const data = {
      "name": "Using fixtures to represent data",
      "email": "hello@cypress.io",
      "body": []
    }
    expect(data).to.include.all.key(Object.keys(expected_data))
})
})