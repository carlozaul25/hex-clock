	var date, hour, minutes, seconds, color;
function displayTime() {
	date = new Date(); 
	hours = date.getHours();
	minutes = date.getMinutes();
	seconds = date.getSeconds();
	
	if(hours <= 9) hours = '0'+ hours;
	if(minutes <= 9) minutes = '0'+ minutes;
	if(seconds <= 9) seconds = '0'+ seconds;
	
	color = "#"+hours+minutes+seconds;
	
	document.body.style.background = color;
	
	document.getElementById("hex-clock").innerHTML = color;
	
	
	setTimeout(displayTime, 300);

	if(hours === 8 && minutes === 10) {
		document.body.style.backgroundImage = "url('morning.png')";
	} else if (hours ===12 && minutes === 30 ) {
		document.body.style.backgroundImage = "url('afternoon.png')";
	}else if( hours === 6 && minutes === 30) {
		document.body.style.backgroundImage = "url('night.png')";
	}else {
		console.log('not working')
	}

}


displayTime();