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
}
    module.exports = new ProductLocator();