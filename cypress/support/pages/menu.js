export class Menu{
    SubmitButtonLoc = 'div > button[type="submit"]'
    SkipLoadButtonLoc = '.MuiBackdrop-root > .MuiButton-root'
    HumanSelecLoc= '.css-1fkas3c'
    AddOwnerLoc = '[aria-label="Agregar nuevo"] > .MuiButton-root'
    AddAccountLoc = ':nth-child(2) > .flex > [aria-label="Agregar nuevo"] > .MuiButton-root'
    AddAccountPhone=':nth-child(2) > .MuiGrid-root > .items-center > [aria-label="Agregar nuevo"] > .MuiButton-root'
    AddProfileLoc = ':nth-child(3) > .flex > .MuiButton-root'
    AddProfilePhone = '.items-center > .MuiButton-root'
    AlertButtonLoc = '.MuiDialogActions-root > .MuiButton-contained'
    FirstCheckLoc = ':nth-child(2) > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input'
    SecondCheckLoc = ':nth-child(3) > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input'
    SubmitMenuLoc = '.css-fv3lde > .MuiButton-root'

    getSubmitB(){
        cy.get(this.SubmitButtonLoc).click()
    }
    getSkipLoad(){
        cy.get(this.SkipLoadButtonLoc).click()
    }
    getAlertButton(){
        cy.get(this.AlertButtonLoc).click()
    }
    getHumanSelect(){
        cy.get(this.HumanSelecLoc).click()
    }
    getAddOwner(){
        cy.get(this.AddOwnerLoc).click()
    }
    getAddAccount(){
        cy.get(this.AddAccountLoc).click()
    }
    getAddAccountPhone(){
        cy.get(this.AddAccountPhone).click()
    }
    getAddProfile(){
        cy.get(this.AddProfileLoc).click()
    }
    getAddProfilePhone(){
        cy.get(this.AddProfilePhone).click()
    }
    getFirstCheck(){
        cy.get(this.FirstCheckLoc).click()
    }
    getSecondCheck(){
        cy.get(this.SecondCheckLoc).click()
    }
    getSubmitMenu(){
        cy.get(this.SubmitMenuLoc).click()
    }

}