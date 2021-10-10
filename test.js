var TeslaAPI = require('./tesla-api.js');

async function main() {
	var options = {
		token: "eu-aa5af109af59bc5f085325147f28bd08a7787cc2fa33e295bc8344093000e02f1",
		vin: "5YJ3E7EB3MF953648"
	};
	var tapi = new TeslaAPI(options);


	await tapi.connect();

	var data = await tapi.command('door_lock');
	//var data = await tapi.get('vehicle_data');
	console.log(data);
}

main();