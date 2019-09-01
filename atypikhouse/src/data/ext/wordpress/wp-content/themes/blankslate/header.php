<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="ah-ext-wrapper" class="ah-ext-hfeed">
<header id="ah-ext-header">
<div id="ah-ext-branding">
<div id="ah-ext-site-title">
<?php if ( is_front_page() || is_home() || is_front_page() && is_home() ) { echo '<h1>'; } ?>
<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_html( get_bloginfo( 'name' ) ); ?>" rel="home"><?php echo esc_html( get_bloginfo( 'name' ) ); ?></a>
<?php if ( is_front_page() || is_home() || is_front_page() && is_home() ) { echo '</h1>'; } ?>
</div>
<div id="ah-ext-site-description"><?php bloginfo( 'description' ); ?></div>
</div>
<nav id="ah-ext-menu">
<div id="ah-ext-search"><?php get_search_form(); ?></div>
<?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
</nav>
</header>
<div id="ah-ext-container">