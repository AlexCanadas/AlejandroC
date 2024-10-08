document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contact');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent to load the page again 

        const formData = new FormData(form); // Take the form´s data with the object formData
        formData.append('action', 'handle_contact_form'); // With action it indicates to the server what to do (handle_contact_form function)

        fetch(ajax_object.ajax_url, { // POST request to the url of admin-ajax.php
            method: 'POST',
            body: formData, // Sending form´s data
            headers: {
                'X-Requested-With': 'XMLHttpRequest' // AJAX request
            }
        })
        .then(response => response.json()) // Process the data in JSON format
        .then(data => {
            if (data.success) {
                alert(data.data); // Show success message if successful
            } else {
                alert(data.data); // Show error message if negative response
            }
        })
        .catch(error => console.error('Error:', error)); // Show error message if there is
    });
});