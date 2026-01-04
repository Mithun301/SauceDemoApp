class LoginLocators{

get menu(){
    return $("id:com.saucelabs.mydemoapp.android:id/menuIV");
}

get logIn(){
    return $("~Login Menu Item");
}

get userName(){
    return $("id:com.saucelabs.mydemoapp.android:id/nameET");
}
get password(){
    return $("id:com.saucelabs.mydemoapp.android:id/passwordET");

}

get logInIcon(){
    return $("~Tap to login with given credentials");

}
get errorMessage1(){
    return $("id:com.saucelabs.mydemoapp.android:id/nameErrorTV");
}
get errorMessage2(){
    return $("id:com.saucelabs.mydemoapp.android:id/passwordErrorTV");
}
get homePage(){
    return $(`android=new UiSelector().className(\"android.view.ViewGroup\").instance(2)`);
}

}
module.exports = new LoginLocators();