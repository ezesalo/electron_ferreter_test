const productForm = document.getElementById('productForm');

const productName = document.getElementById('name');
const productPrice = document.getElementById('price');
const productDescription = document.getElementById('description');

productForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(productName);
})