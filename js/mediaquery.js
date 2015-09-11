//if the device is small, adjust layout.
	
$(window).resize(function(){

	console.log("window size changed to: "+ $(window).width());
	var deviceWidth = $(window).width();

	if(deviceWidth < 768){

		$("#district").removeClass("main");
		$("#infoList").removeClass("sidebar");
		$("#mapArea").removeClass("main");
		//console.log(deviceWidth);
		}
});