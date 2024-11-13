const { test, expect, request } = require('@playwright/test');
const PoManager = require('../pages/PoManager');
const { faker } = require('@faker-js/faker');

let email; 
let password;

test.beforeAll(() => { 
    email = faker.internet.email(); 
    password = faker.internet.password(); 
    console.log(`Generated credentials: ${email}, ${password}`); 
});

test.describe.serial('Testes sequenciais', () => {
test('Cadastrar usuário', async () => {
    const payload = {
        title: 'Mr',
        name: 'Test',
        email: email,
        password: password,
        birth_date: '24',
        birth_month: '12',
        birth_year: '1981',
        firstname: 'Test',
        lastname: 'Teste',
        company: '',
        address1: 'Street Address',
        address2: '',
        country: 'United States',
        state: 'California',
        city: 'san francisco',
        zipcode: '123456',
        mobile_number: '123456789',
    };
    
    const apiContext = await request.newContext(); 
    const response = await apiContext.post("https://automationexercise.com/api/createAccount", { form: payload }); 
    const responseJson = await response.json(); 
    const status = await responseJson.responseCode; 
    expect(status).toBe(201); 
    console.log(`Cadastro: ${email}, ${password}`);
});

test('Realizar Compra', async ({ browser }) => {

    const context = await browser.newContext({ 
        recordVideo: { 
            dir: './videos/', // Diretório onde os vídeos serão salvos 
            size: { width: 1280, height: 720 } // Tamanho do vídeo 
            } 
        });

    const page = await context.newPage();
    const poManager = new PoManager(page);
    
    await poManager.homePage.goTo();
    await poManager.signupLoginPage.validLogin(email, password);
    await poManager.signupLoginPage.verifiedLogin();

    await poManager.productPage.navigateToProductPage();
    await poManager.productPage.viewProduct();
    await poManager.productPage.addProductToCart();
    await poManager.productPage.viewCart(); 
    await poManager.productPage.proceedToCheckout(); 
    await poManager.productPage.completeCheckout(); 
    await poManager.productPage.submitOrder(); 
    //await poManager.productPage.completeOrder();
    
    await page.screenshot({ path: './Screenshot/screenshotcase3.png' });
    console.log(`Cadastro: ${email}, ${password}`);

    await page.close(); 
    await context.close();

});

})