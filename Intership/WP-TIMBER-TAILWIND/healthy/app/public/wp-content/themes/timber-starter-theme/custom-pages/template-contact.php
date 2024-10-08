<?php
/**
 * Template Name: Contact
 * Description: Contact template
 * 
 */


$context = Timber::context();

$menuSecond  	  = Timber::get_menu(3);
$context['menuSecond'] = $menuSecond;  // xxxx


$templates  = array( 'contact.twig');

Timber::render( $templates, $context );

?>