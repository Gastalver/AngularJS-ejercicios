module.exports = function(grunt) {

    //Objeto configuración

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            lomio: {
                files: [controllers.js]
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');


};