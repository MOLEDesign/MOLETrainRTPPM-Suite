var fs = require('fs'),
    StompClient = require('stomp-client').StompClient,
	secure = require('./secure.js');
	
var topic = 'RTPPM_ALL';
var datafeed = 'datafeeds.networkrail.co.uk';
var destination = '/topic/' + topic;

var username = user.username;
var password = user.password;

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
			}
		}); 
    });
	// end subscription	
});