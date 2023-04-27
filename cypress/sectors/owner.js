export class Owner{
    DniLoc='.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(2)'
    CuilLoc='input[name="tax_id_number"]'//identificar por name
    FirstNameLoc='div > input[name="first_name"]' //indentificar por un elemento de ntro de otro "child combinator"
    SecondNameLoc='div div div div div input[name="middle_name"]'//en caso de que se presente un autocompletado por documento y se quiera cambiar
    LastNameLoc='.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(7)' //descendant combinator, se para en todas las combinaciones q cumplan la condicion (pueden ser mas de una)
    ListGenereLoc=':nth-child(9) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment' //identificamos por Clase
    ListCivilStatusLoc=':nth-child(10) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]'//agregamos el uso de CONTAINS
    EmailLoc='div > input[name="email"]'
    PhoneLoc='div > input[name="phone"]'
    ListCountryLoc=':nth-child(3) > .mb-16 > :nth-child(2) > .MuiGrid-container > :nth-child(1) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root'
    ListProvinceLoc=':nth-child(2) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root'
    CityLoc='div > input[name="addresses[0].city"]' //ciudad
    StreetLoc='div > input[name="addresses[0].street"]' //calle nombre
    NumberStreetLoc='div > input[name="addresses[0].number"]' //calle numero
    FloorLoc='div > input[name="addresses[0].floor"]' //piso
    ApartmentLoc='div > input[name="addresses[0].apartment"]'
    ZipCodeLoc='div > input[name="addresses[0].zip_code"]'
    ListActivityLoc=':nth-child(4) > :nth-child(2) > .MuiGrid-container > .MuiGrid-root > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root'
    RadioButtonFirstLoc=':nth-child(1) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiRadio-root > .PrivateSwitchBase-input'
    RadioButtonSecondLoc=':nth-child(2) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiRadio-root > .PrivateSwitchBase-input'
    RadioButtonThreeLoc=':nth-child(3) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiRadio-root > .PrivateSwitchBase-input'


    getDni(dni){
        cy.get(this.DniLoc).type(dni)
    }
    getCuil(cuil){
        cy.get(this.CuilLoc).type(cuil)
    }
    getFirstName(firstName){
        cy.get(this.FirstNameLoc).type(firstName)
    }
    getSecondName(secondName){
        cy.get(this.SecondNameLoc).type(secondName)
    }
    getLastName(lastName){
        cy.get(this.LastNameLoc).type(lastName)
    }
    getGenere(genere){
        cy.get(this.ListGenereLoc).click()
        cy.contains(genere).click()
    }
    getCivilStatus(civilStatus){
        cy.get(this.ListCivilStatusLoc).click()
        cy.contains(civilStatus).click()
    }
    getEmail(email){
        cy.get(this.EmailLoc).type(email)
    }
    getPhone(phone){
        cy.get(this.PhoneLoc).type(phone)
    }
    getCountry(country){
        cy.get(this.ListCountryLoc).click()
        cy.contains(country).click()
    }
    getProvince(province){
        cy.get(this.ListProvinceLoc).click()
        cy.contains(province).click()
    }
    getCity(city){
        cy.get(this.CityLoc).type(city)
    }
    getStreet(street){
        cy.get(this.StreetLoc).type(street)
    }
    getNumStreet(numStreet){
        cy.get(this.NumberStreetLoc).type(numStreet)
    }
    getFloor(floor){
        cy.get(this.FloorLoc).type(floor)
    }
    getApartment(apartment){
        cy.get(this.ApartmentLoc).type(apartment)
    }
    getZipCode(zip_code){
        cy.get(this.ZipCodeLoc).type(zip_code)
    }
    getActivity(activity){
        cy.get(this.ListActivityLoc).click()
        cy.contains(activity).click()
    }
    getRadioButtonF(){
        cy.get(this.RadioButtonFirstLoc).click()
    }
    getRadioButtonS(){
        cy.get(this.RadioButtonSecondLoc).click()
    }
    getRadioButtonT(){
        cy.get(this.RadioButtonThreeLoc).click()
    }
}