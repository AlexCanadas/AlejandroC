<?php
/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 */

// Load Composer dependencies.
require_once __DIR__ . '/vendor/autoload.php';

require_once __DIR__ . '/src/StarterSite.php';

Timber\Timber::init();

// Sets the directories (inside your theme) to find .twig files.
Timber::$dirname = [ 'templates', 'views' ];

new StarterSite();

function prefix_create_custom_post_type() {
    /*
     * The $labels describes how the post type appears.
     */

    $labels = array(
        'name'          => 'Recipes',
        'singular_name' => 'Recipe', 
    );

    $supports = array(
        'title',        // Post title
        'editor',       // Post content
        'excerpt',      // Allows short description
        'author',       // Allows showing and choosing author
        'thumbnail',    // Allows feature images
        //'comments',     // Enables comments
        //'trackbacks',   // Supports trackbacks
        //'revisions',    // Shows autosaved version of the posts
        'custom-fields' // Supports by custom fields
    ); 

    /*
     * The $args parameter holds important parameters for the custom post type
     */
 
    $args = array(
        'labels'              => $labels,
        'description'         => 'Post type post recipe', // Description
        'supports'            => $supports,
        'taxonomies'          => array( 'category', 'post_tag' ), // Allowed taxonomies
        'hierarchical'        => false, // Allows hierarchical categorization, if set to false, the Custom Post Type will behave like Post, else it will behave like Page
        'public'              => true,  // Makes the post type public
        'show_ui'             => true,  // Displays an interface for this post type
        'show_in_menu'        => true,  // Displays in the Admin Menu (the left panel)
        'show_in_nav_menus'   => true,  // Displays in Appearance -> Menus
        'show_in_admin_bar'   => true,  // Displays in the black admin bar
        'menu_position'       => 5,     // The position number in the left menu
        'menu_icon'           => true,  // The URL for the icon used for this post type
        'can_export'          => true,  // Allows content export using Tools -> Export
        'has_archive'         => true,  // Enables post type archive (by month, date, or year)
        'exclude_from_search' => false, // Excludes posts of this type in the front-end search result page if set to true, include them if set to false
        'publicly_queryable'  => true,  // Allows queries to be performed on the front-end part if set to true
        'capability_type'     => 'post' // Allows read, edit, delete like “Post”
    ); 

    register_post_type('recipe', $args); //Create a post type with the slug is ‘recipe’ and arguments in $args.
}

add_action('init', 'prefix_create_custom_post_type');

function mytheme_enqueue_styles() {
    wp_enqueue_style('tailwindcss', get_template_directory_uri() . '/assets/css/style.css', array(), '1.0', 'all');
}

add_action('wp_enqueue_scripts', 'mytheme_enqueue_styles');


// Añadimos filtro y función para sacar las últimas recetas del CPT
add_filter('timber_context', 'add_recipes_to_context');
function add_recipes_to_context($context) {
    $context['latest_recipes'] = Timber::get_posts(array(
        'post_type' => 'recipe',
        'posts_per_page' => 6, // Número de recetas a mostrar
        'orderby' => 'date',
        'order' => 'DESC'
    ));
    return $context;
}
