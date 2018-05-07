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

	if (hours===16 && minutes == 12 ){
		document.body.style.backgroundColor = 'red';
}else {
	console.log('its wrong')
}
}
		
			


displayTime();