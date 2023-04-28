export class Profile {
    FiProfileButton =':nth-child(1) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root' //Experiencia en inversiones
    SeProfileButton =':nth-child(2) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root' // Grado de Conocimiento de los instrumentos disponibles en el Mercado de Capitales
    ThProfileButton =':nth-child(3) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root' //Operó en bolsa
    FoProfileButton =':nth-child(4) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root' //Operaste acciones

    getExpInv(){
        cy.get(this.FiProfileButton).click()
    }
    getMarkt(){
        cy.get(this.SeProfileButton).click()
    }
    getBolsa(){
        cy.get(this.ThProfileButton).click()
    }
    getAcciones(){
        cy.get(this.FoProfileButton).click()
    }
}