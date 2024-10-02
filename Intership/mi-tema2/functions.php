<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 * @package mi-tema2
 * @since 1.0.0
 */

/**
 * Enqueue the CSS files.
 *
 * @since 1.0.0
 *
 * @return void
 */
function mi_tema2_styles() {
    wp_enqueue_style(
        'mi-tema2-style',
        get_stylesheet_uri(),
        [],
        wp_get_theme()->get( 'Version' )
    );
}
add_action( 'wp_enqueue_scripts', 'mi_tema2_styles' );

// Verificar si Timber está disponible
if ( ! class_exists( 'Timber' ) ) {
    add_action( 'admin_notices', function() {
        echo '<div class="error"><p>Timber no está activado. Por favor, activa el plugin Timber en tu sitio de WordPress.</p></div>';
    });
    return;
}

// Cargar Timber y configurarlo
class MyTheme extends Timber\Site {
    public function __construct() {
        // Establecer la ubicación de las plantillas
        Timber::$locations = array(
            get_template_directory() . 'mi-tema2/templates', // Asegúrate de que esta ruta sea correcta
        );

        // Agregar soporte para menús, imágenes destacadas, etc.
        add_theme_support( 'menus' );
        add_theme_support( 'post-thumbnails' );

        // Registrar menús
        register_nav_menus( array(
            'primary' => __( 'Primary Menu', 'mi-tema2' ),
        ) );

        parent::__construct();
    }
}

new MyTheme(); // Aquí se inicializa la clase MyTheme, no es necesario Timber::init()


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


