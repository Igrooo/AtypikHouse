// AtypikHouse Icons
$(function() {
    var iconsSet    = 'assets/icons/travel-set/';
    var iconsType   = 'svg';
    var backgFolder = 'assets/img/bg/';
    $('.ah-icon').each(function() {
        var icon  = $(this).attr('data-icon'); 
        var group = $(this).attr('data-group');
        var color = $(this).attr('data-color');
        var backg = $(this).attr('data-backg');
        if(backg != undefined && backg.length != 0){
            $(this).css('background-image', 'url('+backgFolder+backg+'.png)');
        }
        if(color != undefined && color.length != 0){
            $(this).css('background-color', color);
        }
        else{
            $(this).addClass('icon-without-color');
        }
        $(this).append('<img class="ah-icon-asset" src="'+iconsSet+group+'/'+icon+'.'+iconsType+'" alt="'+icon+'">');
    });
    $('ah-tag').each(function() {
        var icon  = $(this).attr('data-icon'); 
        var group = $(this).attr('data-group');
        var color = $(this).attr('data-color');
        if(color != undefined && color.length != 0){
            $(this).css('background-color', color);
            $(this).addClass('tag-with-color');
        }
        //(this).append('<img class="ah-icon-asset" src="'+iconsSet+group+'/'+icon+'.'+iconsType+'" alt="'+icon+'">');
    });
});