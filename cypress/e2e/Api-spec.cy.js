describe('Api test', () => {


  it('Request Status - test', () => {
    cy.request('https://product-onboarding.vercel.app/human')
    .its('status')
    .should('eq',200)
  })

  it('Content-type - test', () => {
    cy.request('https://product-onboarding.vercel.app/human')
    .its('headers')
    .its('content-type')
    .should('include','text/html; charset=utf-8')
  })
  
  it('Server - test', () => {
    cy.request('https://product-onboarding.vercel.app/human')
    .its('headers')
    .its('server')
    .should('include','Vercel')
  })

  it('Server - test', () => {
    cy.request('https://product-onboarding.vercel.app/human/owners')
    .its('headers')
    .its('server')
    .should('include','Vercel')
  })

})