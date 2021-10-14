# Simple Tesla API

This is a minimal API for Tesla vehicles. The actual API is not included here. 
Instead, this module supports authentication so you don´t have to
worry about it. It also handles the renewal of access tokens.

Simply provide a Tesla "refresh token" and this
module lets you send GET and POST request to access your vehicle.

## Installation

````bash
npm install simple-tesla-api --save
````


## Samples

### Lock door

````javascript
async function doorLock() {	
	require('dotenv').config();

	var TeslaAPI = require('../tesla-api.js');

	var options = {
		token: process.env.TESLA_API_REFRESH_TOKEN,
		vin: process.env.TESLA_API_VIN
	};

	var tapi = new TeslaAPI(options);
	console.log(await tapi.post('command/door_lock'));
}

doorLock();
````
### Get information about your vehicle

````javascript
async function getVehicleData() {	
	require('dotenv').config();

	var TeslaAPI = require('../tesla-api.js');

	var options = {
		token: process.env.TESLA_API_REFRESH_TOKEN,
		vin: process.env.TESLA_API_VIN
	};

	var tapi = new TeslaAPI(options);
	console.log(await tapi.get('vehicle_data'));
}

getVehicleData();
````

## Methods

- **connect()**          - Connects to your Tesla. Not required.
- **get()**         - Executes a GET request.
- **post()**      - Executes a POST request.

