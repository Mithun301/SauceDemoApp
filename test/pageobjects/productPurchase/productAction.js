const productLocator = require('./productLocator');
const homeAction = require('../homePage/homeAction');
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
    



    async verifyCartIconText(){

        const cartIconText = await $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/cartTV"]');
        const cartText = await cartIconText.getText();
        const cartTextNumber = parseFloat(cartText);
        const productCount = await $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemsTV"]');
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
    async totalAmountVerify(){
        const total1 = await this.totalAmount();
        const totalAmountElement = await $("//android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/totalPriceTV']");
        const totalAmountText = await totalAmountElement.getText();
        const totalAmount1 = parseFloat(totalAmountText.replace(/[^0-9.-]+/g, ""));
        console.log('Calculated Total:', total1); 
        console.log('Displayed Total:', totalAmount1); 
        expect(total1).toEqual(totalAmount1);


    }




}
module.exports = new ProductAction();