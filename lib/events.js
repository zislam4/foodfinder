es = new Array();

function parseEvents() {
	// If request is succesful with correct status
	if (request.readyState == 4 && request.status == 200) {
		console.log("Got the request!\n");
		converted = JSON.parse(request.responseText);
		for (i = 0; i < converted.length; i++) {
			var e = {
				title     : converted[i]['title'   ],
				start     : converted[i]['start'   ],
				end       : converted[i]['end'     ],
				location  : converted[i]['location'],
				posting   : converted[i]['posting' ]
			};
			es.push(e);
		}
	}
	console.log(es);
	return es;
}

function getEvents() {
	// Step 1 - create instance of object
	// If I prepend var to request, this will no longer work
	// request becomes a local var, so parseData() gets very confused.
	request = new XMLHttpRequest();

	// Step 2 - create or "open" HTTP request
	request.open("GET", "events.json", true);

	// Step 3 - Set up way to manage response (with a function)
	request.onreadystatechange = parseEvents;

	// Step 4 - Execute the request
	request.send();
}
