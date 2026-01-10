
const loginData = require("../../testData/login.data");
const logInAction = require("../pageobjects/logIn/logInAction");
const logInLocator = require("../pageobjects/logIn/logInLocator");
describe('My Login application', () => {   
    it('Open the App', async () => { 
     await logInAction.clickMenuButton();
     await logInAction.clicklogIn();
    });

    it('should Show Error message with empty username credentials', async () => {
        
        await logInAction.enterUsername(loginData.empty1.userName);
        await logInAction.enterPassword(loginData.empty1.password);
        await logInAction.clickLoginButton();
        await expect(logInLocator.errorMessage1).toHaveText("Username   is required");
        await browser.pause(3000);

  });
   it('should Show Error message with empty password credentials', async () => {
        
        await logInAction.enterUsername(loginData.empty2.userName);
        await logInAction.enterPassword(loginData.empty2.password);
        await logInAction.clickLoginButton();
        await expect(logInLocator.errorMessage2).toHaveText("Enter Password");
        await browser.pause(3000);

  });
    it('should login with valid credentials', async () => {
        
        await logInAction.enterUsername(loginData.valid.userName);
        await logInAction.enterPassword(loginData.valid.password);
        await logInAction.clickLoginButton();
        await expect(logInLocator.homePage).toBeDisplayed();
        await browser.pause(3000);

 });
 
 
  

});
