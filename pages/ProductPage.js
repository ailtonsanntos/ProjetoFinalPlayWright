const { faker } = require('@faker-js/faker');
const { expect } = require('@playwright/test');

export class ProductPage {
    constructor(page) {
      this.page = page;
      this.viewProductButton = page.locator("//a[@href='/product_details/1'][contains(.,'View Product')]");
      this.addToCartButton = page.locator("//button[@type='button'][contains(.,'Add to cart')]");      
      this.viewCartButton = page.locator("//u[contains(.,'View Cart')]");    
      this.cartModalLink = page.locator("//u[contains(.,'View Cart')]");
      this.checkoutButton = page.locator("//a[contains(@class,'btn btn-default check_out')]");  
      this.reviewOrderHeader = page.locator("//h2[contains(.,'Review Your Order')]");
      this.placeOrderButton = page.locator("//a[contains(@class,'btn btn-default check_out') and contains(text(), 'Place Order')]");
      this.nameOnCardInput = page.locator("//input[@name='name_on_card']");
      this.cardNumberInput = page.locator("//input[@name='card_number']");
      this.cvcInput = page.locator("//input[@name='cvc']");
      this.expiryMonthInput = page.locator("//input[@name='expiry_month']");
      this.expiryYearInput = page.locator("//input[@name='expiry_year']");
      this.submitButton = page.locator("//*[@id='submit']");
      this.confirmationMessageConcluido = page.locator("//p[contains(.,'Congratulations! Your order has been confirmed!')]");
      //this.completedOrderButton = page.locator('text=Continuar');
    }
  
    async navigateToProductPage() {
      await this.page.goto('http://automationexercise.com/products');
    }

    async viewProduct(){
        await this.viewProductButton.click();
    }

    
    async addProductToCart() { 
        await this.addToCartButton.click();
    }
        

    async viewCart() { 
            await this.viewCartButton.click();
         }

    async viewProduct() { 
            await this.viewProductButton.click(); 
         }

    async visiblecart(){
        await this.cartModalLink.click();
      }

    async cartModalLink(){
        await expect(this.cartModalLink).toBeVisible({ timeout: 10000 });
      }

      async proceedToCheckout() { 
        await this.checkoutButton.click(); 
    }

    async placeOrder() { await this.page.waitForLoadState('networkidle'); 
        await this.placeOrderButton.waitFor({ state: 'visible', timeout: 10000 }); 
        await this.placeOrderButton.click({ timeout: 10000 });
    }

    async submitOrder(){
        await this.submitButton.click();
    }

    async proceedToCheckout() { 
        await this.checkoutButton.click();
    }

    async completeCheckout() {
        await this.page.waitForLoadState('load');
        await this.placeOrderButton.waitFor({ state: 'visible', timeout: 10000 });
        await this.placeOrderButton.click({ timeout: 10000 });
        await this.nameOnCardInput.fill(faker.person.fullName());
        await this.cardNumberInput.fill(faker.finance.creditCardNumber());
        await this.cvcInput.fill(faker.finance.creditCardCVV());
        await this.expiryMonthInput.fill(faker.date.future().getMonth().toString().padStart(2, '0'));
        await this.expiryYearInput.fill(faker.date.future().getFullYear().toString());     
        
        
  }
  

//async completeOrder() { 
   // await this.completedOrderButton.click(); 
   // } 


}
  module.exports = ProductPage;