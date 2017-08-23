module.exports = function (grunt) {
	grunt.initConfig({
		browserify: {
      js: {
          src: ['../js/**/*.js'],
          dest: '../dist/app.js'
      },
      options: {
          browserifyOptions: {
            paths: ["./node_modules"]
          }
      }
    },
		jshint: {
			options: {
				predef: ['document', 'console'],
				esnext: true,
				strict: 'global',
				globals: {'$': true},
				browserify: true,

			},
			files: ['../js/**/*.js']
		},
		watch: {
			browserify: {
				files: ['../js/**/*.js'],
				tasks: ['browserify']
			}
		}
	});
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
};