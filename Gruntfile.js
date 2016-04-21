module.exports = function(grunt) {

    grunt.initConfig({
        bower: grunt.file.readJSON('bower.json'),
        watch: {
            sass: {
              files: ['assets/scss/*.scss'],
              tasks: ['sass'],
            }
        },
        sass: {
            dist: {
                files: [
                    {'assets/styles/skeleton.css': ['assets/scss/skeleton.scss']}
                ]
            }
        },
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'assets/styles',
              src: ['*.css', '!*.min.css'],
              dest: 'assets/styles',
              ext: '.min.css'
            }]
          }
        },
        uglify: {
          js: {
            files : {
                'assets/js/skeleton.min.js' : [
                  'assets/js/skeleton.js'
                ],
                'assets/js/vendors.min.js' : [
                  'bower_components/jquery/dist/jquery.js',
                  'bower_components/sass-bootstrap/dist/js/bootstrap.js'
                ]
            }
          },
          options: {
            report: 'min'
          }
        }
    });

    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    //grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-assemble');

    grunt.registerTask('build', [
        // 'clean:dist',
        // 'copy',
        // 'useminPrepare',
        // 'concat:generated',
         'sass',
         'cssmin',
         'uglify',
        // 'usemin',

        // 'htmlmin',
        // 'clean:tmp',
        // 'copy:js'
    ]);

    grunt.registerTask('release', [
        'bump'
    ]);

    grunt.registerTask('html', [
        'clean:html',
        'assemble'
    ]);
};
