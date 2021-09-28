<?php

/**
 * Plugin Name:       Ncmaz Core
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
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
		register_block_type(__DIR__);
	}
}
add_action('init', 'create_block_ncmaz_core_block_init');

// 


// UPDATE VIEW COUNT
function my_acf_prepare_field($field)
{
	$field['readonly'] = true;
	return $field;
}
add_filter('acf/prepare_field/name=views_count', 'my_acf_prepare_field');

// 
function ncmazcoreUpdateViewsCountOnSinglePage($content)
{
	if (!is_single()) {
		return $content;
	}

	if (is_single()) {
		$count = (int) get_field('views_count');
		$count++;
		update_field('views_count', $count);
	}
	return $content;
}
add_filter('the_content', 'ncmazcoreUpdateViewsCountOnSinglePage');

// 
// 
//  ======================= wp_enqueue_script ===========================
wp_enqueue_script(
	'ncmazcore-customizer-script',
	plugins_url('public/js/customizer.js', __FILE__),
	array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components'),
	'20190804',
	true
);
wp_localize_script(
	'ncmazcore-customizer-script',
	'ncmazcoreJsData',
	array(
		'img_empty_png' => plugins_url('public/images/empty.png', __FILE__),
		'img_musicWave_png' => plugins_url('public/images/musicWave.png', __FILE__)
	)
);
