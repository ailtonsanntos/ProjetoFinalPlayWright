export class MenuPage{
    constructor(page){
        this.page = page;
        this.signInLink = this.page.getByRole('link', { name: ' Signup / Login' });
        this.deleteAccountLink = this.page.getByRole('link', { name: ' Delete Account' });        
    }

    async navigateToMenuPage() { 
        await this.page.goto('http://automationexercise.com/menu'); 
    }

    async navigateToSignupLogin(){
        await this.signInLink.click();
    }

    async navigateToDeleteAccount(){
        await this.deleteAccountLink.click();
    }

}

module.exports = MenuPage
