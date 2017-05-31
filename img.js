$(document).ready(function() {


     // the AJAX part
    
    function displayPhotos(data) {
      var photoHTML;
      $.each(data.items,function(i,photo) {
        photoHTML += '<p><img src="' + photo.url + '></p><br />' + '<span>' + photo.description + '</span>';
      }); // end each
      
      $('#photos').html(photoHTML);
    }
    $.getJSON("mscphotos.json", displayPhotos);
    
    

  

}); // end ready
