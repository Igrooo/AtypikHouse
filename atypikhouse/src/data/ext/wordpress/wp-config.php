<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ah_modules' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost:3308' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '0m62;0wx&(?uC}6el>1kJvvtMlM}lrfOsN{k?16:D8/*X-srTlBgWH{5gKfhh:n^' );
define( 'SECURE_AUTH_KEY',  'Ar{<M8/1jDtyu%$rSxf^@L$Rwbl]z3l.6S_Qf(cX]nlCT:K@{9!hJXe,C)3DQPnX' );
define( 'LOGGED_IN_KEY',    '<rLNPClQ=qFT`lX$BPF+bjMletJwTr.(]ng0xI9Yx]/G}Cq*eKBC2N`3g[Xi(mrd' );
define( 'NONCE_KEY',        'E5hH?ln,XIU KVy EyZN dvQ>!8Fd{KEU},8(DEXs0Eh&A)C=bbMoHXE`%@H<wG$' );
define( 'AUTH_SALT',        'M3S,N!,}kuDlF$r$&wPS:|O,pz@##8**2e6?UwL1wM7dId(~cau1qW@v(a`i&e5)' );
define( 'SECURE_AUTH_SALT', 'GB&;[vz+kd=3KOQ$t>_ik5Xv&u}g$q _|c!D<P!BE{s5}0).>r$=7pmu-G|D?a{7' );
define( 'LOGGED_IN_SALT',   'cO[Nr&t4;t.w%h+L3*?d+?FE*S5 [nh*h#iNwGAma`ZxfT~jSM1DRyA..5$wj(-o' );
define( 'NONCE_SALT',       '^#Y0}EEWPr1~$ =2e%}]r(D6&?j#?*7ExQmT(0yP0[gH1sQ+c8_~P9HGaan=[AcT' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ah_wordpress_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
