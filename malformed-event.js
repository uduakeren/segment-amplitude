'use strict';


/** Test event **/
var malformedEvent = {

	"username": "o9amxb7u", 
	"timestamp": "2017-01-07T18:16:17.861037", 
	"userId": "12ec721b-0d16-424d-b27d-c50db3e9b2d5", 
	"email": "wgqnkiru@definitely_not_a_spammer.internet", 
	"version": 2, 
	"context": {
		"locale": "en-GB", 
		"userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1", 
		"location": {
			"latitude": 40.2964197, 
			"city": "San Francisco", 
			"speed": 0, 
			"longitude": -76.9411617, 
			"country": "United States"
		}, 
		"timezone": "Europe/Amsterdam", 
		"device": 	{
			"advertisingId": "7ef58428-8dba-4dfe-a2a2-eb6becceb1e1", 
			"token": "3e6e6cb0-4156-4b5a-a67d-1f91d5f9c421", 
			"model": "iPhone6", 
			"type": "ios", 
			"id": "9b92536e-06ae-4e53-929f-6df9d848ed2e", 
			"adTrackingEnabled": true, 
			"manufacturer": "Apple"
		}, 
		"ip": "5.73.164.238", 
		"screen": 	{
			"width": 320, 
			"density": 2, 
			"height": 568
		}, 
		"os": {
			"version": "10.2", 
			"name": "iPhone OS"
		}, 
		"library": {
			"version": 5, 
			"name": "analytics.js"
		}, 
		"network": {
			"wifi": false, 
			"carrier": "Verizon", 
			"cellular": true, 
			"bluetooth": false
		}
	}
};

module.exports = malformedEvent