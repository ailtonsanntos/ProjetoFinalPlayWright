const HomePage = require('../pages/HomePage');
const MenuPage = require('../pages/MenuPage');
const SignupLoginPage = require('../pages/SignupLoginPage');
const DeleteAccountPage = require('../pages/DeleteAccountPage');
const SignupPage = require('../pages/SignupPage');
const ProductPage = require('../pages/ProductPage');

class PoManager {
    constructor(page) {
        this.page = page;  
        this.homePage = new HomePage(this.page);
        this.menuPage = new MenuPage(this.page);
        this.signupLoginPage = new SignupLoginPage(this.page);
        this.deleteAccountPage = new DeleteAccountPage(this.page);
        this.signupPage = new SignupPage(this.page);
        this.productPage = new ProductPage(this.page);

    }

    getHomePage() {
        return this.homePage;
    }

    getMenuPage() {
        return this.menuPage;
    }

    getSignupLoginPage() {
        return this.signupLoginPage;
    }

    getDeleteAccountPage() {
        return this.deleteAccountPage;
    }

    getSignupPage() { 
        return this.signupPage; 
    }

    getProductPage() { 
        return this.productPage; 
    }
    
}

module.exports = PoManager;
