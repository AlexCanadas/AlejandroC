<?php
/*
 * Plugin Name: Mi Plugin Contacts
 * Description: Plugin to do operations CRUD in the table wp_contacts
 * Version: 1.0
 */

if ( !defined( 'ABSPATH' ) ) exit; // Protect direct access to the file

// Add a menu in the administration menu
add_action( 'admin_menu', 'mi_plugin_contacts_menu' ); // event, function

function mi_plugin_contacts_menu() {
    add_menu_page(
        'Gestión de Contactos',  // Title of the page
        'CRUD Contacts',         // Title of the plugin
        'manage_options',        // Just admins can use this menu
        'mi-contacts-plugin',    // Slug
        'mi_contacts_plugin_page' // Function to show the content
    );
}

function mi_contacts_plugin_page() {
    global $wpdb; // Database connection, wpdb object interact with the database
    $tabla = $wpdb->prefix . 'contacts';  // Using the table wp_contacts

    // Add a new contact
    if ( isset( $_POST['nuevo_registro'] ) ) {   // nuevo registro = button name
        $name = sanitize_text_field( $_POST['name'] );
        $email = sanitize_email( $_POST['email'] );
        $text = sanitize_textarea_field( $_POST['text'] );

        // Insert contact in the table wp_contacts
        $wpdb->insert(
            $tabla,
            [
                'name'  => $name,
                'email' => $email,
                'text'  => $text,
            ]
        );
    }

    // Initialize variable for the contact being edited
    $contacto = null; 

    // Handle actions directly based on the form submission
    if ( isset( $_POST['contact_id'] ) && isset( $_POST['action'] ) ) {   
        $id = intval( $_POST['contact_id']);
        
        // Determine if the user wants to update or delete the contact based on the selected action
        if ($_POST['action'] === 'actualizar') {
            // Fetch the contact details for editing
            $contacto = $wpdb->get_row("SELECT * FROM $tabla WHERE id = $id");
        } elseif ($_POST['action'] === 'eliminar') {
            // Delete contact
            $wpdb->delete( $tabla, ['id' => $id] ); // Delete the contact if PK exists
            echo '<div class="notice notice-success"><p>Contacto eliminado correctamente.</p></div>';
        }
    }

    // Handle the actual update if the edit form was submitted
    if ( isset( $_POST['actualizar_registro'] ) ) {
        $id = intval( $_POST['contact_id'] );
        $name = sanitize_text_field( $_POST['name'] );
        $email = sanitize_email( $_POST['email'] );
        $text = sanitize_textarea_field( $_POST['text'] );

        // Update the contact in the database
        $wpdb->update(
            $tabla,
            [
                'name' => $name,
                'email' => $email,
                'text' => $text,
            ],
            ['id' => $id]  // Primary key
        );

        echo '<div class="notice notice-success"><p>Contacto actualizado correctamente.</p></div>';
        // Reset contacto to avoid showing the edit form again
        $contacto = null;
    }

    // Show the form to register/update or delete a new contact
    echo '<div class="wrap">';
    echo '<h1>Agregar nuevo contacto</h1>';
    echo '<form method="post" action="">';
    echo '<table class="form-table">';
    echo '<tr><th scope="row"><label for="name">Nombre</label></th>';
    echo '<td><input type="text" id="name" name="name" required></td></tr>';
    echo '<tr><th scope="row"><label for="email">Correo electrónico</label></th>';
    echo '<td><input type="email" id="email" name="email" required></td></tr>';
    echo '<tr><th scope="row"><label for="text">Mensaje</label></th>';
    echo '<td><textarea id="text" name="text" required></textarea></td></tr>';
    echo '</table>';
    echo '<p><input type="submit" name="nuevo_registro" value="Guardar Contacto" class="button button-primary"></p>';
    echo '</form>';

    echo '<h2>Lista de contactos</h2>';
    // Obtain all data from the table wp_contacts
    $resultados = $wpdb->get_results( "SELECT * FROM $tabla" );

    if ( !empty( $resultados ) ) {
        echo '<table class="wp-list-table widefat fixed striped">';
        echo '<thead>';
        echo '<tr>';
        echo '<th>Nombre</th>';
        echo '<th>Email</th>';
        echo '<th>Mensaje</th>';
        echo '<th>Posibles acciones</th>';
        echo '</tr>';
        echo '</thead>';
        echo '<tbody>';
        
        foreach ( $resultados as $contacto_db ) { // Loop for every contact to show the details in the table
            echo '<tr>';
            echo '<td>' . esc_html( $contacto_db->name ) . '</td>';
            echo '<td>' . esc_html( $contacto_db->email ) . '</td>';
            echo '<td>' . esc_html( $contacto_db->text ) . '</td>';
            echo '<td>';
            // Form for selecting actions
            echo '<form method="post" action="" style="display:inline;">';
            echo '<input type="hidden" name="contact_id" value="' . esc_attr( $contacto_db->id ) . '">';
            echo '<select name="action" onchange="this.form.submit();">';
            echo '<option value="">Seleccionar acción</option>';
            echo '<option value="actualizar">Actualizar</option>';
            echo '<option value="eliminar">Eliminar</option>';
            echo '</select>';
            echo '</form> ';
            echo '</td>';
            echo '</tr>';

            // Show the editing form only if this contact is selected for update
            if ($contacto && isset($_POST['action']) && $_POST['action'] === 'actualizar' && $_POST['contact_id'] == $contacto_db->id) {
                echo '<tr>';
                echo '<td colspan="4">';
                echo '<h3>Editar Contacto</h3>';
                echo '<form method="post" action="">';
                echo '<input type="hidden" name="contact_id" value="' . esc_attr( $contacto->id ) . '">';
                echo '<table class="form-table">';
                echo '<tr><th scope="row"><label for="name">Nombre</label></th>';
                echo '<td><input type="text" name="name" value="' . esc_attr( $contacto->name ) . '" required></td></tr>';
                echo '<tr><th scope="row"><label for="email">Correo electrónico</label></th>';
                echo '<td><input type="email" name="email" value="' . esc_attr( $contacto->email ) . '" required></td></tr>';
                echo '<tr><th scope="row"><label for="text">Mensaje</label></th>';
                echo '<td><textarea name="text" required>' . esc_textarea( $contacto->text ) . '</textarea></td></tr>';
                echo '</table>';
                echo '<input type="submit" name="actualizar_registro" value="Actualizar" class="button button-secondary">';
                echo '</form>';
                echo '</td>';
                echo '</tr>';
            }
        }

        echo '</tbody>';
        echo '</table>';
    } else {
        echo '<p>No hay contactos aún.</p>';
    }

    echo '</div>';
}
