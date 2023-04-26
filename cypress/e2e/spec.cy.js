describe('template spec', () => {


  context('carga formulario',()=>{
    it.only('Cuenta humana', () => {

      //titular
      cy.visit('https://product-onboarding.vercel.app/');
      cy.get('.css-1fkas3c').click()
      cy.get('[aria-label="Agregar nuevo"] > .MuiButton-root').click()
      cy.get('.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(2)').type('40534343')
      //cy.get('input[type="text" i]').eq(0).type('40534494') //identificar por type y por posicion, es raro que aveces toma la posicion 1 y a veces 0
      cy.wait(3000)//para ver si carga algun dato
      cy.get('input[name="tax_id_number"]').type('10405344942')//identificar por name
      cy.get('div > input[name="first_name"]').type('ramon')//indentificar por un elemento de ntro de otro "child combinator"
      cy.get('div > input[name="first_name"]').type('{selectall}{backspace}').type('lucas')//en caso de que se presente un autocompletado por documento y se quiera cambiar
      cy.get('div div div div div input[name="middle_name"]').type('ruben')//descendant combinator, se para en todas las combinaciones q cumplan la condicion (pueden ser mas de una)
      cy.get('.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(7)').type('cabrera')//identificamos por Clase
      cy.get(':nth-child(9) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment').click()
      cy.contains('Masculino').click();//agregamos el uso de CONTAINS
      cy.get(':nth-child(10) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click()
      cy.contains('Soltero').click();
      cy.get('div > input[name="email"]').click().type('Prueba@prueba.com')
      cy.get('div > input[name="phone"]').click().type('3812345723')
      cy.get(':nth-child(3) > .mb-16 > :nth-child(2) > .MuiGrid-container > :nth-child(1) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root').click()
      cy.contains('Argen').click()
      cy.get(':nth-child(2) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root').click()
      cy.contains('Tucum').click()
      cy.get('div > input[name="addresses[0].city"]').type('famailla')
      cy.get('div > input[name="addresses[0].street"]').type('lavalle')
      cy.get('div > input[name="addresses[0].number"]').type('214')
      cy.get('div > input[name="addresses[0].floor"]').type('12')
      cy.get('div > input[name="addresses[0].apartment"]').type('3')
      cy.get('div > input[name="addresses[0].zip_code"]').type('4132')
      cy.get(':nth-child(4) > :nth-child(2) > .MuiGrid-container > .MuiGrid-root > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root').click()
      cy.contains('Estud').click()
      cy.get(':nth-child(1) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiRadio-root > .PrivateSwitchBase-input').click()
      cy.get(':nth-child(2) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiRadio-root > .PrivateSwitchBase-input').click()
      cy.get(':nth-child(3) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiRadio-root > .PrivateSwitchBase-input').click()
      cy.get('div > button[type="submit"]').click()
       
      //Cuenta Bank
      
      cy.get(':nth-child(2) > .flex > [aria-label="Agregar nuevo"] > .MuiButton-root').click()
      cy.get('div input[name="routing"]').type('5891317811100074931212');
      cy.get('.MuiDialogActions-root > .MuiButton-contained').click();
      cy.get('div > input[name="details"]').type('fcabrera.bk')
      cy.get(':nth-child(3) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root').click()
      cy.contains('BBVA').click()
      cy.get(':nth-child(4) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root').click()
      cy.contains('Cry').click()
      cy.get(':nth-child(5) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root').click()
      cy.contains('USD').click()
      cy.get('.justify-end > .MuiButton-contained').click()

      //Perfil
      cy.wait(1200)
      cy.get(':nth-child(3) > .flex > .MuiButton-root').click()
      cy.get(':nth-child(1) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').click();
      cy.get(':nth-child(2) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').click();
      cy.get(':nth-child(3) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').click();
      cy.get(':nth-child(4) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').click();
      cy.get('div > button[type="submit"]').click()
      cy.get('.MuiDialogActions-root > .MuiButton-contained').click()

      //confirmar apertura
      cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
      cy.get(':nth-child(3) > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
      cy.get('.css-fv3lde > .MuiButton-root').click()
      cy.wait(1000)
      cy.get('.MuiDialogActions-root > .MuiButton-contained').click()
      cy.wait(2000)
      cy.get('.MuiDialogActions-root > .MuiButton-contained').click()

      //Apertura cuenta
      const escudo = "escudo.jpg"
      //drop y foto uno
      cy.get(':nth-child(2) > .MuiPaper-root > .w-full.flex > .flex > .MuiButton-root').click()
      cy.get('input#upload-file-dropzone').attachFile(escudo);
      cy.get('.MuiDialogActions-root > .MuiButton-contained').click()
      cy.wait(800)
      //drop y foto dos
      cy.get(':nth-child(3) > .MuiPaper-root > .w-full.flex > .flex > .MuiButton-root').click()
      cy.get('input#upload-file-dropzone').attachFile(escudo);
      cy.get('.MuiDialogActions-root > .MuiButton-contained').click()
      cy.wait(800)
      //drop y foto tres
      cy.get(':nth-child(4) > .MuiPaper-root > .w-full.flex > .flex > .MuiButton-root').click()
      cy.get('input#upload-file-dropzone').attachFile(escudo);
      cy.get('.MuiDialogActions-root > .MuiButton-contained').click()
      cy.wait(800)
      //drop y foto cuatro
      cy.get(':nth-child(5) > .MuiPaper-root > .w-full.flex > .flex > .MuiButton-root').click()
      cy.get('input#upload-file-dropzone').attachFile(escudo);
      cy.get('.MuiDialogActions-root > .MuiButton-contained').click()
      cy.wait(800)

      //confirmar
      cy.get('.MuiDialogActions-root > .MuiButton-contained').click()

    })

  });

    
    /*
    it.only('passes', () => {
      cy.visit('https://product-onboarding.vercel.app/');
      cy.get('.css-1fkas3c').click()
      cy.get('[aria-label="Agregar nuevo"] > .MuiButton-root').click()
      cy.get('input[type="text" i]').eq(4).type('fracisco')
      /*
      cy.visit('https://product-onboarding.vercel.app/');
      cy.get('.css-1fkas3c').click()
      cy.get('[aria-label="Agregar nuevo"] > .MuiButton-root').click()
      cy.get('.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(2)').type('12312345')
      cy.wait(3500)
      cy.get('.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(4)').type('20123123458')
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
    
    */

})

