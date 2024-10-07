<?php
/**
 * Template Name: My Custom Page
 * Description: A Page Template with a darker design.
 */

$context          = Timber::context();
$templates        = array( 'about-us.twig' );

$menuSecond  	  = Timber::get_menu(3);
$context['menuSecond'] = $menuSecond;

Timber::render( $templates, $context );

?>