import { mainPage, MainPage } from "../../support/page_objects/mainPage"
import { careersPage, CareersPage } from "../../support/page_objects/careersPage"

describe('Extract job titles in txt file', () => {
 
  it('Check titles on Careers page  and export to txt file',()=>{

    cy.fixture('filePath').then(file =>{

      const filePath = file.path

      //Step1. Open Careers Page
      mainPage.openCareersPage()

      //Step2. Click on Serbia filter button on Careers page
      careersPage.selectFilterOptionSerbia()

      //Step3. Click on Show More button
      careersPage.clickShowMoreButton()
    
      //Step4. Get all job titles text that  matching the specific class atribute and push it to txt file
      careersPage.exportContent(filePath)
    })
  })
})