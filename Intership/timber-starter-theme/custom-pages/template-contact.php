<?php
/**
 * Template Name: Contact
 * Description: Contact template
 * 
 * Investigate Pass form
 */

 global $wpdb;
 $table_name = $wpdb->prefix . 'contacts';

 $context = Timber::context();


$email = "";
$description = "";
 
$results = $wpdb->get_results("SHOW TABLES LIKE '$table_name'");

if (empty($results)) {
    echo "La tabla no existe";
    die();
}

 if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['email']) && isset($_POST['description'])) {


        $email       = $_POST['email'];
        $description = $_POST['description'];
        
        /**
         * 
         * 1. Validar campos 
         * 2. Insertar en la base datos o tirar error
         * 
         */

         $email = $_POST['email'];
         $description = $_POST['description'];
 
 
         // Insertar los datos en la tabla "contacts"
         $table_name = 'wp_contacts'; // Asegurarse de incluir el prefijo de WordPress
         
         $data = array(
             'email' => $email,
             'description' => $description,
             'created_at' => current_time('mysql') // Guardar la fecha y hora actuales
         );
 
         $format = array('%s', '%s', '%s'); // Formatos para email, password y created_at
 
         $success = $wpdb->insert($table_name, $data, $format);

         if ($success === false) {
            $wpdb->show_errors();
            $wpdb->print_error();
         }
 
         if ($success) {

             $context['message'] = "ok";

             /**
              * Send email, find information how to send email with wp
              */

         } else {
             // Responder con error
             $context['message'] = "Error al insertar los datos";
         }

    }

}


$templates  = array( 'contact.twig');

Timber::render( $templates, $context );

?>