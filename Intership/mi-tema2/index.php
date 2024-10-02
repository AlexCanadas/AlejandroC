<?php
$context = Timber::context();
$context['post'] = Timber::get_post();

if ( is_front_page() ) {
    error_log('Cargando home.twig');
    Timber::render( 'home.twig', $context );
} elseif ( is_page('about') ) {
    error_log('Cargando about.twig');
    Timber::render( 'about.twig', $context );
} elseif ( is_page('services') ) {
    error_log('Cargando services.twig');
    Timber::render( 'services.twig', $context );
} elseif ( is_page('contact') ) {
    error_log('Cargando contact.twig');
    Timber::render( 'contact.twig', $context );
} else {
    error_log('Cargando index.html');
    Timber::render( 'index.html', $context );
}

?>