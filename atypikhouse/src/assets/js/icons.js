// AtypikHouse Icons
$(function() {
    var iconsSet    = '';
    var iconsType   = 'svg';
    var backgFolder = '';

    $('.ah-icon').each(function() {
        var icon = $(this);
        var iconName = icon.attr('data-icon'); 
        var group = icon.attr('data-group');
        var color = icon.attr('data-color');
        var backg = icon.attr('data-backg');
        if(backg != undefined && backg.length != 0){
            icon.css('background-image', 'url('+backgFolder+backg+'.png)');
        }
        else{
            icon.addClass('icon-without-backg');
        }
        if(color != undefined && color.length != 0){
            icon.css('background-color', color);
        }else{
            icon.addClass('icon-without-color');
        }
        var title  = icon.attr('data-title');
        if(title != undefined && title.length != 0){
            title = '<span class="icon-title">'+title+'</span>';
        }
        else{
            title = '';
        }
        if(icon.hasClass('icon-card')){
            var text   = icon.attr('data-text');
            var marker = icon.attr('data-marker');
            if(text != undefined && text.length != 0){
                text = '<p class="ah-card-text ah-tiny">'+text+'</p>';
            }else{
                text = '';
            }
            if(marker != undefined && marker.length != 0){
                marker = '<p class="ah-card-marker">'+marker+'</p>';
            }else{
                marker = '';
            }
            icon.append('<img class="ah-icon-asset" src="'+iconsSet+group+'/'+iconName+'.'+iconsType+'" alt="'+iconName+'"><div class="ah-card-content"><p class="ah-card-title ah-title ah-subtitle-h6">'+title+'</p>'+text+marker+'</div>');
        }
        else{
            icon.append('<img class="ah-icon-asset" src="'+iconsSet+group+'/'+iconName+'.'+iconsType+'" alt="'+iconName+'">'+title);
        }
    });

    $('.ah-tag').each(function() {
        var tag = $(this);
        var color = tag.attr('data-color');
        if(color != undefined && color.length != 0){
            tag.css('background-color', color);
            tag.addClass('tag-with-color');
        }
    });
});