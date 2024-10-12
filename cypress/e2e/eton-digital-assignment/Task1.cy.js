import { mainPage, MainPage } from "../../support/page_objects/mainPage"

describe('Check headline on main page', ()=>{

    it('Headline "Tech Soultion to scale" should be displayed on the main page', ()=>{

        //Expected result: Headline 'Tect Solutions to scale' should be visible on the main page
        mainPage.checkMainHeadline()
    })
})
