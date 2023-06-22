<?php
/**
 * Plugin Name:       Portfolio
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       portfolio
 *
 * @package           portfolio
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function portfolio_portfolio_block_init() {
	register_block_type( __DIR__ . '/build',  array(
		'render_callback' => 'portfolio_render_block',
	) );
}
add_action( 'init', 'portfolio_portfolio_block_init' );

/**
 * Render callback for the portfolio block.
 *
 * @param array $block_attributes The block attributes.
 *
 * @return string The rendered HTML.
 */
function portfolio_render_block( $block_attributes ) {

	$postsToShow = $block_attributes['postsToShow'];
	$args = array(
		'post_type'      => 'portfolio',
		'posts_per_page' => $postsToShow,
	);
	$query = new WP_Query( $args );
	if ( ! $query->have_posts() ) {
		return '<p>No portfolio posts found.</p>';
	}
	$output = '<ul class="portfolio-list">';
	while ( $query->have_posts() ) {
		$query->the_post();
		$post_id             = get_the_ID();
		$post_link           = get_permalink( $post_id );
		$featured_image      = get_the_post_thumbnail_url( $post_id, 'full' );
		$featured_image_alt  = get_post_meta( $post_id, '_wp_attachment_image_alt', true );
		$post_title          = get_the_title();

		$output .= '<li class="portfolio-item">';
		$output .= '<a href="' . esc_url( $post_link ) . '">';
		if ( $featured_image ) {
			$output .= '<img src="' . esc_url( $featured_image ) . '" alt="' . esc_attr( $featured_image_alt ) . '" class="portfolio-image" />';
		}
		// $output .= '<h3 class="portfolio-title">' . esc_html( $post_title ) . '</h3>';
		$output .= '</a>';
		$output .= '</li>';
	}
	$output .= '</ul>';
	wp_reset_postdata();
	return $output;
}