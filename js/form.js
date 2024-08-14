document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    // Obtener los valores de los campos del formulario
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productDescription = document.getElementById('productDescription').value;
    
    // Crear un objeto de producto
    const product = {
        name: productName,
        price: productPrice,
        description: productDescription
    };
    
    // Añadir el producto a la lista de productos
    addProductToList(product);
    
    // Limpiar el formulario
    document.getElementById('productForm').reset();
});

function addProductToList(product) {
    const productList = document.getElementById('productList');
    
    // Crear un nuevo elemento de lista
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}: ${product.description}`;
    
    // Añadir el nuevo elemento a la lista
    productList.appendChild(li);
}
