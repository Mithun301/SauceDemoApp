class ProductLocator {
    get addToCartButton() {
    return $("~Tap to add product to cart");
    }  
    get cartIcon(){
        return $("~Displays number of items in your cart");
    }
    get plusButton(){
        return $("~Increase item quantity");
    }
    get checkoutButton(){
        return $("~Confirms products for checkout");
    }
    get toPayButton(){
        return $("~Saves user info for checkout");
    }
    get placeOrderButton(){
        return $("~Completes the process of checkout");
    }
    
    get firstNameField(){
        return $("//android.widget.EditText[@resource-id='com.saucelabs.mydemoapp.android:id/fullNameET']");
    }
    get address1(){
        return $("//android.widget.EditText[@resource-id='com.saucelabs.mydemoapp.android:id/address1ET']");
    }
    get city(){
        return $("//android.widget.EditText[@resource-id='com.saucelabs.mydemoapp.android:id/cityET']");
    }
    get zipCode(){
        return $("//android.widget.EditText[@resource-id='com.saucelabs.mydemoapp.android:id/zipET']");
    }
    get country(){
        return $("//android.widget.EditText[@resource-id='com.saucelabs.mydemoapp.android:id/countryET']");
    }   
    get state(){
        return $("//android.widget.EditText[@resource-id='com.saucelabs.mydemoapp.android:id/stateET']");
    }
    get reviewOrderButton(){
        return $("~Saves payment info and launches screen to review checkout data");  
    }
    get cardHolderName(){
        return $("//android.widget.EditText[@resource-id='com.saucelabs.mydemoapp.android:id/nameET']");
    }
    get cardNumber(){
        return $("//android.widget.EditText[@resource-id='com.saucelabs.mydemoapp.android:id/cardNumberET']");
    }
    get expiryDate(){
        return $("//android.widget.EditText[@resource-id='com.saucelabs.mydemoapp.android:id/expirationDateET']");
    }
    get cvv(){
        return $("//android.widget.EditText[@resource-id='com.saucelabs.mydemoapp.android:id/securityCodeET']");
}
    get logIn(){
        return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/username1TV"]');
    }

    get logInButton(){
        return $("~Tap to login with given credentials");
    }

}
    module.exports = new ProductLocator();