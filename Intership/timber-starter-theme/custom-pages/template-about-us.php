<?php
/**
 * Template Name: My Custom Page
 * Description: A Page Template with a darker design.
 */

$context          = Timber::context();
$templates        = array( 'about-us.twig' );

Timber::render( $templates, $context );

?>