<?php
/*
    PHP for external modules & website

    Need configure alias on server for each module: 
    by exemple :
    domain.com/blog > redirect to > domain.com/src/ext/index.phph?module=wordpress
    
    Create your folder in ext & get ?module=
    
    // go to index.php (need a index.php on your folder)
*/

$ext = $_GET['module'];

if($ext) {
    include("$ext/index.php");
}
else{
    echo 'Need GET ?module=';
}
?>