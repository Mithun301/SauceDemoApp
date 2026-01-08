const homeAction = require('../pageobjects/homePage/homeAction');
const productAction = require('../pageobjects/productPurchase/productAction');

describe('Product Purchase journey', () => {   

    it('Product Add to the Cart and validate the total price', async () => { 
        await homeAction.resetAppState();
        await productAction.addProductToCart();
        const sum1 = await productAction.getAmount1(); 
        await browser.execute('mobile: pressKey', { keycode: 4 });
        await productAction.addProductToCart1();
        const sum2 = await productAction.getAmount1();
        await browser.execute('mobile: pressKey', { keycode: 4 });
        await productAction.clickCartIcon();
        const total = sum1 + sum2;
        const total1 = Math.round(total * 100) / 100;
        const totalAmountElement = await $("//android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/totalPriceTV']");
        await totalAmountElement.waitForDisplayed({ timeout: 45000 });  
        const totalAmountText = await totalAmountElement.getText();
        const totalAmount1 = parseFloat(totalAmountText.replace(/[^0-9.-]+/g, ""));
        expect(total1).toEqual(totalAmount1);
        await productAction.checkOutProduct();
        const deliveryFeeElement = await $("//android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/amountTV']");
        await deliveryFeeElement.waitForDisplayed({ timeout: 45000 }); 
        const deliveryFeeText = await deliveryFeeElement.getText();
        const deliveryFee = parseFloat(deliveryFeeText.replace(/[^0-9.-]+/g, ""));
        const totalPayableAmount = total1 + deliveryFee;
        const payableAmount = Math.round(totalPayableAmount * 100) / 100;
        const payableAmountElement = await $("//android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/totalAmountTV']");
        await payableAmountElement.waitForDisplayed({ timeout: 45000 }); 
        const payableAmountText = await payableAmountElement.getText();
        const payableAmount1 = parseFloat(payableAmountText.replace(/[^0-9.-]+/g, ""));
        expect(payableAmount).toEqual(payableAmount1);
    });

    it('Verify The cart Icon count', async () => {
        await productAction.verifyCartIconText();
        await productAction.placeOrder();
    });
});
