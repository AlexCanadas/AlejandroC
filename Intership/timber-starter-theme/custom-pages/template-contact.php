<?php
/**
 * Template Name: Contact
 * Description: Contact template
 * 
 */

 global $wpdb;
 $table_name = $wpdb->prefix . 'contacts';

 $context = Timber::context();

$name = "";
$email = "";
$description = "";
 
$results = $wpdb->get_results("SHOW TABLES LIKE '$table_name'");

if (empty($results)) {
    echo "The table does not exist";
    die();
}

 if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['description'])) {

        $name       = $_POST['name'];
        $email       = $_POST['email'];
        $description = $_POST['description'];
         
         $data = array(
             'name' => $name,  
             'email' => $email,
             'description' => $description,
             'created_at' => current_time('mysql') // Save current date and time
         );
 
         $format = array('%s', '%s', '%s', '%s'); // Formatting
 
         // If success, inserting data to the correct table
         $success = $wpdb->insert($table_name, $data, $format);

         if ($success === false) {
            $wpdb->show_errors();
            $wpdb->print_error();
         }
 
         if ($success) {

             $context['message'] = "ok";

             /**
              * PENDIENTE!    Enviar correo, encontrar como mandar correo con wp (wp_mail???)
              */

         } else {
             // Reply with error message
             $context['message'] = "Error while inserting the data";
         }

    }else {
        $context['message'] = "Please fill in all required fields.";
    }

}

$templates  = array( 'contact.twig');

Timber::render( $templates, $context );

?>