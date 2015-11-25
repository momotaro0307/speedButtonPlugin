module.exports = function(grunt) {
    'use strict';
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            default: {
                src: './js/UlizaPlayerJS.v1.8.speedButtonPlugin.js',
                dest: './dist/<%= pkg.name %>.min.js'
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default',['uglify']);
 
};