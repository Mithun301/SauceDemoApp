class HomeLocator {
    get resetButton() {
        return $("//android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/itemTV' and @text='Reset App State']");
    }
    get restApp(){
        return $("~android:id/button1");
    
    }
    get okButton(){
        return $("~android:id/button1");
    }
    get sortButton() {
        return $("id:com.saucelabs.mydemoapp.android:id/sortIV");
    }
    get nameAscending(){
        return $('android=new UiSelector().text("Name - Ascending")');
    }
    get nameDescending(){
        return $('android=new UiSelector().text("Name - Descending")');
    }
    get priceAscending(){
        return $('android=new UiSelector().text("Price - Ascending")');
    }
    get priceDescending(){
        return $('android=new UiSelector().text("Price - Descending")');
    }
} 
module.exports = new HomeLocator();