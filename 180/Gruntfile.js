module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        /* Compile sass file to css*/

        sass: {
            global: {
                options: {
                    "sourcemap=none": true,
                    noCache: true
                },
                files: [{
                    expand: true,
                    cwd: './sass/global/',
                    src: '**/*.scss',
                    dest: './assets/global/',
                    ext: '.css'
                }]
            },
            pages: {
                options: {
                    "sourcemap=none": true,
                    noCache: true
                },
                files: [{
                    expand: true,
                    cwd: './sass/pages/',
                    src: '**/*.scss',
                    dest: './assets/pages/',
                    ext: '.css'
                }]
            },
            layouts: {
                options: {
                    "sourcemap=none": true,
                    noCache: true
                },
                files: [{
                    expand: true,
                    cwd: './sass/layouts/',
                    src: '**/*.scss',
                    dest: './assets/layouts/',
                    ext: '.css'
                }]
            }
        },


        /*  Compile everything into one task with Watch */
        watch: {
            css: {
                files: './sass/**/*.scss',
                tasks: ['sass']
            },


        },

        /* minify structure with  particular directive*/

        cssmin: {
            globalmin: {
                files: [{
                    expand: true,
                    cwd: './assets/global/css/',
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: './assets/global/css/',
                    ext: '.min.css'
                }]
            },
            layoutmin: {
                files: [{
                    expand: true,
                    cwd: './assets/layouts/',
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: './assets/layouts/',
                    ext: '.min.css'
                }]
            },
            pagemin: {
                files: [{
                    expand: true,
                    cwd: './assets/pages/',
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: './assets/pages/',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            build: {
                files: [{
                    expand: true,     // Enable dynamic expansion.
                    cwd: './assets/global/js/',      // Src matches are relative to this path.
                    src: ['**/*.js', '!**/*.min.js'], // Actual pattern(s) to match.
                    dest: './assets/global/js/',   // Destination path prefix.
                    ext: '.min.js',   // Dest filepaths will have this extension.
                    extDot: 'first'   // Extensions in filenames begin after the first dot
                }],
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    // Default task(s).
    grunt.registerTask('sass:watch', ['watch']);
    grunt.registerTask('minify', ['cssmin'],['uglify']);


};