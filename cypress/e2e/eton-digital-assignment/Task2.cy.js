import { mainPage, MainPage } from "../../support/page_objects/mainPage"
import { careersPage, CareersPage } from "../../support/page_objects/careersPage"

describe('Check Job position name on Careers page', () => {
 
  it('Senior QA Role should be visible on careers page',()=>{
    
    //Step1. Open Careers Page
    mainPage.openCareersPage()

    //Step2. Click on QA filter button on Careers Page
    careersPage.selectFilterOptionQA()
    
    //Expected result: Eton Digital should be the team for Senior QA Position
    careersPage.validateTeamForSeniorQaRole()
    
  })
})