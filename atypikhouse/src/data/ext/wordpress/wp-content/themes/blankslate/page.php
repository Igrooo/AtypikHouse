<?php get_header(); ?>
<main id="ah-ext-content">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<article id="ah-ext-post-<?php the_ID(); ?>" <?php post_class(); ?>>
<header class="ah-ext-header">
<h1 class="ah-ext-entry-title"><?php the_title(); ?></h1> <?php edit_post_link(); ?>
</header>
<div class="ah-ext-entry-content">
<?php if ( has_post_thumbnail() ) { the_post_thumbnail(); } ?>
<?php the_content(); ?>
<div class="ah-ext-entry-links"><?php wp_link_pages(); ?></div>
</div>
</article>
<?php if ( comments_open() && ! post_password_required() ) { comments_template( '', true ); } ?>
<?php endwhile; endif; ?>
</main>
<?php get_sidebar(); ?>
<?php get_footer(); ?>