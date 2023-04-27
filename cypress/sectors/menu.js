export class Menu{
    SubmitButtonLoc = 'div > button[type="submit"]'
    SkipLoadButtonLoc = '.MuiBackdrop-root > .MuiButton-root'
    HumanSelecLoc= '.css-1fkas3c'
    AddOwnerLoc = '[aria-label="Agregar nuevo"] > .MuiButton-root'


    getSubmitB(){
        cy.get(this.SubmitButtonLoc).click()
    }
    getSkipLoad(){
        cy.get(this.SkipLoadButtonLoc).click()
    }
    getHumanSelect(){
        cy.get(this.HumanSelecLoc).click()
    }
    getAddOwner(){
        cy.get(this.AddOwnerLoc).click()
    }
}