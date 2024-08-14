// app.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validación básica (puedes agregar más validaciones según sea necesario)
    if (name === '' || email === '' || message === '') {
        displayFormMessage('Por favor, completa todos los campos.', false);
        return;
    }

    // Simulación de envío de datos (aquí podrías enviar los datos a un servidor)
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Mensaje:', message);

    // Mostrar mensaje de éxito
    displayFormMessage('¡Gracias por contactarnos! Te responderemos pronto.', true);

    // Limpiar el formulario
    document.getElementById('contactForm').reset();
});

function displayFormMessage(message, isSuccess) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.style.color = isSuccess ? 'green' : 'red';
}
