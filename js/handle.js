//District selection event handler.
var activeDistrictElem = null;

$(".nav.navbar-nav").click(function(e){ 
	
	//remove previous active district element.
	if(activeDistrictElem !== null)
		$(activeDistrictElem).removeClass("active");
	
	//activate current clicked element and store the old element.	
	$(e.target).parent().addClass("active");
	activeDistrictElem = $(e.target).parent();
	
	//call list function.
	list($(e.target).parent().data('district'));
	
	//for test.
	console.log($(e.target).html() + 'is clicked.');
	
	});
	
//list all bank information in given district.	
function list(district){
	
	//clear the previous results.
	$(".nav.nav-sidebar").empty();
	
	//show guide or bank information.
	if(district === 'Guide')
		$(".nav.nav-sidebar").append(
			$("<li><a href='#'>"+ bankInfo[district][0].desc +"</a></li>")
		  );
	else{	
	//fetch bank info.
	for(var i = 0; i < bankInfo[district].length; i++)
		$(".nav.nav-sidebar").append(
		$("<li data-index="+ bankInfo[district][i].index +"><a href='#'>"+ bankInfo[district][i].name +"<br >"+
								bankInfo[district][i].address+"<br >"+
								"tel : "+ bankInfo[district][i].tel+"<br >"+
								"fax : "+ bankInfo[district][i].fax+"<br >"+
		"</a></li>")
		);
	
	addPanTo(district);	
	
	}
	
}	

function addPanTo(district){

	$(".nav.nav-sidebar li").hover(
	
	function(e){
	
		$(e.target).parent().addClass('active');
		
		//remove all markers on the map.
		for (var i = 0; i < markers.length; i++)
			markers[i].setMap(null);
		
		//fetch bank location(lat, lng).
		var lat = bankInfo[district][parseInt($(e.target).parent().data('index'))].lat;
		var lng = bankInfo[district][parseInt($(e.target).parent().data('index'))].lng;
		
		
		//create marker for each selected bank.
		var marker = new google.maps.Marker({
			position: {lat: lat, lng: lng},
			map: map,
			animation: google.maps.Animation.DROP,
			title: bankInfo[district][parseInt($(e.target).parent().data('index'))].name
		});
		
		//show currently selected marker.
		marker.setMap(map);
		
		//add new marker into array(markers).
		markers.push(marker);
			
		//pan to.
		map.panTo({lat: lat, lng: lng});
		map.setZoom(16);
	},
	function(e){
	
		$(e.target).parent().removeClass('active');
	
	});
	
}
	