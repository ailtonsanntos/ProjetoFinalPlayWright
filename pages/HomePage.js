class HomePage{
    constructor(page){
        this.page = page;
        this.url = 'https://automationexercise.com/';
    }

    async goTo(){
        await this.page.goto(this.url);
        await this.page.waitForLoadState('load');
    }

    async verifyHomePage() { 
        await this.page.waitForSelector('title:has-text("Automation Exercise")'); 
    } 
    async addProductsToCart() {  
        await this.page.click('text=Adicionar ao Carrinho'); 
        
        } 
        
    }
    module.exports = HomePage;