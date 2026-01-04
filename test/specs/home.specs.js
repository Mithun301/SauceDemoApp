
const homeAction = require("../pageobjects/homePage/homeAction");

describe(' Home page sort Button verify', () => {   

    it(' Verify all products are sorted in ascending order', async () => { 

            await homeAction.clickSortButton();
            await homeAction.selectNameAscending();
            await homeAction.verifyAscendingProduct();
            await browser.pause(3000);

        });

    it(' Verify all products are sorted in descending order', async () => { 

            await homeAction.clickSortButton();
            await homeAction.selectNameDescending();
            await homeAction.verifyDescendingProduct();
            await browser.pause(3000);  
        });


    it(' Verify all prices are sorted in ascending order', async () => { 

            await homeAction.clickSortButton();
            await homeAction.selectPriceAscending();
            await homeAction.verifyAscendingPrice();
            await browser.pause(3000);

        });
    it(' Verify all prices are sorted in descending order', async () => { 

            await homeAction.clickSortButton();
            await homeAction.selectPriceDescending();
            await homeAction.verifyDescendingPrice();
            await browser.pause(3000);

        });
});