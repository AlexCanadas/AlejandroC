<?php
/**
 * Template Name: Mi plantilla de servicios
 * Description: Una plantilla para mostrar los servicios disponibles.
 */

namespace App;

use Timber\Timber;

$context = Timber::context();

// Obtener servicios del post type Servicios:
$context['servicios'] = Timber::get_posts([
    'post_type' => 'servicios',
    'posts_per_page' => -1, // Mostrar todos los servicios
]);

Timber::render('services.twig', $context);
