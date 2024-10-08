<?php
$context = Timber::context(); 
$context['post'] = Timber::get_post();

// Comprobar qué página es y cargar la plantilla Twig adecuada
if ( is_front_page() ) {
    Timber::render( 'home.twig', $context );
} elseif ( is_page( 'services' ) ) {
    Timber::render( 'services.twig', $context );
} elseif ( is_page( 'about' ) ) {
    Timber::render( 'about.twig', $context );
} elseif ( is_page( 'contacto' ) ) {
    Timber::render( 'contact.twig', $context );
} else {
    Timber::render( 'index.twig', $context );
}

?>