// pages/SignupPage.js
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

export class SignupPage {
  constructor(page) {
    this.page = page;
    this.signupName = this.page.locator('input[@data-qa="signup-name"]');
    this.signupEmailAddress = this.page.locator('input[@data-qa="signup-email"]');
    this.signupButton = this.page.locator('button[@data-qa="signup-button"]');
  }

  async navigateToSignupPage() {
    await this.page.goto('http://automationexercise.com');   
    await this.page.click('text="Signup / Login"');  
      
  }


  async signup() {
    await this.page.signupName.fill("Ton");
    await this.page.signupEmailAddress.fill("teste25@teste25");
    await this.page.signupButton.click();
    await this.page.screenshot({ path: './Screenshot/Signup.png'});


    await this.page.getByPlaceholder('Name').fill(firstName + lastName);
    await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
    await this.page.screenshot({ path: './Screenshot/Email.png'});
    await this.page.getByRole('button', { name: 'Signup' }).click();
    

    await expect(this.page.locator('text="Enter Account Information"')).toBeVisible();
    await this.page.fill('input[name="first_name"]', faker.person.firstName());
    await this.page.fill('input[name="last_name"]', faker.person.lastName());
    await this.page.fill('input[name="password"]', faker.internet.password());
    await this.page.selectOption('#country', { nth: 1 });
    await this.page.fill('input[name="state"]', faker.location.state()); 
    await this.page.fill('input[name="city"]', faker.location.city()); 
    await this.page.fill('input[name="zipcode"]', faker.location.zipCode()); 
    await this.page.fill('input[name="mobile_number"]', faker.phone.number());
    await this.page.click('button[type="submit"]');
  }

  async verifyAccountCreation() {
    await this.page.waitForSelector('h2:has-text("CONTA CRIADA!")');
    await this.page.click('text=Continuar');
  }
}

module.exports = SignupPage;
