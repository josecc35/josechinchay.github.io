function iniciarMap(){
  var coord = {lat:-12.064260, lng:   -77.041793};  
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 18,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}