<?php
/**
 * Template Name: Services
 * Description: A Page Template with a darker design.
 */

$context          = Timber::context();
$menuSecond  	  = Timber::get_menu(3);
$context['menuSecond'] = $menuSecond;

$templates        = array( 'services.twig' );

Timber::render( $templates, $context );

?>