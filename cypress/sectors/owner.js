export default class owner{
    dni='.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(2)'
    cuil='input[name="tax_id_number"]'

    getDni(){
        return cy.get(this.dni)
    }
    getCuil(){
        return cy.get(this.cuil)
    }
}