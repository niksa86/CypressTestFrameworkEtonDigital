//This function represent global setup that will run before each test 
beforeEach('Open main page', ()=>{
    cy.visit('/')
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')
      .click()
  })