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
