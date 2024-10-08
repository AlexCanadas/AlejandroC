<?php
// Incluir Timber
if ( !class_exists('Timber') ) {
    add_action('admin_notices', function() {
        echo '<div class="error"><p>Timber no está activo. Por favor, instálalo y actívalo.</p></div>';
    });
    return;
}

// Agregar soporte para ACF
if (function_exists('acf_add_options_page')) {
    acf_add_options_page();
}

// Agregar soporte para imágenes destacadas
add_theme_support('post-thumbnails');

// Registrar un menú de navegación
function fitandfood_register_menus() {
    register_nav_menus(array(
        'header-menu' => __('Header Menu'),
    ));
}
add_action('init', 'fitandfood_register_menus');

// Enqueue de los estilos
function fitandfood_enqueue_styles() {
    // Cargar el css
    wp_enqueue_style('main-style', get_stylesheet_uri(), array(), filemtime(get_stylesheet_directory() . '/style.css')); 
}
add_action('wp_enqueue_scripts', 'fitandfood_enqueue_styles');

// Registrar el Custom Post Type 'Servicios'
function create_post_type_servicios() {
    $labels = array(
        'name' => __( 'Servicios' ),
        'singular_name' => __( 'Servicio' ),
        'menu_name' => __( 'Servicios' ),
        'name_admin_bar' => __( 'Servicio' ),
        'add_new' => __( 'Añadir nuevo' ),
        'add_new_item' => __( 'Añadir nuevo servicio' ),
        'new_item' => __( 'Nuevo servicio' ),
        'edit_item' => __( 'Editar servicio' ),
        'view_item' => __( 'Ver servicio' ),
        'all_items' => __( 'Todos los servicios' ),
        'search_items' => __( 'Buscar servicios' ),
        'not_found' => __( 'No se han encontrado servicios' ),
        'not_found_in_trash' => __( 'No se han encontrado servicios en la papelera' )
    );
    
    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'services'),
        'supports' => array( 'title', 'editor', 'thumbnail' ), // Soporte para título, contenido y miniaturas
        'menu_icon' => 'dashicons-hammer', // Icono para el menú en el admin
        'show_in_rest' => true, // Activar soporte para el editor de bloques (Gutenberg)
    );
    
    register_post_type( 'servicios', $args );
}
add_action( 'init', 'create_post_type_servicios' );



