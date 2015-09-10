var map;
var markers = [];

!function initMap() {

	  //default map location.
	  var myLatlng = {lat: 25.0854061, lng: 121.5615012};

	  map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: myLatlng //地圖預設中心點
	  });  

	  /*
	  map.addListener('center_changed', function() {
		// 3 seconds after the center of the map has changed, pan back to the
		// marker.3秒後移回marker中心
		setTimeout(function() {
		  map.panTo(marker.getPosition());
		}, 3000);
	  });
		*/
	/*	
	  marker.addListener('click', function() {
		map.setZoom(8);
		map.setCenter(marker.getPosition());
	  });
	*/
	
	}();