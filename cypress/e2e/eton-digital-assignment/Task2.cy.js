/// <reference types = "cypress" />
describe('Check main page displayed', () => {

  beforeEach('Test suite setup', ()=>{
      cy.visit('/')
      cy.get('[class=\"c-txt--hero  c-hero__title\"]')
        .should('contain', 'Tech Solutions to scale')
      cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()
    })
  
  it('Check for Senior QA Role on careers page',()=>{
    cy.contains('ul','Career')
      .trigger('mouseover')
      .click()
      

    //find and click on 'Open position' option
    cy.contains('[href="https://www.holycode.com/careers/"]','Open positions')
      .click({force: true})

    //Check if the filter button 'QA' is displayed and click on it
    cy.get('.c-tag position, #26')
    .should('be.visible')
    .click()
   
    //Senior QA Developer/QA Team Lead role is visible on the page
    cy.contains('.c-careercard__†itle', 'Senior QA Developer/QA Team Lead')
    .should('be.visible')
   
  })
})