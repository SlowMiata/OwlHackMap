function toggleDiv(divid)
  {
 
    varon = divid + 'on';
    varoff = divid + 'off';
 
    if(document.getElementById(varon).style.display == 'block')
    {
    document.getElementById(varon).style.display = 'none';
    document.getElementById(varoff).style.display = 'block';
    }
   
    else
    {  
    document.getElementById(varoff).style.display = 'none';
    document.getElementById(varon).style.display = 'block'
    }
} 

// function lonlat() {
	
// 	var input = document.getElementById('zip');	
// 	var lonlat = document.getElementById('lonlat');
	
// 	if (event.keyCode === 13 && input.value.length === 5) {

// 		var zipCode = input.value;

// 		var xhr = $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + zipCode + '&key=AIzaSyDVPLLlJAQ679Frd0gu11khJ9mW02wsvWQ');

// 		xhr.done(function(data) {
// 			lonlat.innerHTML = 'Latitude = ' + data.results[0].geometry.location.lat + ' ' + '<br>Longitude = ' + data.results[0].geometry.location.lng;
// 		});

// 	} 
//}




