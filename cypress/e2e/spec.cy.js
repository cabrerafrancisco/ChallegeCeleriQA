import {Owner} from "../support/pages/owner"
import {Menu} from "../support/pages/menu"
import { BankAccount } from "../support/pages/bankAccount";
import { Profile } from "../support/pages/profile";
import { accountOpen } from "../support/pages/accountOpen";
const { firstName, secondName, dni, cuil, phone, email,lastName } = require('../fixtures/data');


describe('template spec', () => {

  const owner = new Owner()
  const menu = new Menu()
  const bankAccount = new BankAccount()
  const profile = new Profile()
  const account = new accountOpen()
  const escudo = "escudo.jpg"

  beforeEach(() => {
    cy.visit('https://product-onboarding.vercel.app/');
    menu.getHumanSelect() //humano
  });
  
  context('carga formulario',()=>{
    it('Cuenta humana desktop', () => {

      //owner
      menu.getAddOwner()//nuevo titular
      /*------*/
      owner.getDni(dni)
      menu.getSkipLoad()
      owner.getCuil(cuil)
      owner.getFirstName(firstName)
      owner.getFirstName('{selectall}{backspace}lucas')//por si se autocompleta
      owner.getSecondName(secondName)//por si se autocompleta
      owner.getLastName(lastName)//por si se autocompleta
      owner.getGenere('Masculino')
      owner.getCivilStatus('Soltero')
      owner.getEmail(email)
      owner.getPhone(phone)
      owner.getCountry('Argen')
      owner.getProvince('Tucum')
      owner.getCity('famailla')
      owner.getStreet('lavalle')
      owner.getNumStreet('214')
      owner.getFloor('12')
      owner.getApartment('3')
      owner.getZipCode('4132')
      owner.getActivity('Estud')
      owner.getRadioButtonF()
      owner.getRadioButtonS()
      owner.getRadioButtonT()
      //cy.get('.MuiDialogActions-root > .MuiButton-contained').click()
      menu.getSubmitB()//submit
       
      //bankAccount
      menu.getAddAccount();
       /*------*/
      bankAccount.getCbu('5891317811100074931212');
      menu.getAlertButton();//alert
      bankAccount.getAlias('fcabrera.bk')
      bankAccount.getBank('BBVA')
      bankAccount.getCurrency('Cry')
      bankAccount.getExchange('EUR')
      //cy.get('.justify-end > .MuiButton-contained').click()
      menu.getSubmitB()//submit

      //profile
      cy.wait(1200)
      menu.getAddProfile()
      //cy.get(':nth-child(3) > .flex > .MuiButton-root').click()
      profile.getExpInv();
      profile.getMarkt();
      profile.getBolsa();
      profile.getAcciones();
      menu.getSubmitB()//submit
      menu.getAlertButton()//alert

      //menu
      menu.getFirstCheck()
      menu.getSecondCheck()
      menu.getSubmitMenu()
      cy.wait(1000)
      menu.getAlertButton()//alert
      cy.wait(2000)
      menu.getAlertButton()//alert

      //accountOpening

      //drop y foto uno
      account.getFrontDni();
      account.getDrop(escudo);
      menu.getAlertButton()//alert
      cy.wait(800)
      
      //drop y foto dos
      account.getBackDni();
      account.getDrop(escudo);
      menu.getAlertButton()//alert
      cy.wait(800)
      //drop y foto tres
      account.getSelfie()
      account.getDrop(escudo);
      menu.getAlertButton()//alert
      cy.wait(800)

      //drop y foto cuatro
      account.getFinance();
      account.getDrop(escudo);
      menu.getAlertButton()//alert
      cy.wait(800)

      //confirmar
      menu.getAlertButton()//alert

    });

    it('Cuenta humana mobile', () => {
      cy.viewport(390 , 844) //tamanio pantalla iphone 12
                                   
        //owner
        menu.getAddOwner()//nuevo titular
        /*------*/
        owner.getDni('40534343')
        menu.getSkipLoad()
        owner.getCuil('10405344942')
        owner.getFirstName('ramon')
        owner.getFirstName('{selectall}{backspace}lucas')//por si se autocompleta
        owner.getSecondName('{selectall}{backspace}ruben')//por si se autocompleta
        owner.getLastName('{selectall}{backspace}cabrera')//por si se autocompleta
        owner.getGenere('Masculino')
        owner.getCivilStatus('Soltero')
        owner.getEmail('Prueba@prueba.com')
        owner.getPhone('3812345723')
        owner.getCountry('Argen')
        owner.getProvince('Tucum')
        owner.getCity('famailla')
        owner.getStreet('lavalle')
        owner.getNumStreet('214')
        owner.getFloor('12')
        owner.getApartment('3')
        owner.getZipCode('4132')
        owner.getActivity('Estud')
        owner.getRadioButtonF()
        owner.getRadioButtonS()
        owner.getRadioButtonT()
        //cy.get('.MuiDialogActions-root > .MuiButton-contained').click()
        menu.getSubmitB()//submit
          
        //bankAccount
        menu.getAddAccountPhone();
          /*------*/
        bankAccount.getCbu('5891317811100074931212');
        menu.getAlertButton();//alert
        bankAccount.getAlias('fcabrera.bk')
        bankAccount.getBank('BBVA')
        bankAccount.getCurrency('Cry')
        bankAccount.getExchange('EUR')
        //cy.get('.justify-end > .MuiButton-contained').click()
        menu.getSubmitB()//submit
  
        //profile
        cy.wait(1200)
        menu.getAddProfilePhone()
        //cy.get(':nth-child(3) > .flex > .MuiButton-root').click()
        profile.getExpInv();
        profile.getMarkt();
        profile.getBolsa();
        profile.getAcciones();
        menu.getSubmitB()//submit
        menu.getAlertButton()//alert
  
        //menu
        menu.getFirstCheck()
        menu.getSecondCheck()
        menu.getSubmitMenu()
        cy.wait(1000)
        menu.getAlertButton()//alert
        cy.wait(2000)
        menu.getAlertButton()//alert
  
        //accountOpening
  
        //drop y foto uno
        account.getFrontDni();
        account.getDrop(escudo);
        menu.getAlertButton()//alert
        cy.wait(800)
        
        //drop y foto dos
        account.getBackDni();
        account.getDrop(escudo);
        menu.getAlertButton()//alert
        cy.wait(800)
        //drop y foto tres
        account.getSelfie()
        account.getDrop(escudo);
        menu.getAlertButton()//alert
        cy.wait(800)
  
        //drop y foto cuatro
        account.getFinance();
        account.getDrop(escudo);
        menu.getAlertButton()//alert
        cy.wait(800)
  
        //confirmar
        menu.getAlertButton()//alert
    });
    
  });

});

