const logInLocator = require("./logInLocator")

class LoginActions{

    
    async clickMenuButton(){
        await logInLocator.menu.click();
    
    }
    async clicklogIn(){
        await logInLocator.logIn.click();
    }
 async enterUsername(userName){
    await logInLocator.userName.setValue(userName);
 }

 async enterPassword(password){
    await logInLocator.password.setValue(password);
 }

 async clickLoginButton(){
    await logInLocator.logInIcon.click();
 }
}
    module.exports = new LoginActions();