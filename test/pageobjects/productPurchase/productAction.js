const productLocator = require('./productLocator');
const homeAction = require('../homePage/homeAction');
const checkoutData = require('../../../testData/checkout.data');
class ProductAction{
    async clickCartIcon(){
        await productLocator.cartIcon.click();
    }

    async addProductToCart(){
        await homeAction.clickSortButton();
        await homeAction.selectNameDescending();
        await this.selectRandomProduct();
        await productLocator.plusButton.click();
        await productLocator.addToCartButton.click();  
    }
    async addProductToCart1(){
        await homeAction.clickSortButton();
        await homeAction.selectPriceDescending();
        await this.selectRandomProduct();
        await productLocator.plusButton.click();
        await productLocator.addToCartButton.click();   

    }
    async checkOutProduct(){
        await productLocator.checkoutButton.click();
        //await productLocator.logIn.click();
        //await productLocator.logInButton.click();
        
       
        await productLocator.firstNameField.setValue(checkoutData.checkout.fullName);
        await productLocator.address1.setValue(checkoutData.checkout.address);
        await productLocator.city.setValue(checkoutData.checkout.city);
        await productLocator.zipCode.setValue(checkoutData.checkout.zipCode);
        await productLocator.country.setValue(checkoutData.checkout.country);
        await productLocator.state.setValue(checkoutData.checkout.state);
        await productLocator.toPayButton.click();
        await productLocator.cardHolderName.setValue(checkoutData.checkout .fullName);
        await productLocator.cardNumber.click();
        await browser.keys([
            '5','5','5','5',' ',
            '5','5','5','5',' ',
            '5','5','5','5',' ',
            '4','4','4','4'
    ]);

        await productLocator.expiryDate.click();
        await browser.keys([
            '0','2','/','2','6'
    ]);
        await productLocator.cvv.click();
        await browser.keys([
            '1','2','3'
    ]);
        await productLocator.reviewOrderButton.click();
        await browser.pause(2000);
    }

    



    async verifyCartIconText(){

        const cartIconText = await $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/cartTV"]');
        const cartText = await cartIconText.getText();
        const cartTextNumber = parseFloat(cartText);
        const productCount = await $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemNumberTV"]');
        const countText = await productCount.getText();
        const countNumber = parseFloat(countText.replace(/[^a-zA-Z0-9\s]+/g, '')); 

        expect(cartTextNumber).toEqual(countNumber);
    }
    
    async selectRandomProduct(){
        const productList = await $$("//android.widget.ImageView[@content-desc='Product Image']");
        const randomIndex = Math.floor(Math.random() * productList.length);
        const randomProduct = productList[randomIndex];
        await randomProduct.click();
    }

    async getAmount1(){
        const price = await  $("//android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/priceTV']");
        const priceText = await price.getText();
        const numericPrice = parseFloat(priceText.replace(/[^0-9.-]+/g, ""));
        const itemNumber = await $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/noTV"]');
        const itemText = await itemNumber.getText();
        const itemCount = parseFloat(itemText.replace(/[^0-9.-]+/g, ""));
        const result1 = numericPrice * itemCount;  
        await browser.pause(2000);
        return result1;
    }
    
    async totalAmount(){
        const sum1 = await this.getAmount1();
        const sum2 = await this.getAmount1();
        const total = sum1 + sum2;
        return Math.round(total * 100) / 100;
    }
 
    async placeOrder(){
      
        await productLocator.placeOrderButton.click();


    }




}
module.exports = new ProductAction();