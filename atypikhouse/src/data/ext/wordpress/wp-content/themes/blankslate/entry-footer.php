<footer class="ah-ext-entry-footer">
<span class="ah-ext-cat-links"><?php esc_html_e( 'Categories: ', 'blankslate' ); ?><?php the_category( ', ' ); ?></span>
<span class="ah-ext-tag-links"><?php the_tags(); ?></span>
<?php if ( comments_open() ) { echo '<span class="ah-ext-meta-sep">|</span> <span class="ah-ext-comments-link"><a href="' . esc_url( get_comments_link() ) . '">' . sprintf( esc_html__( 'Comments', 'blankslate' ) ) . '</a></span>'; } ?>
</footer> 