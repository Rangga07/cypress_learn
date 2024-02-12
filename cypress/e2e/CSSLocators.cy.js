describe('CSSLocators', () => {

    it("csslocators", () => {

        

        cy.visit("http://www.automationpractice.pl/index.php")
        
        // cy.get("input#search_query_top").type("T-Shirt") // id  tag is optional

        // cy.get(".search_query_top").type("T-Shirt") // id  tag is optional

        // cy.get("[name='search_query']").type("T-Shirts") // attribute

        cy.get("input.search_query[name='search_query']").type("T-Shirts") // tag   class   attribute

        cy.get("[name='submit_search'").click() // attribute

        cy.get(".lighter").contains("T-Shirt") // assertion
    })

})
