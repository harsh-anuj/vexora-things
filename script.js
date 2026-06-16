let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(productName + " added to cart!");
}

function addToWishlist(productName, price) {

    wishlist.push({
        name: productName,
        price: price
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert(productName + " added to wishlist ❤️");
}
