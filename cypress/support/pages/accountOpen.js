export class accountOpen{
    DropImageLoc = 'input#upload-file-dropzone'
    FrontDniLoc = ':nth-child(2) > .MuiPaper-root > .w-full.flex > .flex > .MuiButton-root'
    BackDniLoc = ':nth-child(3) > .MuiPaper-root > .w-full.flex > .flex > .MuiButton-root'
    SelfieLoc = ':nth-child(4) > .MuiPaper-root > .w-full.flex > .flex > .MuiButton-root'
    FinanceLoc = ':nth-child(5) > .MuiPaper-root > .w-full.flex > .flex > .MuiButton-root'


    getDrop(img){
        cy.get(this.DropImageLoc).attachFile(img)
    }
    getFrontDni(){
        cy.get(this.FrontDniLoc).click()
    }
    getBackDni(){
        cy.get(this.BackDniLoc).click()
    }
    getSelfie(){
        cy.get(this.SelfieLoc).click()
    }
    getFinance(){
        cy.get(this.FinanceLoc).click()
    }

}