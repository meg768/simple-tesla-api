var TeslaAPI = require('./tesla-api.js');

require('dotenv').config();

async function main() {
	
	var options = {
		token: process.env.TESLA_API_TOKEN,
		vin: process.env.TESLA_API_VIN
	};

	var tapi = new TeslaAPI(options);

	var data = await tapi.command('door_lock');
	console.log(data);
}

main();