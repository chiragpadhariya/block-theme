<?php
/**
 * This is blocktheme functions file
 *
 * @package WordPress
 */
?>

<?php
require_once 'banner-section/banner-section.php';
require_once 'about/about.php';
require_once 'professional-skills/professional-skills.php';
require_once 'numbar-section/numbar-section.php';
require_once 'logos-section/logos-section.php';
require_once 'service-section/service-section.php';
require_once 'our-work-process/our-work-process.php';
require_once 'about-us-section/about-us-section.php';
require_once 'about-me/about-me.php';
require_once 'about-banner-section/about-banner-section.php';
require_once 'portfolio/portfolio.php';
require_once 'destination/destination.php';
require_once 'numbar-block/numbar-block.php';
require_once 'service-block/service-block.php';
require_once 'project-section/project-section.php';
require_once 'need-a-project/need-a-project.php';
require_once 'about-need-a-project/about-need-a-project.php';
require_once 'contact-info-section/contact-info-section.php';
// require_once 'map-section/map-section.php';
require_once 'destination-slider/destination-slider.php';
if ( ! function_exists( 'my_block_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which runs
	 * before the init hook.
	 */
	function my_block_setup() {
		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		add_editor_style( 'editor-style.css' );
	}
	endif; // blocktheme_setup.
	add_action( 'after_setup_theme', 'my_block_setup' );

	/**
	 * Add theme defaults and registers support for various WordPress features.
	 */
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'html5', array( 'style', 'script' ) );
	add_theme_support( 'automatic-feed-links' );

/**
 * Header menu.
 */
function theme_register_menus() {
	register_nav_menu( 'header-menu', 'Header Menu' );
}
	add_action( ' after_setup_theme ', ' theme_register_menus ' );
/**
 * Bootstrap and jquery add.
 */
function cre8_add_editor_styles() {
	add_theme_support( 'editor - styles' );
	add_editor_style(
		array(
			'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css',
			'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js',
			'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js',
			get_stylesheet_uri(),
			get_template_directory_uri() . 'assets/js/script.js',
		)
	);
}
add_action( 'after_setup_theme', 'cre8_add_editor_styles' );

function remove_react_scripts() {
    if (is_admin()) {
        return;
    }
    wp_dequeue_script('wp-react-blocks');
    wp_dequeue_style('wp-block-library');
}
add_action('wp_enqueue_scripts', 'remove_react_scripts', 100);

/** *Hook into the init action and call */
function piroll_company_assets() {
	// css.
	$theme = wp_get_theme(); $theme_version = $theme->get( 'Version' );
	wp_enqueue_style( 'news_style', get_stylesheet_uri(), array(), $theme_version );
	wp_enqueue_style( 'slider_css', get_template_directory_uri() . '/assets/css/swiper.bandal.css', array(), $theme_version );
	wp_enqueue_style( 'font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css', array(), $theme_version );
	wp_enqueue_style( 'bootstrap_css', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css', array(), $theme_version );
	// js files.
	$script_version = '1.0.0';
	wp_enqueue_script( 'slider_js', get_template_directory_uri() . '/assets/js/swiper.min.js', array(), $script_version, true );
	wp_enqueue_script( 'script', get_template_directory_uri() . '/assets/js/script.js', array(), $script_version, true );
	wp_enqueue_script( 'bootstrap_js', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js', array(), $script_version, true );
	wp_enqueue_script( 'jquery_js', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js', array(), $script_version, true );
}
add_action( 'after_setup_theme', 'piroll_company_assets' );

function piroll_company_assets01() {
	// css.
	$theme = wp_get_theme(); $theme_version = $theme->get( 'Version' );
	wp_enqueue_style( 'news_style', get_stylesheet_uri(), array(), $theme_version );
	wp_enqueue_style( 'slider_css', get_template_directory_uri() . '/assets/css/swiper.bandal.css', array(), $theme_version );
	wp_enqueue_style( 'font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css', array(), $theme_version );
	wp_enqueue_style( 'bootstrap_css', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css', array(), $theme_version );
	// js files.
	$script_version = '1.0.0';
	wp_enqueue_script( 'slider_js', get_template_directory_uri() . '/assets/js/swiper.min.js', array(), $script_version, true );
	wp_enqueue_script( 'script', get_template_directory_uri() . '/assets/js/script.js', array(), $script_version, true );
	wp_enqueue_script( 'bootstrap_js', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js', array(), $script_version, true );
	wp_enqueue_script( 'jquery_js', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js', array(), $script_version, true );
}
add_action( 'wp_enqueue_scripts', 'piroll_company_assets01' );


/** Portfolio post type */
function cw_post_type_portfolio() {
	$supports = array(
		'title', // post title.
		'editor', // post content. (set to true to enable block editor)
		'author', // post author.
		'thumbnail', // featured images.
		'excerpt', // post excerpt.
		'custom-fields', // custom fields.
		'comments', // post comments.
		'revisions', // post revisions.
		'post-formats', // post formats.
	);
	$labels   = array(
		'name'           => _x( 'portfolio', 'plural' ),
		'singular_name'  => _x( 'portfolio', 'singular' ),
		'menu_name'      => _x( 'portfolio', 'admin menu' ),
		'name_admin_bar' => _x( 'portfolio', 'admin bar' ),
		'add_new'        => _x( 'Add New', 'add new' ),
		'add_new_item'   => __( 'Add New portfolio' ),
		'new_item'       => __( 'New portfolio' ),
		'edit_item'      => __( 'Edit portfolio' ),
		'view_item'      => __( 'View portfolio' ),
		'all_items'      => __( 'All portfolio' ),
		'search_items'   => __( 'Search portfolio' ),
		'not_found'      => __( 'No portfolio found.' ),
	);
	$args     = array(
		'supports'            => $supports,
		 'show_in_rest'       => true, // Required for block editor support.
		'labels'              => $labels,
		'public'              => true,
		'query_var'           => true,
		'rewrite'             => array( 'slug' => 'portfolio' ),
		'has_archive'         => true,
		'hierarchical'        => true,
		'publicly_queryable'  => true,
	);
	register_post_type( 'portfolio', $args );
}
add_action( 'init', 'cw_post_type_portfolio' );



register_block_pattern(
	'my-plugin/powered-by-wordpress',
	array(
		'title'      => __( 'numbar section', 'my-plugin' ),
		'blockTypes' => array( 'core/paragraph', 'core/heading' ),
		'content'    => '
		<!-- wp:group {"className":"numbar","layout":{"type":"constrained"}} -->
		<div class="wp-block-group numbar"><!-- wp:group {"className":"container","layout":{"type":"constrained"}} -->
		<div class="wp-block-group container"><!-- wp:group {"className":"numbar__inner","layout":{"type":"constrained"}} -->
		<div class="wp-block-group numbar__inner"><!-- wp:group {"className":"numbar__inner_deatils","layout":{"type":"constrained"}} -->
		<div class="wp-block-group numbar__inner_deatils"><!-- wp:create-block/numbar-block {"mediaID":30,"mediaURL":"http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service01.png"} -->
		<div class="numbar__inner_box" class="wp-block-create-block-numbar-block"><div class="numbar__inner_box--image"><div class="--autograph"><img src="http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service01.png" alt="Selected Media"/></div></div><div class="numbar__inner_box--detail"><div class="numbar__inner_box--detail-digit"><h2>ghgfh</h2></div><div class="numbar__inner_box--detail-text"><p>fghgh</p></div></div></div>
		<!-- /wp:create-block/numbar-block -->

		<!-- wp:create-block/numbar-block {"mediaID":30,"mediaURL":"http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service01.png"} -->
		<div class="numbar__inner_box" class="wp-block-create-block-numbar-block"><div class="numbar__inner_box--image"><div class="--autograph"><img src="http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service01.png" alt="Selected Media"/></div></div><div class="numbar__inner_box--detail"><div class="numbar__inner_box--detail-digit"><h2>ghfh</h2></div><div class="numbar__inner_box--detail-text"><p>gfhgfh</p></div></div></div>
		<!-- /wp:create-block/numbar-block -->

		<!-- wp:create-block/numbar-block {"mediaID":34,"mediaURL":"http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service05.png"} -->
		<div class="numbar__inner_box" class="wp-block-create-block-numbar-block"><div class="numbar__inner_box--image"><div class="--autograph"><img src="http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service05.png" alt="Selected Media"/></div></div><div class="numbar__inner_box--detail"><div class="numbar__inner_box--detail-digit"><h2>ghfhgf</h2></div><div class="numbar__inner_box--detail-text"><p>gfhgfh</p></div></div></div>
		<!-- /wp:create-block/numbar-block -->

		<!-- wp:create-block/numbar-block {"mediaID":33,"mediaURL":"http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service04.png"} -->
		<div class="numbar__inner_box" class="wp-block-create-block-numbar-block"><div class="numbar__inner_box--image"><div class="--autograph"><img src="http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service04.png" alt="Selected Media"/></div></div><div class="numbar__inner_box--detail"><div class="numbar__inner_box--detail-digit"><h2>fghfgh</h2></div><div class="numbar__inner_box--detail-text"><p>fgh</p></div></div></div>
		<!-- /wp:create-block/numbar-block --></div>
		<!-- /wp:group --></div>
		<!-- /wp:group --></div>
		<!-- /wp:group --></div>
		<!-- /wp:group -->

		',
	)
);


register_block_pattern(
    'my-plugin/service-block',
    array(
        'title'      => __( 'Service Block', 'my-plugin' ),
        'blockTypes' => array( 'core/group' ),
        'content'    => '

<!-- wp:group {"className":"service","layout":{"type":"constrained"}} -->
<div class="wp-block-group service"><!-- wp:group {"className":"container","layout":{"type":"constrained"}} -->
<div class="wp-block-group container"><!-- wp:group {"className":"service__inner","layout":{"type":"constrained"}} -->
<div class="wp-block-group service__inner"><!-- wp:group {"className":"service__inner_box","layout":{"type":"constrained"}} -->
<div class="wp-block-group service__inner_box"><!-- wp:create-block/service-block {"mediaID":30,"mediaURL":"http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service01.png","className":"col-lg-3 col-md-4 col-sm-6"} -->
<div class="wp-block-create-block-service-block col-lg-3 col-md-4 col-sm-6" class="service__inner_box--details"><div class="service__inner_box--details-image"><div class="--autograph"><img src="http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service01.png" alt="Selected Media"/></div></div><div class="service__inner_box--details-title"><h6><strong>UI / UX DESIG</strong></h6></div><div class="service__inner_box--details-details"><p>Be set fourth land god darkness<br>make it wherein own</p></div></div>
<!-- /wp:create-block/service-block -->

<!-- wp:create-block/service-block {"mediaID":31,"mediaURL":"http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service02.png","className":"col-lg-3 col-md-4 col-sm-6"} -->
<div class="wp-block-create-block-service-block col-lg-3 col-md-4 col-sm-6" class="service__inner_box--details"><div class="service__inner_box--details-image"><div class="--autograph"><img src="http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service02.png" alt="Selected Media"/></div></div><div class="service__inner_box--details-title"><h6><strong>WEB DEVELOPMENT</strong></h6></div><div class="service__inner_box--details-details"><p>A she’d them bring void moving<br>third she’d kind fill</p></div></div>
<!-- /wp:create-block/service-block -->

<!-- wp:create-block/service-block {"mediaID":32,"mediaURL":"http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service03.png","className":"col-lg-3 col-md-4 col-sm-6"} -->
<div class="wp-block-create-block-service-block col-lg-3 col-md-4 col-sm-6" class="service__inner_box--details"><div class="service__inner_box--details-image"><div class="--autograph"><img src="http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service03.png" alt="Selected Media"/></div></div><div class="service__inner_box--details-title"><h6><strong>APP / MOBILE</strong></h6></div><div class="service__inner_box--details-details"><p>Dominion man second spirit he,<br>earth they’re creeping</p></div></div>
<!-- /wp:create-block/service-block -->

<!-- wp:create-block/service-block {"mediaID":33,"mediaURL":"http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service04.png","className":"col-lg-3 col-md-4 col-sm-6"} -->
<div class="wp-block-create-block-service-block col-lg-3 col-md-4 col-sm-6" class="service__inner_box--details"><div class="service__inner_box--details-image"><div class="--autograph"><img src="http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service04.png" alt="Selected Media"/></div></div><div class="service__inner_box--details-title"><h6><strong>SEO / MARKETING</strong></h6></div><div class="service__inner_box--details-details"><p>Morning his saying moveth it<br>multiply appear life be</p></div></div>
<!-- /wp:create-block/service-block -->

<!-- wp:create-block/service-block {"mediaID":34,"mediaURL":"http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service05.png","className":"col-lg-3 col-md-4 col-sm-6"} -->
<div class="wp-block-create-block-service-block col-lg-3 col-md-4 col-sm-6" class="service__inner_box--details"><div class="service__inner_box--details-image"><div class="--autograph"><img src="http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service05.png" alt="Selected Media"/></div></div><div class="service__inner_box--details-title"><h6><strong>GAME DESIGN</strong></h6></div><div class="service__inner_box--details-details"><p>Give won’t after land fil creeping<br>meat you, may</p></div></div>
<!-- /wp:create-block/service-block -->

<!-- wp:create-block/service-block {"mediaID":35,"mediaURL":"http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service06.png","className":"col-lg-3 col-md-4 col-sm-6"} -->
<div class="wp-block-create-block-service-block col-lg-3 col-md-4 col-sm-6" class="service__inner_box--details"><div class="service__inner_box--details-image"><div class="--autograph"><img src="http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service06.png" alt="Selected Media"/></div></div><div class="service__inner_box--details-title"><h6><strong>PHOTOGRAPHY</strong></h6></div><div class="service__inner_box--details-details"><p>Creepeth one seas cattle grass<br>give moving saw give</p></div></div>
<!-- /wp:create-block/service-block -->

<!-- wp:create-block/service-block {"mediaID":36,"mediaURL":"http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service07.png","className":"col-lg-3 col-md-4 col-sm-6"} -->
<div class="wp-block-create-block-service-block col-lg-3 col-md-4 col-sm-6" class="service__inner_box--details"><div class="service__inner_box--details-image"><div class="--autograph"><img src="http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service07.png" alt="Selected Media"/></div></div><div class="service__inner_box--details-title"><h6><strong>GRAPHIC DESIGN</strong></h6></div><div class="service__inner_box--details-details"><p>Open, great whales air rule for,<br>fourth life whales</p></div></div>
<!-- /wp:create-block/service-block -->

<!-- wp:create-block/service-block {"mediaID":37,"mediaURL":"http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service08.png","className":"col-lg-3 col-md-4 col-sm-6"} -->
<div class="wp-block-create-block-service-block col-lg-3 col-md-4 col-sm-6" class="service__inner_box--details"><div class="service__inner_box--details-image"><div class="--autograph"><img src="http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service08.png" alt="Selected Media"/></div></div><div class="service__inner_box--details-title"><h6><strong>ILLUSTRATIONS</strong></h6></div><div class="service__inner_box--details-details"><p>Whales likeness hath, man kind<br>for them air two won’t</p></div></div>
<!-- /wp:create-block/service-block -->

<!-- wp:create-block/service-block {"mediaID":38,"mediaURL":"http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service09.png","className":"col-lg-3 col-md-4 col-sm-6"} -->
<div class="wp-block-create-block-service-block col-lg-3 col-md-4 col-sm-6" class="service__inner_box--details"><div class="service__inner_box--details-image"><div class="--autograph"><img src="http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service09.png" alt="Selected Media"/></div></div><div class="service__inner_box--details-title"><h6><strong>BRAND / IDENTITY</strong></h6></div><div class="service__inner_box--details-details"><p>Fly replenish dominion deep given<br>which said these called</p></div></div>
<!-- /wp:create-block/service-block -->

<!-- wp:create-block/service-block {"mediaID":39,"mediaURL":"http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service10.png","className":"col-lg-3 col-md-4 col-sm-6"} -->
<div class="wp-block-create-block-service-block col-lg-3 col-md-4 col-sm-6" class="service__inner_box--details"><div class="service__inner_box--details-image"><div class="--autograph"><img src="http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service10.png" alt="Selected Media"/></div></div><div class="service__inner_box--details-title"><h6><strong>PRINT DESIGN</strong></h6></div><div class="service__inner_box--details-details"><p>Whales likeness hath, man kind<br>for them air two won’t</p></div></div>
<!-- /wp:create-block/service-block -->

<!-- wp:create-block/service-block {"mediaID":40,"mediaURL":"http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service11.png","className":"col-lg-3 col-md-4 col-sm-6"} -->
<div class="wp-block-create-block-service-block col-lg-3 col-md-4 col-sm-6" class="service__inner_box--details"><div class="service__inner_box--details-image"><div class="--autograph"><img src="http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service11.png" alt="Selected Media"/></div></div><div class="service__inner_box--details-title"><h6><strong>E-COMMERCE</strong></h6></div><div class="service__inner_box--details-details"><p>Whales likeness hath, man kind<br>for them air two won’t</p></div></div>
<!-- /wp:create-block/service-block -->

<!-- wp:create-block/service-block {"mediaID":41,"mediaURL":"http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service12.png","className":"col-lg-3 col-md-4 col-sm-6"} -->
<div class="wp-block-create-block-service-block col-lg-3 col-md-4 col-sm-6" class="service__inner_box--details"><div class="service__inner_box--details-image"><div class="--autograph"><img src="http://localhost/piroll-block/wordpress/wp-content/uploads/2023/06/service12.png" alt="Selected Media"/></div></div><div class="service__inner_box--details-title"><h6><strong>SOCIAL MEDIA</strong></h6></div><div class="service__inner_box--details-details"><p>Whales likeness hath, man kind<br>for them air two won’t</p></div></div>
<!-- /wp:create-block/service-block -->

</div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
        ',
    )
);