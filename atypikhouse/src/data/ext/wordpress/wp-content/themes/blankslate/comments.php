<div id="ah-ext-comments">
<?php
if ( have_comments() ) :
global $comments_by_type;
$comments_by_type = separate_comments( $comments );
if ( ! empty( $comments_by_type['comment'] ) ) :
?>
<section id="ah-ext-comments-list" class="ah-ext-comments">
<h3 class="ah-ext-comments-title"><?php comments_number(); ?></h3>
<?php if ( get_comment_pages_count() > 1 ) : ?>
<nav id="ah-ext-comments-nav-above" class="ah-ext-comments-navigation" role="navigation">
<div class="ah-ext-paginated-comments-links"><?php paginate_comments_links(); ?></div>
</nav>
<?php endif; ?>
<ul>
<?php wp_list_comments( 'type=comment' ); ?>
</ul>
<?php if ( get_comment_pages_count() > 1 ) : ?>
<nav id="ah-ext-comments-nav-below" class="ah-ext-comments-navigation" role="navigation">
<div class="ah-ext-paginated-comments-links"><?php paginate_comments_links(); ?></div>
</nav>
<?php endif; ?>
</section>
<?php
endif;
if ( ! empty( $comments_by_type['pings'] ) ) :
$ping_count = count( $comments_by_type['pings'] );
?>
<section id="ah-ext-trackbacks-list" class="ah-ext-comments">
<h3 class="ah-ext-comments-title"><?php echo '<span class="ah-ext-ping-count">' . esc_html( $ping_count ) . '</span> ' . esc_html( _nx( 'Trackback or Pingback', 'Trackbacks and Pingbacks', $ping_count, 'comments count', 'blankslate' ) ); ?></h3>
<ul>
<?php wp_list_comments( 'type=pings&callback=blankslate_custom_pings' ); ?>
</ul>
</section>
<?php
endif;
endif;
if ( comments_open() ) { comment_form(); }
?>
</div>