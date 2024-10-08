<?php
/*
 * Plugin Name: Mi Plugin Contacts
 * Description: Plugin to do operations CRUD in the table wp_contacts
 * Version: 1.0
 */

if ( !defined( 'ABSPATH' ) ) exit; // Protect direct access to the file

// Add a menu item in the administration menu
add_action( 'admin_menu', 'mi_plugin_contacts_menu' );

function mi_plugin_contacts_menu() {
    add_menu_page(
        'Gestión de Contactos',  // Title of the page
        'CRUD Contacts',         // Title of the plugin
        'manage_options',        // Required capacity
        'mi-contacts-plugin',    // Slug
        'mi_contacts_plugin_page' // Function to show the content
    );
}

function mi_contacts_plugin_page() {
    global $wpdb;
    $tabla = $wpdb->prefix . 'contacts';  // Using the table wp_contacts

    // Add a new contact
    if ( isset( $_POST['nuevo_registro'] ) ) {
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

    // Update an existing contact
    if ( isset( $_POST['actualizar_registro'] ) ) {
        $id = intval( $_POST['contact_id'] );
        $name = sanitize_text_field( $_POST['name'] );
        $email = sanitize_email( $_POST['email'] );
        $text = sanitize_textarea_field( $_POST['text'] );

        // Update contact in the table wp_contacts
        $wpdb->update(
            $tabla,
            [
                'name' => $name,
                'email' => $email,
                'text' => $text,
            ],
            ['id' => $id]  // Assuming 'id' is the primary key
        );
    }

    // Delete a contact
    if ( isset( $_GET['delete'] ) ) {
        $id = intval( $_GET['delete']);
        $wpdb->delete( $tabla, ['id' => $id] ); // Assuming 'id' is the primary key
        echo '<div class="notice notice-success"><p>Contacto eliminado correctamente.</p></div>';
    }

    // Show the form to register a new contact
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
        echo '<th>Acciones</th>'; // Added column for actions
        echo '</tr>';
        echo '</thead>';
        echo '<tbody>';
        
        foreach ( $resultados as $contacto ) {
            echo '<tr>';
            echo '<td>' . esc_html( $contacto->name ) . '</td>';
            echo '<td>' . esc_html( $contacto->email ) . '</td>';
            echo '<td>' . esc_html( $contacto->text ) . '</td>';
            echo '<td>';
            // Edit Button
            echo '<form method="post" action="" style="display:inline;">';
            echo '<input type="hidden" name="contact_id" value="' . esc_attr( $contacto->id ) . '">';
            echo '<input type="text" name="name" value="' . esc_attr( $contacto->name ) . '" required>';
            echo '<input type="email" name="email" value="' . esc_attr( $contacto->email ) . '" required>';
            echo '<textarea name="text" required>' . esc_textarea( $contacto->text ) . '</textarea>';
            echo '<input type="submit" name="actualizar_registro" value="Actualizar" class="button button-secondary">';
            echo '</form> ';

            // Delete Link
            echo '<a href="' . esc_url( admin_url('admin.php?page=mi-contacts-plugin&delete=' . $contacto->id) ) . '" class="button button-danger" onclick="return confirm(\'¿Estás seguro de que quieres eliminar este contacto?\');">Eliminar</a>';
            echo '</td>';
            echo '</tr>';
        }

        echo '</tbody>';
        echo '</table>';
    } else {
        echo '<p>No hay contactos aún.</p>';
    }

    echo '</div>';
}
