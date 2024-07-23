// Function to add item to the cart
function addToCart(productName, price) {
    // Create a new list item element
    var li = document.createElement("li");
    li.textContent = productName + " - Rs. " + price;
    
    // Append the list item to the cart list
    document.getElementById("ul_pr").appendChild(li);
}

// Function to handle the "Buy Now" button click
function buynow(productName, price) {
    // Add the item to the cart
    addToCart(productName, price);
    
    // Optionally, you can redirect to a checkout page or perform other actions here
}

// Function to clear the cart list
function emptyList() {
    var ul = document.getElementById("ul_pr");
    ul.innerHTML = ""; // Clear the inner HTML of the ul element
}
