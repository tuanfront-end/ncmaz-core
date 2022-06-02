<?php

/**
 * Plugin Name:       Ncmaz Core
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           2.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ncmaz-core
 *
 * @package           create-block
 */

if (!defined('_NCMAZ_CORE_VERSION')) {
	define('_NCMAZ_CORE_VERSION', '2.1.0');
}


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
	// 
	wp_register_style('ncmaz-core-style', plugins_url('public/css/styles.css', __FILE__), [], _NCMAZ_CORE_VERSION, 'all');
	wp_enqueue_style('ncmaz-core-style');
	// 
	wp_register_style('Line_Awesome', 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css');
	wp_enqueue_style('Line_Awesome');
}
add_action('admin_enqueue_scripts', 'ncmaz_core_enqueue_admin_style');

// 
//  ======================= wp_enqueue_script ===========================
function ncmazcorePluginEnqueueScript()
{
	global $ncmaz_redux_demo;

	wp_enqueue_script(
		'ncmazcore-customizer-script',
		plugins_url('public/js/customizer.js', __FILE__),
		[],
		'',
		false
	);

	wp_add_inline_script('ncmazcore-customizer-script', 'window.ncmazcoreJsData = ' . json_encode(
		[
			'ajaxurl'               	=> admin_url('admin-ajax.php'),
			'restUrl'               	=> get_rest_url(),
			'graphQLBasePath'       	=> get_site_url(null, '/graphql'),
			'img_empty_png' 			=> plugins_url('public/images/empty.png', __FILE__),
			'img_musicWave_png' 		=> plugins_url('public/images/musicWave.png', __FILE__),
			'homeURL'               	=> get_site_url(),
			'pll_current_language'		=> function_exists('pll_current_language') ? strtoupper(pll_current_language()) : null,
			'pll_themeoption_actived'     => boolval($ncmaz_redux_demo['nc-general-settings--general-switch-polylang']) ? 'true' : null,
		]
	), 'before');
}
