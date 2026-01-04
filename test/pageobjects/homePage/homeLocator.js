class HomeLocator {
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