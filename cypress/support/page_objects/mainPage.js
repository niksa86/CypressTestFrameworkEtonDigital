/// <reference types = "cypress" />
export class MainPage{

   //Locators
   get mainPageHeadline(){
    return cy.contains('[class="c-txt--hero  c-hero__title"]', 'Tech Solutions to scale')
   }    

    get careerNavigationOption(){
        return cy.contains('ul', 'Career')
    }

    get openPositionsLink(){
        return cy.contains('[href="https://www.holycode.com/careers/"]','Open positions')
    }

    //Page Actions
    
    //This page object function check if headline on main page is displayed
    checkMainHeadline(){
        this.mainPageHeadline
                .invoke('text')
                .should('contain', 'Tech Solutions to scale')
    }

    //This page object function opens Careers page
    openCareersPage(){
        this.careerNavigationOption
                .trigger('mouseover')
                .click()
        
        this.openPositionsLink.click({force: true})
    }  
}

export const mainPage = new MainPage()