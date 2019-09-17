// jQuery scripts for DATA
$(function() {
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
});