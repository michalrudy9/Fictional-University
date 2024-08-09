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
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

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
define( 'AUTH_KEY',          'KIkynNgFc9#/0/szF13z]yW$Y`V?41]09a|#1!8wg)DGu[+[H|+V /i=}V%.>;A;' );
define( 'SECURE_AUTH_KEY',   ')>U0xyo{U=gHy/z>5O;iavqK$8r+B;^N[AMloL;7u)`6iH{_Q,Ca;&3K7x{&Q.+p' );
define( 'LOGGED_IN_KEY',     ';Uw4?6Qc}_U3T#_oW}wuvbe3t.Xm`xIg]^C;4rt2BB+W9kc,4 V0+)gy$Z1xSxWp' );
define( 'NONCE_KEY',         'vNHC0uH[.d^Ov+[x) 8vT%v^5dQ3z4XhFvv9hO:x+Yp:HZq?C);F{&DY@j&31QSC' );
define( 'AUTH_SALT',         '4glGG,s452tv9N_U7uLQj= ADuJ;[f5OC/;1zu#e<6$e|K(-enR1n}?[<|e8R9q2' );
define( 'SECURE_AUTH_SALT',  'k.kt?n!{N0go$iKfFD%DHR7R,)nh&ny#)w5i[5R|E?H8}Ja=SQv+MX<mKKzSJVRE' );
define( 'LOGGED_IN_SALT',    'Z:2tZLt`temR:^ej@:kje]6PV)iST$0SE}ZeDwLUGa?;Y6G),?$pJVj-W}1H;lLN' );
define( 'NONCE_SALT',        '&4[~ICq}pj.i`JM;-v~iGD&0~Vq7$/za3A]H_oB5{{SKxi( [w2.b:u@o; AxG1:' );
define( 'WP_CACHE_KEY_SALT', 'BIwWho&$Y$RL[uJIB|MNkm<~hXzEOHRKSI~Lm]6=I!nsak~|@<bd)F/4x}fD?@ER' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
