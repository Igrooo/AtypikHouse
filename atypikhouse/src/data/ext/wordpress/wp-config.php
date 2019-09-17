<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'ah_modules' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost:3306' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'PB-JSLvSUF_=[<%&Ssh%W:.RQ$G[#~lC9S_78^) zIsCG4Lxp*JS8yt4UDgdxu4k' );
define( 'SECURE_AUTH_KEY',  'az#rM%aS-25;CpXU<pUt@>H<D1BE>xA^2:fvM(2f2jhJ^=:#=EKZL<_C<=L]fzo;' );
define( 'LOGGED_IN_KEY',    'N+[es:;E*IhuTELBzbnA$nr2[j_#|DfW8KgtW,gG%rO_x,PNVk-Rt+.`duQpY4Ml' );
define( 'NONCE_KEY',        'e#X+vTi~C5pV6u|;:PBk6YC;NEQ#@uKv$o#A.dtDpC5nx%*Q}8c8aJ};ir43)iMm' );
define( 'AUTH_SALT',        'sRGg6V$(|Vy#C5&<,a?,+tn!Gb}DK<K9J[I*VLi`8CJMa(/w^br0t8Z,u5@Se4,y' );
define( 'SECURE_AUTH_SALT', '*ztIJ]Q?2wP%[)m-ud_yqEC2>PMv gHl;ec7x!TG,@fdaA&]b??30~(I(coDiZ| ' );
define( 'LOGGED_IN_SALT',   '<;Jzsn@jk{c9@xYtp$^Il#-@ChZo?**(~nu>$d(o.:}wAv9QuW7oXH-UzaQ21Iin' );
define( 'NONCE_SALT',       '%%qa|wZ[*^y#;E;5(LK8k_v4d.pcfQA*`(eLFQ4[?Qgs%Wfy  a`^Q #@H:CLHol' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'ah_wordpress_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
