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

// Load external data
if($("#app-ext-data")){
  setTimeout(function() {
    var datasrc  = $('#app-ext-data').attr('data-src');
    var datafile = $('#app-ext-data').attr('data-list');
    var datatype = $('#app-ext-data').attr('data-type');

    console.log('get '+datafile);

    var datapage = window.location.pathname;

    $.ajax({
      dataType: datatype,
      url: datafile,
      type: "GET",
      data: { get_param: datapage },
      success: function (data) {
        $.each(data, function (index, data) {
          if("/"+index === datapage){
            var datasource = datasrc+data+datapage;
            console.log('load '+datapage+' of '+data);
            $( "#app-ext-data" ).load( datasource+" #ah-ext-content" );
          }
      })
      },
      error: function (xhr, error) {
        console.log('error load '+datafile, xhr, error);
      }
    });
  }, 2000);
}
