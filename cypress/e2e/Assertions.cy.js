describe("Assertion demo", () => {

    it("Implicit assertions", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // should   and
        // cy.url().should('include','orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrm')

        // cy.url().should('include','orangehrmlive.com')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','orangehrm')

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','greenhrm')

        cy.title().should('include','Orange')
        .and('eq', "OrangeHRM")
        .and('contains',"HRM")

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')
    })



})