<?php
/**
 * Template Name: Single-Recipe
 * Description: A Page Template with a darker design.
 */

$context          = Timber::context();
//$templates        = array( 'single-recipe.twig' );

Timber::render( $templates, $context );

/* // ----------------------------Last 6 recipes---------------------------------
// We add a filter to print the last 6 recipes of the CPT 
add_filter('timber_context', 'add_recipes_to_context');
function add_recipes_to_context($context) {
    // Context = associative array, latest_recipes = key, Timber::get_posts() object´s array of posts
    $context['latest_recipes'] = Timber::get_posts(array(
        'post_type' => 'recipe',
        'posts_per_page' => 6, // 6 recipes to show
        'orderby' => 'date',
        'order' => 'DESC'
    ));
    
    return $context;
}

// -------------------------All recipes----------------------------------
// We add a filter to print all recipes of the CPT 
add_filter('timber_context', 'add_all_recipes_to_context');
function add_all_recipes_to_context($context) {
    // Context = associative array, all_recipes = key, Timber::get_posts() object´s array of posts
    $context['all_recipes'] = Timber::get_posts(array(
        'post_type' => 'recipe',
        'posts_per_page' => -1, // Retrieve all recipes
        'orderby' => 'date',
        'order' => 'DESC'
    ));

    return $context;
}

// --------------------Suggested recipes----------------------
// Function to get the suggested recipes for a single recipe post 
add_filter('timber_context', 'add_suggested_recipes_to_context');
function add_suggested_recipes_to_context($context) {
    // Get the current post
    $post = Timber::get_post();

    // Get the related recipes using ACF with the correct field name
    $suggested_recipes = get_field('suggested_recipes', $post->ID);

    // Give the correct recipes to the context
    if ($suggested_recipes) {
        $context['suggested_recipes'] = Timber::get_posts($suggested_recipes);
    }

    return $context;
}

// ----------------Get post image---------------
add_filter('timber_context', 'add_custom_image_to_context');
function add_custom_image_to_context($context) {
    $post = Timber::get_post();
    
    // Obtener el campo de imagen personalizado de ACF
    $custom_image = get_field('custom_image', $post->ID);

    // Pasar la imagen al contexto de Timber
    if ($custom_image) {
        $context['custom_image'] = $custom_image;
    }

    return $context;
} */

?>