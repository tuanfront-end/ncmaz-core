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

function gutenberg_dynamic_render_callback_abc($block_attributes, $content)
{
	$uid = uniqid('ncmaz_core__');
	ob_start();
?>

	<div data-nc-gutenberg-id="<?php echo esc_attr($uid); ?>">
		<!-- FRONTEND WILL JSON PARSER THIS VARIABLE FOR REACT RENDER -->
		<!-- MAKE A API HERE! -->
		<script>
			window.ncGutenbergSections = {
				...(window.ncGutenbergSections || []),
				[String("<?php echo esc_attr($uid); ?>")]: <?php echo (json_encode($block_attributes)); ?>
			}
		</script>
		<h2 class="text-4xl">THIS IS BLOCK !!</h2>
	</div>

<?php
	$content = ob_get_contents();
	ob_end_clean();
	return $content;
}

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
// 
// 
add_action('acf/save_post', 'my_acf_save_post');
function my_acf_save_post($post_id)
{
	// Get newly saved values.
	$m = fm_estimated_reading_time();
	// $m = strlen(the_content() || "") / 200;
	update_field('reading_time', $m, $post_id);
}

// UPDATE VIEW COUNT

function my_acf_prepare_field($field)
{
	$field['readonly'] = true;
	return $field;
}

// Apply to fields named "example_field".
add_filter('acf/prepare_field/name=views_count', 'my_acf_prepare_field');
add_filter('acf/prepare_field/name=favorite_button', 'my_acf_prepare_field');
add_filter('acf/prepare_field/name=reading_time', 'my_acf_prepare_field');

function yourprefix_add_to_content($content)
{
	if (!is_single()) return;

	if (is_single()) {

		var_dump(fm_estimated_reading_time());
		die;
		// Get the current value.
		$count = (int) get_field('views_count', the_ID());

		// Increase it.
		$count++;

		// Update with new value.
		update_field('views_count', $count, the_ID());
	}
}
add_filter('the_content', 'yourprefix_add_to_content');



function fm_estimated_reading_time()
{

	// load the content
	// $thecontent = $post->post_content;
	$thecontent = get_the_content();
	// count the number of words
	$words = str_word_count(strip_tags($thecontent));
	// rounding off and deviding per 200 words per minute
	$m = floor($words / 200);
	// rounding off to get the seconds
	$s = floor($words % 200 / (200 / 60));
	// calculate the amount of time needed to read
	$estimate = $m . ' minute' . ($m == 1 ? '' : 's') . ', ' . $s . ' second' . ($s == 1 ? '' : 's');
	// create output
	var_dump($words);
	$output = '<p>Estimated reading time: ' . $estimate . '</p>';
	// return the estimate
	return $output;
	return $m || 11;
}
