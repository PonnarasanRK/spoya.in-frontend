// Initialize an empty array to store cart items
var cartItems = [];

// Function to add item to the cart
function addToCart(productName, price) {
    // Create a new cart item object
    var newItem = {
        name: productName,
        price: price
    };

    // Add the new item to the cart
    cartItems.push(newItem);

    // Display the updated cart items for debugging (you can remove this in the final version)
    console.log('Cart items:', cartItems);

    // Optionally, you can provide feedback to the user that the item was added to the cart
    alert('Item added to cart!');
}

// Function to display cart items on the cart page
function displayCart() {
    var cartList = document.getElementById('cartItems');
    
    // Check if cartList exists before proceeding
    if (!cartList) {
        console.error('Cart items element not found.');
        return; // Exit the function if cartList is null
    }

    cartList.innerHTML = ''; // Clear the existing items

    if (cartItems.length === 0) {
        cartList.innerHTML = '<li>Your cart is empty.</li>';
    } else {
        cartItems.forEach(function(item) {
            var li = document.createElement('li');
            li.textContent = item.name + ' - Rs. ' + item.price;
            cartList.appendChild(li);
        });
    }
}


// Call the displayCart function when the cart page loads
window.onload = function() {
    displayCart(); // Display cart items
};
