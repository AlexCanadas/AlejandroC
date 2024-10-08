document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contact');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent to load the page again 

        const formData = new FormData(form); // Take the form´s data
        formData.append('action', 'handle_contact_form');

        fetch(ajax_object.ajax_url, { // Using the url of admin-ajax.php
            method: 'POST',
            body: formData, // Form´s data
            headers: {
                'X-Requested-With': 'XMLHttpRequest' // Request to AJAX
            }
        })
        .then(response => response.json()) // Process the data in format JSON
        .then(data => {
            if (data.success) {
                alert(data.data); // Show success message
            } else {
                alert(data.data); // Show error message
            }
        })
        .catch(error => console.error('Error:', error));
    });
});