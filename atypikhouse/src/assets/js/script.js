// jQuery scripts for UI

function switchTheme(){
  console.log( 'click!' );
  if($('body').hasClass('ah-theme-dark')){
    $('meta[name="theme-color"]').attr('content', 'light');
    $('body').removeClass('ah-theme-dark').addClass('ah-theme-light');
  }
  else{
    $('meta[name="theme-color"]').attr('content', 'dark');
    $('body').removeClass('ah-theme-light').addClass('ah-theme-dark');
  }
}

