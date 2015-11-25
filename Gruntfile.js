module.exports = function(grunt) {
    'use strict';
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: ['dist/*']
        },
        uglify: {
            default: {
                src: './js/UlizaPlayerJS.v1.8.speedButtonPlugin.js',
                dest: './dist/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            files: [
             './js/UlizaPlayerJS.v1.8.speedButtonPlugin.js'
            ],
            options: {
             jshintrc: '.jshintrc'
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default',['clean','uglify']);

    grunt.registerTask('test',['jshint']);
 
};
