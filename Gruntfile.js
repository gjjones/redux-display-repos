module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            default: {
                options: {
                    browserifyOptions: {
                        debug: true,
                        transform: ['babelify']
                    }
                },
                files: {
                    'build/bundle.js': ['src/**/*.js']
                }
            }
        },
        browserSync: {
            default: {
                options: {
                    server: './'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-browser-sync');
    
    grunt.registerTask('default', ['browserify', 'browserSync']);
};