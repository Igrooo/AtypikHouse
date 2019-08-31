// jQuery scripts for UI

$(function() {
    console.log( "ready!" );

    function switchTheme(){
      console.log( "click!" );
      $("body.ah-theme-dark").removeClass("ah-theme-dark").addClass("ah-theme-light");
      $("body.ah-theme-light").removeClass("ah-theme-light").addClass("ah-theme-dark");
    }
    
    $("#swith-theme").click(function() {
      switchTheme();
    });
});