var TeslaAPI = require('../tesla-api.js');

require('dotenv').config();

async function main() {
	
	var options = {
		token: process.env.TESLA_API_REFRESH_TOKEN,
		vin: process.env.TESLA_API_VIN,
		debug:true
	};

	var tapi = new TeslaAPI(options);
	console.log(await tapi.post('command/door_lock'));
}

main();