<?php

/**
 * Plugin Name:       Ncmaz Core
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.5
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ncmaz-core
 *
 * @package           create-block
 */



function create_block_ncmaz_core_block_init()
{

	if (is_admin()) {
		ncmazcorePluginEnqueueScript();
		register_block_type(__DIR__);
	}
}
add_action('init', 'create_block_ncmaz_core_block_init');


// ENQUEUE FOR BACKEND EDITOR
function ncmaz_core_enqueue_admin_style($hook)
{
	if ($hook !== 'post.php') {
		return;
	}
	wp_enqueue_style('glide-core', plugins_url('public/css/glide.core.min.css', __FILE__), [], '3.5.0', 'all');
}
add_action('admin_enqueue_scripts', 'ncmaz_core_enqueue_admin_style');

// 
//  ======================= wp_enqueue_script ===========================
function ncmazcorePluginEnqueueScript()
{
	wp_enqueue_script(
		'ncmazcore-customizer-script',
		plugins_url('public/js/customizer.js', __FILE__),
		[],
		'',
		false
	);
	wp_localize_script(
		'ncmazcore-customizer-script',
		'ncmazcoreJsData',
		array(
			'ajaxurl'               => admin_url('admin-ajax.php'),
			'restUrl'               => get_rest_url(),
			'graphQLBasePath'       => get_site_url(null, '/graphql'),
			'img_empty_png' => plugins_url('public/images/empty.png', __FILE__),
			'img_musicWave_png' => plugins_url('public/images/musicWave.png', __FILE__),
			'homeURL'               => get_site_url(),
		)
	);
}
