module.exports = function (grunt) {
	grunt.initConfig({
		browserify: {
			'../dist/app.js' : ['../js/main.js']
		},
		watch: {
			browserify: {
				files: ['../js/**/*.js'],
				tasks: ['browserify']
			}
		}
	});
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.registerTask('default', ['browserify', 'watch']);
};