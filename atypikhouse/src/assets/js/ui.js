// jQuery scripts for UI

  function UIswitchTheme(){
    if($('body').hasClass('ah-theme-dark')){
      $('meta[name="theme-color"]').attr('content', 'light');
      $('body').removeClass('ah-theme-dark').addClass('ah-theme-light');
    }
    else{
      $('meta[name="theme-color"]').attr('content', 'dark');
      $('body').removeClass('ah-theme-light').addClass('ah-theme-dark');
    }
  }

  function UIswitchSidenav(){
    $('#sidenav').toggleClass('open');
    $('#sidenav-cta').toggleClass('open');
    $('.ah-container-main').toggleClass('sidenav-overlay');
  }
