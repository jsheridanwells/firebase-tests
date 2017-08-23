'use strict';
let $ = require('jquery');
let firebase = require('./fb-config');

function getData() {
	return new Promise((resolve, reject)=> {
		$.ajax({
			url: `${firebase.getFBsettings().databaseURL}/songs.json`
		}).done((data) => {
			resolve(data);
		});
	});
}