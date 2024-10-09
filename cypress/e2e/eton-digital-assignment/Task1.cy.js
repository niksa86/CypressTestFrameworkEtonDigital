/// <reference types = "cypress" />
describe('Check headline on main page', ()=>{

    beforeEach('Test suite setup', ()=>{
        cy.visit('/')
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()
      })

    it('Check if headline "Tech Soultion to scale" is displayed on the main page', ()=>{
        cy.get('[class=\"c-txt--hero  c-hero__title\"]')
          .should('contain', 'Tech Solutions to scale')
    })
})
