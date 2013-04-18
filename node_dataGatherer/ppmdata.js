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

// Define SQL connection

var connection = mysql.createConnection({
	host		: secure.database_host,
	user		: secure.database_username,
	password	: secure.database_password,
	database	: secure.database_name,
});


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
			}
		});
		
		// write information to MYSQL
		//var ppmdata = require('./output');
		//var JSONtimestamp = JSON.parse(ppmdata.RTPPMDataMsgV1.timestamp );
		connection.connect();
		console.log('Writing to MYSQL');
		//var insertppm = connection.query(
		//	'INSERT INTO overallppm '+
		//	'SET timestamp="' + JSONtimestamp + '", ppm="99", rollingppm="98"'
		//);
		connection.end();
		// end write
    });
	// end subscription	
});