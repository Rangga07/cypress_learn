
describe('My First Test', () =>
{
    it('verify title-positive', () => {
        cy.visit("http://dcaller.cd.local/")
        cy.title().should('eq','Sign in to Mandaya - Puri')
    })

    it('verify title-negative', () => {
        cy.visit("http://dcaller.cd.local/")
        cy.title().should('eq','caller123')
    })
})
