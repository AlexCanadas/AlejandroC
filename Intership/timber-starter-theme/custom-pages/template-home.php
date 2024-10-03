<?php
/**
 * Template Name: Home
 * Description: A Page Template with a darker design.
 */

$context          = Timber::context();
$templates        = array( 'home.twig' );

Timber::render( $templates, $context );

?>