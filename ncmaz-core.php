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


/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */

function create_block_ncmaz_core_block_init()
{
	register_block_type(__DIR__);
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
function ncmazUpdateViewsCountOnSinglePage($content)
{
	if (!is_single()) {
		return;
	}

	if (is_single()) {
		// Get the current value.
		$count = (int) get_field('views_count');
		// Increase it.
		$count++;
		// Update with new value.
		update_field('views_count', $count);
	}
}
// add_filter('the_content', 'ncmazUpdateViewsCountOnSinglePage');
