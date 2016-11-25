module.exports = function(grunt) {
    // Path configuration
    var pathOptions = require('./build.config.js');

    // Grunt task
    var taskConfig = {


        // Grunt task for bower install
        wiredep: {
            task: {
                src: [
                    '<%= src %>/index.html'
                ]
            }
        },


        // Grunt task to concat app angular controller files
        concat: {
            js: {
                src: [
                    '<%= src %>/app/**/**/*.js',

                    '<%= src %>/app/*.js'
                ],
                dest: '<%= dist %>/<%= scriptDist %>/app.min.js'
            }
        },

        concat_css: {
            all: {
                src: ['<%= src %>/styles/**/**/*.css'],
                dest: "<%= dist %>/<%= stylesDist %>/app.min.css"
            },
        },

        // Grunt task to minify bower/angular js files
        uglify: {
            options: {
                mangle: false
            },
            js: {
                files: {
                    '<%= dist %>/<%= scriptDist %>/app.min.js': ['<%= dist %>/<%= scriptDist %>/app.min.js'],
                    '<%= dist %>/<%= scriptDist %>/lib.min.js': ['<%= dist %>/<%= scriptDist %>/lib.min.js']
                }
            },
            css: {
                files: {
                    '<%= dist %>/<%= stylesDist %>/app.min.css': ['<%= dist %>/<%= stylesDist %>/app.min.css'],
                    '<%= dist %>/<%= stylesDist %>/lib.min.css': ['<%= dist %>/<%= stylesDist %>/lib.min.css']
                }
            }
        },

        // Copy all files except bower components to dist folder
        copy: {
            main: {
                src: [
                    '**/*',
                    '!app/**/*.js',
                    '!bower_components',
                    '!bower_components/**/*',
                    '!styles',
                    '!styles/*',
                    //'!app',
                  //  '!app/**/*'
                ],
                expand: true,
                cwd: '<%= src %>',
                dest: '<%= dist %>'
            }
        },
        // Grunt task to set file rev
        rev: {
            files: {
                src: ['<%= dist %>/<%= scriptDist %>/*.js', '<%= dist %>/<%= stylesDist %>/*.css']
            }
        },

        // Grunt task to replace rev files
        useminPrepare: {
            html: '<%= src %>/index.html',
            options: {
                dest: 'dist'
            }
        },
        ngtemplates: {
            app: {
                src: 'lib/app/**/*.html',
                dest: '<%= dist %>/<%= scriptDist %>/template.js',
                options: {
                    module: 'faw'
                }
            }
        },
        // Complete min
        usemin: {
            html: ['<%= dist %>/index.html'],
            css: ['<%= dist %>/<%= stylesDist %>/*.css'],
            js: ['<%= dist %>/<%= scriptDist %>/*.js'],
            options: {
                assetsDirs: ['<%= dist %>', '<%= dist %>' + '<%= stylesDist %>', '<%= dist %>' + '/<%= scriptDist %>']
            }
        },

        // Clean previous build
        clean: {
            build: {
                src: ['<%= dist %>/<%= stylesDist %>', '<%= dist %>/<%= scriptDist %>']
            }
        },

        // Bower concat all files
        bower_concat: {
            all: {
                dest: {
                    js: '<%= dist %>/<%= scriptDist %>/lib.min.js',
                    css: '<%= dist %>/<%= stylesDist %>/lib.min.css'
                },
                mainFiles: {
                    bootstrap: ['dist/css/bootstrap.min.css', 'dist/js/bootstrap.min.js']
                },
                exclude: [
                    'angular-i18n'
                ],
                bowerOptions: {
                    relative: false
                }
            }
        },

        // Reload wiredep when new bower component is installed.
        watch: {
            files: ['<%= src %>/*.scss', '<%= src %>/**/**/*.scss'],
            tasks: ['sass']
        },

        // Compile Sass
        sass: {
            dist: {
                options: {
                    includePaths: require('bourbon').includePaths
                },
                files: [{
                    expand: true,
                    cwd: '<%= src %>',
                    src: ['*.scss'],
                    dest: '<%= src %>',
                    ext: '.css'
                }],

            }
        },

        // Bump version
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: [
                    'package.json',
                    'bower.json'
                ],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                globalReplace: false,
                prereleaseName: false,
                metadata: '',
                push: true,
                pushTo: 'origin',
                regExp: false
            }
        }
    };

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig(grunt.util._.extend(taskConfig, pathOptions));


    grunt.registerTask('install-hook', function() {
        grunt.file.copy('hooks/git/pre-commit', '.git/hooks/pre-commit');
        fs.chmodSync('.git/hooks/pre-commit', '755');
    });

    grunt.registerTask('build', [
        'clean',
        'useminPrepare',
        'wiredep',
        'bower_concat',
        'copy',
       // 'ngtemplates',
        'concat:js',
        'concat_css',
        'uglify:js',
        'rev',
        'usemin',

    ]);
};
