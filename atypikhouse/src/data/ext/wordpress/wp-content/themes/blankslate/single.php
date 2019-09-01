<?php get_header(); ?>
<main id="ah-ext-content">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<?php get_template_part( 'entry' ); ?>
<?php if ( comments_open() && ! post_password_required() ) { comments_template( '', true ); } ?>
<?php endwhile; endif; ?>
<footer class="ah-ext-footer">
<?php get_template_part( 'nav', 'below-single' ); ?>
</footer>
</main>
<?php get_sidebar(); ?>
<?php get_footer(); ?>