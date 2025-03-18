// Initialize cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;
}

// Add to cart function
function addToCart(productId) {
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Event listener for "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const productId = event.target.getAttribute('data-product-id');
        addToCart(productId);
    });
});

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }
  