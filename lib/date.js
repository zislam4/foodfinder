// Uses JS Date() Object to get today's date
function date() {
	// http://www.java2s.com/Code/JavaScript/Development/Displaydatedaymonthyearinstring.htm
	var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday",
                            "Friday","Saturday");
	var montharray=new Array("January","February","March","April","May","June",
                            "July","August","September","October","November","December");
	var d = new Date();
	var date = dayarray[d.getDay()] + ",<br>" + montharray[d.getMonth()] + " "
			   + d.getDate() + ", " + d.getFullYear();
	return date;
}