var fs = require('fs'),
    StompClient = require('stomp-client').StompClient,
	secure = require('./secure.js'),
	mysql = require('mysql');
	
	
var topic = 'RTPPM_ALL';
var datafeed = 'datafeeds.networkrail.co.uk';
var destination = '/topic/' + topic;

// Define feed security
var username = secure.username;
var password = secure.password;

// Define MYSQL connection
var mysqlclient = mysql.createClient({
	user: secure.database_username,
	password: secure.database_password,
	host: secure.database_host
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
			}
		}); 
    });
	// end subscription	
});