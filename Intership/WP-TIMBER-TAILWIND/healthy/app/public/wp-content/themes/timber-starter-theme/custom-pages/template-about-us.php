<?php
/**
 * Template Name: My Custom Page
 * Description: A Page Template with a darker design.
 */

$context          = Timber::context();
$post             = Timber::get_post();

// Obtain fields from ACF
$context['members'] = get_field('members');

$templates        = array( 'about-us.twig' );

Timber::render( $templates, $context );

?>
