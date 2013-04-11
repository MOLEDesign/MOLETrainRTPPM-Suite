var fs = require('fs'),
    StompClient = require('stomp-client').StompClient,
	mysql = require('mysql');
	secure = require('./secure.js');
	
	
var topic = 'RTPPM_ALL';
var datafeed = 'datafeeds.networkrail.co.uk';
var destination = '/topic/' + topic;

// Define feed security
var username = secure.username;
var password = secure.password;


client = new StompClient(datafeed, 61618, username, password, '1.0');

client.connect(function(sessionId) {
    console.log('Trying to connect...');

	// Subscribe and collect message
    client.subscribe(destination, function(body, headers) {
        fs.writeFile("./output.json", body, function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log("The file was saved!");
				client.disconnect(function() {
					console.log('Disconnected');
				});
				// Add data to MYSQL
				console.log('Adding data to MYSQL');
			}
		}); 
    });
	// end subscription	
});