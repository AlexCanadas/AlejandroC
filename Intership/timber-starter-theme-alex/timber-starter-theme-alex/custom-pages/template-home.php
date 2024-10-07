<?php
/**
 * Template Name: Home
 * Description: A Page Template with a darker design.
 */

$context          = Timber::context();

$menuSecond  	  = Timber::get_menu(3);
$context['menuSecond'] = $menuSecond;

$templates        = array( 'home.twig' );

Timber::render( $templates, $context );

?>