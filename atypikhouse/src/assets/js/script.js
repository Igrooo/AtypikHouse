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

setTimeout(function() {
// Load external data
if($('#app-ext-data').length){
    var datasrc  = $('#app-ext-data').attr('data-src');
    var datafile = $('#app-ext-data').attr('data-list');
    var datatype = $('#app-ext-data').attr('data-type');

    console.log('get '+datafile);

    var datapage = window.location.pathname;

    $.ajax({
      dataType: datatype,
      url: datafile,
      type: 'GET',
      data: { get_param: datapage },
      success: function (data) {
        $.each(data, function (index, data) {
          if('/'+index === datapage){
            var datasource = datasrc+data+datapage;
            console.log('load '+datapage+' of '+data);
            $( '#app-ext-data' ).load( datasource+' #ah-ext-content' );
            $( '.ah-container-main' ).removeClass('ah-loading');
          }
        })
      },
      error: function (xhr, error) {
        console.log('error load '+datafile, xhr, error);
      }
    });
  }else{
    $( '.ah-container-main' ).removeClass('ah-loading');
  }
}, 2000);
