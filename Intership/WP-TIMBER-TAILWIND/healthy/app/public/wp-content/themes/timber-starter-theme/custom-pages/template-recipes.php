<?php
/**
 * Template Name: Recipes
 * Description: A Page Template with a darker design.
 */

$context          = Timber::context();
$templates        = array( 'recipes.twig' );

Timber::render( $templates, $context );

?>