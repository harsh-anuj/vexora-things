let cart = [];
localStorage.removeItem("cart");

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(productName + " added to cart!");
}
