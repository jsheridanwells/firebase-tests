'use strict';
let firebase = require('firebase/app');
let fb = require('./fb-getter');
let fbData = fb();

require('firebase/auth');
require('firebase/database');

var config = {
	apiKey: fbData.apiKey,
	authDomain: fbData.authDomain,
	databaseURL: fbData.databaseURL
}

firebase.getFBsettings = function () {
	return config;
};