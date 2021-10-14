var TeslaAPI = require('./tesla-api.js');

require('dotenv').config();

async function main() {
	
	var options = {
		refreshToken: process.env.TESLA_API_REFRESH_TOKEN,
		vin: process.env.TESLA_API_VIN,
		debug:true
	};

	var tapi = new TeslaAPI(options);

	var data = await tapi.post('command/door_lock');
	var data = await tapi.post('command/door_lock');

//	var data = await tapi.get('vehicle_data');
	console.log(data);
}

main();