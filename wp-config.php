<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'piroll-block' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'w ylUj^q@rdH|2~HWts3dMd26;-GHk#!OFA9}n29q_.V#([_.v(,689Sowe1`D8M' );
define( 'SECURE_AUTH_KEY',  'APnUeTQl!y;D#Os;dhwH!iEXGR{u@pF$bLb>qdr-@,r9X%=`aqw5>W2;b&ZO,^TM' );
define( 'LOGGED_IN_KEY',    'Objpsb^#KM@B}&pB`hOXG>oiKX|pIk9t 2Hq-55e}OD-mI}prK*tsl!q%Q|)i|+j' );
define( 'NONCE_KEY',        '#9vnXkg-GhpqVP{S>$3W!X*zwTa-`EQscym8X52x:FatmWI?./)W8eAVY0x-C9K0' );
define( 'AUTH_SALT',        '<dD|aQ?8bFVko~h1-&enK bce$: qe+LZu--In%CWj`J-dpG;,}Rd8+6Q,(^D>n.' );
define( 'SECURE_AUTH_SALT', 'E%.zS2l=k~:r{)3mdD11_b*3|IaG(muAB|9x9C^Ed=~!n[Akhtv{sVG2a&_Gzvp8' );
define( 'LOGGED_IN_SALT',   'Fn_[XVC24v%x)MeLoap)L07# YkD]S?TB%cIl4hHmkq&DYpWRLL.zXcx<nGv#[ii' );
define( 'NONCE_SALT',       'PRjizb-@gwAcl!P|9_C]sN61uRm,/rHZsmN6B.4DbMKdskt!0 T=p@s4l+j0l{=v' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
