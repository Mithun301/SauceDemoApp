const homeAction = require('../pageobjects/homePage/homeAction');
const productAction = require('../pageobjects/productPurchase/productAction');

describe(' Product Purchase journey', () => {   

    it(' Product Add to the Cart', async () => { 
            //await homeAction.resetAppState();
            await productAction.addProductToCart();
            await productAction.getAmount1();
            const sum1 = await productAction.getAmount1();
            await browser.pause(2000);
            await browser.execute('mobile: pressKey', { keycode: 4 });
            await productAction.addProductToCart1();
            await productAction.getAmount1();
            const sum2 = await productAction.getAmount1();
            await browser.pause(2000);
            await browser.execute('mobile: pressKey', { keycode: 4 });
            await productAction.clickCartIcon();
            const total = sum1 + sum2;
            const total1 = Math.round(total * 100) / 100;
            await browser.pause(2000);
            const totalAmountElement = await $("//android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/totalPriceTV']");
            const totalAmountText = await totalAmountElement.getText();
            const totalAmount1 = parseFloat(totalAmountText.replace(/[^0-9.-]+/g, ""));
            expect(total1).toEqual(totalAmount1);

            await browser.pause(2000);
    });

    it(' Verify The total Amount', async () => {
            //await productAction.totalAmountVerify();
          
            //const totalAmountElement = await $("//android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/totalPriceTV']");
           // const totalAmountText = await totalAmountElement.getText();
           // const totalAmount1 = parseFloat(totalAmountText.replace(/[^0-9.-]+/g, ""));
           // expect(total1).toEqual(totalAmount1);

           // await browser.pause(2000);
    });
     it(' Verify The cart Icon count', async () => {
            await productAction.verifyCartIconText();
            await browser.pause(5000);
    
    });
});