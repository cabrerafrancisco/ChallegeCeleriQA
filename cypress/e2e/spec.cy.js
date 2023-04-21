describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://product-onboarding.vercel.app/');
    cy.get('.css-1fkas3c').click()
    cy.get('[aria-label="Agregar nuevo"] > .MuiButton-root').click()
    cy.get('.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(2)').type('40534494')
    cy.wait(2000)
    cy.get('.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(4)').type('20405344948')
    cy.get('.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(5)').type('fracisco')
    cy.get('.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(6)').type('javier')
    cy.get('.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(7)').type('cabrera')
    //Aqui intentamos autocompletar y apretar ENTER para seleccionar el pais
    cy.get(':nth-child(8) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment').click()
    cy.get(':nth-child(8) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment').type('Argen').type('{enter}')
    //En este caso no reconoce el "enter" como seleccion asi que debemos buscar un elemento que "contenga" lo que buscamos
    cy.get(':nth-child(9) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment').click()
    cy.contains('Masculino').click();
    cy.get(':nth-child(10) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click()
    cy.contains('Soltero').click();
    cy.get(':nth-child(2) > :nth-child(2) > .MuiGrid-container > :nth-child(1)').click().type('Prueba@prueba.com')
    cy.get(':nth-child(2) > :nth-child(2) > .MuiGrid-container > :nth-child(2)').click().type('3812345723')
  })
})

