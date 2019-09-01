<?php get_header(); ?>
<main id="ah-ext-content">
<article id="ah-ext-post-0" class="ah-ext-post not-found">
<header class="ah-ext-header">
<h1 class="ah-ext-entry-title"><?php esc_html_e( 'Not Found', 'blankslate' ); ?></h1>
</header>
<div class="ah-ext-entry-content">
<p><?php esc_html_e( 'Nothing found for the requested page. Try a search instead?', 'blankslate' ); ?></p>
<?php get_search_form(); ?>
</div>
</article>
</main>
<?php get_sidebar(); ?>
<?php get_footer(); ?>