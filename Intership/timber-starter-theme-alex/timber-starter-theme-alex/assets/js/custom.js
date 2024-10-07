document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contact');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita la recarga de la página

        const formData = new FormData(form); // Captura los datos del formulario
        formData.append('action', 'handle_contact_form');

        fetch(ajax_object.ajax_url, { // Usamos la URL de admin-ajax.php
            method: 'POST',
            body: formData, // Los datos del formulario
            headers: {
                'X-Requested-With': 'XMLHttpRequest' // Este encabezado indica una solicitud AJAX
            }
        })
        .then(response => response.json()) // Procesa la respuesta en formato JSON
        .then(data => {
            if (data.success) {
                alert(data.data); // Mostrar mensaje de éxito
            } else {
                alert(data.data); // Mostrar mensaje de error
            }
        })
        .catch(error => console.error('Error:', error));
    });
});