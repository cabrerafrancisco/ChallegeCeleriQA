export class BankAccount{
    CbuLoc = 'div input[name="routing"]'
    AliasLoc = 'div > input[name="details"]'
    ListBankLoc = ':nth-child(3) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root'
    ListCurrencyLoc = ':nth-child(4) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root'
    ListExchangeLoc = ':nth-child(5) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root'

    getCbu(cbu){
        cy.get(this.CbuLoc).type(cbu)
    }
    getAlias(alias){
        cy.get(this.AliasLoc).type(alias)
    }
    getBank(bank){
        cy.get(this.ListBankLoc).click()
        cy.contains(bank).click()
    }
    getCurrency(currency){
        cy.get(this.ListCurrencyLoc).click()
        cy.contains(currency).click()
    }
    getExchange(exchange){
        cy.get(this.ListExchangeLoc).click()
        cy.contains(exchange).click()
    }
}