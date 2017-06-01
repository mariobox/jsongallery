$(document).ready(function() {


     // the AJAX part
    
    function displayPhotos(data) {
      var photoHTML = "";
      $.each(data.items,function(i,photo) {
        photoHTML += '<div class="picbox"><figure><img src="' + photo.url + '" class="frame"><figcaption>' + photo.description + '</figcaption></figure></div>';
      }); // end each
      
      $('#photos').html(photoHTML);
    };

    $.getJSON("mscphotos.json", displayPhotos);
    
    

  

}); // end ready


