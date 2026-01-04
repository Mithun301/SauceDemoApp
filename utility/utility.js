const homeLocator = require("../test/pageobjects/home/homeLocator");
class Utilities{
    async convertTextToNumber(text) {
      const value = parseFloat(text.replace(/[^\d.]/g, ""));
      return value;
    }
    async verifyAscendingPrice(){
        const prices = await $$("//android.widget.TextView[@content-desc='Product Price']");
    const priceValues = [];
    for (let price of prices) {
      const priceText = await price.getText();
      const numericPrice = parseFloat(priceText.replace(/[^0-9.-]+/g, "")); 
      priceValues.push(numericPrice);
    }
    const expectedResult = [...priceValues].sort((a, b) => a - b);
    expect(priceValues).toEqual(expectedResult);

    }





} module.exports = new Utilities();
