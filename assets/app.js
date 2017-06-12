$( document ).ready(function() {


//BART API CODE

	//can change from xml to json output by adding &json=y to end of query URL

	// BART API key: ZVZV-PH5D-9W3T-DWE9

	//API call for list of stations: http://api.bart.gov/api/stn.aspx?cmd=stns&key=ZVZV-PH5D-9W3T-DWE9&json=y

		//loop through stations and push "name" and "abbr" to a arrays for user dropdown lists
			//append name array to ids: current-station & destination
			//"abbr" array is needed for API calls for train info

	// service advisory API http://api.bart.gov/api/bsa.aspx?cmd=bsa&key=ZVZV-PH5D-9W3T-DWE9&date=today&json=y
		//determine how to tell if there is not a service advisory so that nothing will display
	
	// estimated time of departure: http://api.bart.gov/docs/etd/etd.aspx
	//departure info http://api.bart.gov/api/etd.aspx?cmd=etd&orig=+currentStation+&key=ZVZV-PH5D-9W3T-DWE9&json=y
		//destination (final dest of train)


















// MEDIUM API CODE



	
























});