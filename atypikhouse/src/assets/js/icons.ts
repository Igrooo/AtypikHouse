import * as $ from 'jquery';
// AtypikHouse Icons
export function icons(){
    $(function() {
        setTimeout(function() {
            var iconsType   = 'svg';
            var defaultColor = $('body').css('color');
            var defaultBack  = $('body').css('background-color');
            // Icons & Cards
            $('.ah-icon').each(function() {
                var icon = $(this);
                var iconName = icon.attr('data-icon'); 
                var group = icon.attr('data-group');
                var color = icon.attr('data-color');
                var backg = icon.attr('data-backg');
                var iconsSet    = icon.attr('data-icons-set');
                var backgFolder = icon.attr('data-bg-src')
                switch (iconsSet) {
                    case 'travel':      iconsSet = 'assets/icons/travel-set/'
                        break;
                    default: iconsSet = 'assets/icons/travel-set/'
                }
                switch (backgFolder) {
                    case 'placeholder': backgFolder = 'assets/img/bg/'
                        break;
                    case 'houses':      backgFolder = 'src/data/static/img/houses'
                        break;
                    case 'categories':  backgFolder = 'src/data/static/img/categories'
                        break;
                    case 'themes':      backgFolder = 'src/data/static/img/themes'
                        break;
                    case 'activities':  backgFolder = 'src/data/static/img/activities'
                        break;
                    case 'users':       backgFolder = 'src/data/static/img/users'
                        break;
                    default: backgFolder = 'assets/img/bg/'
                }
                if(backg != undefined && backg.length != 0){
                    $.ajax({
                        url: backgFolder+backg+'.png',
                        type:'HEAD',
                        error: function(){
                            icon.addClass('icon-backg-not-found');
                        },
                        success: function(){
                            if(icon.hasClass('ah-banner')){
                                icon.css('background-image', 'url('+backgFolder+backg+'-banner.png)');
                            }
                            else{
                                icon.css('background-image', 'url('+backgFolder+backg+'.png)');
                            }
                        }
                    });
                }
                else{
                    icon.addClass('icon-without-backg');
                }
                if(color != undefined && color.length != 0){
                    icon.css('background-color', color);
                    icon.css('border-color', color);
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
                        icon.addClass('card-with-text');
                    }else{
                        text = '';
                        icon.addClass('card-without-text');
                    }
                    if(marker != undefined && marker.length != 0){
                        marker = '<p class="ah-card-marker">'+marker+'</p>';
                        icon.addClass('card-with-marker');
                    }else{
                        marker = '';
                        icon.addClass('card-without-marker');
                    }
                    icon.append('<img class="ah-icon-asset" src="'+iconsSet+group+'/'+iconName+'.'+iconsType+'" alt="'+iconName+'"><div class="ah-card-content"><p class="ah-card-title">'+title+'</p>'+text+'</div>'+marker);
                }
                else{
                    icon.append('<img class="ah-icon-asset" src="'+iconsSet+group+'/'+iconName+'.'+iconsType+'" alt="'+iconName+'">'+title);
                }
            });
            // Markers on cards
            $('.icon-card:not(.icon-without-color):not(.card-without-marker)').each(function() {
                var card = $(this);
                var color = card.attr('data-color');
                card.find('.ah-card-marker').css('background-color', color);
            });
    
            // Tags
            $('.ah-tag').each(function() {
                var tag = $(this);
                var color = tag.attr('data-color');
                if(color != undefined && color.length != 0){
                    tag.css('background-color', color);
                    tag.addClass('tag-with-color');
                }
            });
        }, 500);
    });
}
