const { test, expect } = require('@playwright/test');

export class SignupLoginPage{
    constructor(page){
        this.page = page;
        this.loginEmailAdress = this.page.locator('[data-qa=login-email]');
        this.loginPassword = this.page.locator('[data-qa=login-password]');
        this.loginButton = this.page.locator('[data-qa=login-button]');
    }

    async validLogin(email, password){
        await this.page.click('text="Signup / Login"');  
        await this.loginEmailAdress.fill(email);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('load');
    }

    async verifiedLogin(){
        await expect(this.page.getByText('Logged in as Test')).toBeVisible({ timeout: 10000 });
    }

}


module.exports = SignupLoginPage;

