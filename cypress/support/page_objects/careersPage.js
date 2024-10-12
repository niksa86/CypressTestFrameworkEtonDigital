/// <reference types = "cypress" />
export class CareersPage{

   //Locators
     
     get qaFilterButton(){
        return cy.get('.c-tag position, #26');
     }

     get countrySerbiaFilterButton(){
        return cy.get('.c-tag position, #28');
     }

     get selectMoreButton(){
        return cy.contains('[class="c-btn load-more paged"]', ' Show More ');
     }

     get seniorQARole(){

      return cy.contains('[class="c-txt--h3  c-careercard__†itle"]','Senior QA Developer/QA Team Lead')
      
     }

     get pageTeams(){

       return cy.get('.c-txt--body-lg')

     }

     get jobRolesTitles(){
         return cy.get('.c-careercard__†itle')
     }
    
//Page Actions

    //This fuction clicks on QA filter option button
    selectFilterOptionQA(){
         this.qaFilterButton
               .scrollIntoView()
               .should('be.visible')
               .click()          
    }
    
    //This function clicks on Serbia filter option button
    selectFilterOptionSerbia(){
        this.countrySerbiaFilterButton
               .scrollIntoView()
               .should('be.visible')
               .click()
    }

        
    //This fuction clicks on 'Show more button'
    clickShowMoreButton(){
        this.selectMoreButton
               .scrollIntoView()
               .should('be.visible')
               .click()
    }

    //This function validates if Senior QA role is visible on the page
    validateTeamForSeniorQaRole(){
        this.seniorQARole.should('be.visible') 
        this.seniorQARole
            .then(() => {
               cy.get('.c-txt--body-lg') 
                 .eq(9)                
                 .find('span')  
                 .filter(':visible')        
                 .invoke('text')        
                 .then((teamName) => {
                   expect(teamName.trim()).to.equal('EtonDigital'); 
                   cy.log('Team Name:', teamName.trim());
                 });
             });
    }

    //This function export element titles to txt file
    exportContent(filePath){
      const TitlesArray = [];
      this.jobRolesTitles.filter(':visible').each(($el) => {
         const text = $el.text().trim(); 
         if (text) {
           TitlesArray.push(text); 
         }
       }).then(() => {
             cy.writeFile(filePath, '', 'utf-8')  
             cy.writeFile(filePath, TitlesArray.join('\n'), { flag: 'a+' });
       });
       cy.readFile(filePath).should('not.be.empty');
   }
}

export const careersPage =  new CareersPage()