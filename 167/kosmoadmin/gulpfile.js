"use strict";

(function() {
    var colorsMap = {
        'primary': {
            navbarBadgeColor: 'info',
            navbarTabsItemHighlight: 'info',
            navbarMenuItemHighlight: 'info',
            sidebarItemHightlightColor: 'info',
            navbarCreateButtonColor: 'info',
            navbarActionButtonColor: 'danger'
        },
        'primary-dark': {
            navbarBadgeColor: 'danger',
            navbarMenuItemHighlight: 'danger',
            navbarTabsItemHighlight: 'danger',
            sidebarItemHightlightColor: 'danger',
            navbarCreateButtonColor: 'danger',
            navbarActionButtonColor: 'danger'
        },
        'pink': {
            navbarBadgeColor: 'royal-blue',
            navbarTabsItemHighlight: 'royal-blue',
            navbarMenuItemHighlight: 'royal-blue',
            sidebarItemHightlightColor: 'royal-blue',
            navbarCreateButtonColor: 'royal-blue',
            navbarActionButtonColor: 'royal-blue'
        },
        'info': {
            navbarBadgeColor: 'primary',
            navbarTabsItemHighlight: 'primary',
            navbarMenuItemHighlight: 'primary',
            sidebarItemHightlightColor: 'primary',
            navbarCreateButtonColor: 'primary',
            navbarActionButtonColor: 'primary'
        },
        'bermuda-gray': {
            navbarBadgeColor: 'success',
            navbarTabsItemHighlight: 'success',
            navbarMenuItemHighlight: 'success',
            sidebarItemHightlightColor: 'success',
            navbarCreateButtonColor: 'success',
            navbarActionButtonColor: 'success'
        },
        'royal-blue': {
            navbarBadgeColor: 'fuchsia-pink',
            navbarTabsItemHighlight: 'fuchsia-pink',
            navbarMenuItemHighlight: 'fuchsia-pink',
            sidebarItemHightlightColor: 'fuchsia-pink',
            navbarCreateButtonColor: 'fuchsia-pink',
            navbarActionButtonColor: 'fuchsia-pink'
        },
        'ebony-clay': {
            navbarBadgeColor: 'cerise-red',
            navbarTabsItemHighlight: 'cerise-red',
            navbarMenuItemHighlight: 'cerise-red',
            sidebarItemHightlightColor: 'cerise-red',
            navbarCreateButtonColor: 'cerise-red',
            navbarActionButtonColor: 'cerise-red'
        },
        'international-klein-blue': {
            navbarBadgeColor: 'crusta',
            navbarTabsItemHighlight: 'crusta',
            navbarMenuItemHighlight: 'crusta',
            sidebarItemHightlightColor: 'crusta',
            navbarCreateButtonColor: 'crusta',
            navbarActionButtonColor: 'crusta'
        },
        'jungle-green': {
            navbarBadgeColor: 'primary',
            navbarTabsItemHighlight: 'primary',
            navbarMenuItemHighlight: 'primary',
            sidebarItemHightlightColor: 'primary',
            navbarCreateButtonColor: 'primary',
            navbarActionButtonColor: 'primary'
        },
        'voodoo': {
            navbarBadgeColor: 'medium-purple',
            navbarTabsItemHighlight: 'medium-purple',
            navbarMenuItemHighlight: 'medium-purple',
            sidebarItemHightlightColor: 'medium-purple',
            navbarCreateButtonColor: 'medium-purple',
            navbarActionButtonColor: 'medium-purple'
        },
        'cornflower-blue': {
            navbarBadgeColor: 'crusta',
            navbarTabsItemHighlight: 'crusta',
            navbarMenuItemHighlight: 'crusta',
            sidebarItemHightlightColor: 'crusta',
            navbarCreateButtonColor: 'crusta',
            navbarActionButtonColor: 'crusta'
        },
        'purple': {
            navbarBadgeColor: 'cerise-red',
            navbarTabsItemHighlight: 'cerise-red',
            navbarMenuItemHighlight: 'cerise-red',
            sidebarItemHightlightColor: 'cerise-red',
            navbarCreateButtonColor: 'cerise-red',
            navbarActionButtonColor: 'cerise-red'
        },
        'oslo-gray': {
            navbarBadgeColor: 'royal-blue',
            navbarTabsItemHighlight: 'royal-blue',
            navbarMenuItemHighlight: 'royal-blue',
            sidebarItemHightlightColor: 'royal-blue',
            navbarCreateButtonColor: 'royal-blue',
            navbarActionButtonColor: 'royal-blue'
        },
        'astronaut-blue': {
            navbarBadgeColor: 'persian-green',
            navbarTabsItemHighlight: 'persian-green',
            navbarMenuItemHighlight: 'persian-green',
            sidebarItemHightlightColor: 'persian-green',
            navbarCreateButtonColor: 'persian-green',
            navbarActionButtonColor: 'persian-green'
        },
        'old-brick': {
            navbarBadgeColor: 'dark-tan',
            navbarTabsItemHighlight: 'dark-tan',
            navbarMenuItemHighlight: 'dark-tan',
            sidebarItemHightlightColor: 'dark-tan',
            navbarCreateButtonColor: 'dark-tan',
            navbarActionButtonColor: 'dark-tan'
        },
        'white': {
            navbarBadgeColor: 'info',
            navbarTabsItemHighlight: 'info',
            navbarMenuItemHighlight: 'info',
            sidebarItemHightlightColor: 'info',
            navbarCreateButtonColor: 'info',
            navbarActionButtonColor: 'danger'
        }
    };
    var gulp = require('gulp'),
        rename = require('gulp-rename'),
        notify = require('gulp-notify'),
        autoprefixer = require('gulp-autoprefixer'),
        livereload = require('gulp-livereload'),
        connect = require('gulp-connect'),
        sass = require('gulp-sass'),
        cleanCSS = require('gulp-clean-css'),
        fileInclude = require('gulp-file-include'),
        gulpArgs = require('get-gulp-args')(),
        mjml = require('gulp-mjml'),
        minify = require('gulp-minify'),
        postcss = require('gulp-postcss'),
        flexibility = require('postcss-flexibility'),
        flexBugsFixes = require('postcss-flexbugs-fixes')
    ;
    var layout = gulpArgs.layout || 'default';
    var sidebar = gulpArgs.sidebar || 'default';
    var navbar = gulpArgs.navbar || 'default';
    var theme = gulpArgs.theme || 'primary';
    var adminPath = './dist/admin/' + layout + '-' + theme;
    var sidebarPosition = gulpArgs.sidebarPosition || 'fixed';
    var themeColors = colorsMap[theme];

    gulp.task('connect', function() {
        connect.server({
            root: 'dist/admin',
            //livereload: true,
            port: 8888
        });
    });

    gulp.task('styles:source', function () {
        gulp.src('./src/admin/assets/styles/**/*.png')
            .pipe(gulp.dest(adminPath + '/assets/styles'))
        ;

        gulp.src('./src/admin/assets/styles/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: [
                    'last 30 versions',
                    'iOS >= 8',
                    'Safari >= 8',
                    'Android >= 4'
                ],
                cascade: true
            }))
            .pipe(postcss([flexibility, flexBugsFixes]))
            .pipe(gulp.dest(adminPath + '/assets/styles'))
        ;
    });

    gulp.task('styles:minify', function () {
        gulp.src('./src/admin/assets/styles/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: [
                    'last 30 versions',
                    'iOS >= 8',
                    'Safari >= 8',
                    'Android >= 4'
                ],
                cascade: true
            }))
            .pipe(postcss([flexibility, flexBugsFixes]))
            .pipe(cleanCSS())
            .pipe(rename({suffix: ".min"}))
            .pipe(gulp.dest(adminPath + '/assets/styles'))
        ;
    });

    gulp.task('data', function () {
        gulp.src('./src/admin/data/**/*')
            .pipe(gulp.dest(adminPath + '/data'))
        ;
    });

    gulp.task('fonts', function () {
        gulp.src('./src/admin/assets/fonts/**/*')
            .pipe(gulp.dest(adminPath + '/assets/fonts'))
        ;
    });

    gulp.task('scripts:source', function () {
        gulp.src('./src/admin/assets/scripts/**/*.js')
            .pipe(gulp.dest(adminPath + '/assets/scripts'))
        ;
    });

    gulp.task('scripts:js:minify', function () {
        gulp.src('./src/admin/assets/scripts/**/*.js')
            .pipe(minify({
                ext:{
                    src:'.js',
                    min:'.min.js'
                }
            }))
            .pipe(gulp.dest(adminPath + '/assets/scripts'))
        ;
    });

    gulp.task('scripts:css:source', function () {
        gulp.src('./src/admin/assets/scripts/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: [
                    'last 30 versions',
                    'iOS >= 8',
                    'Safari >= 8',
                    'Android >= 4'
                ],
                cascade: true
            }))
            .pipe(postcss([flexibility, flexBugsFixes]))
            .pipe(gulp.dest(adminPath + '/assets/scripts'))
        ;
    });

    gulp.task('scripts:css:minify', function () {
        gulp.src('./src/admin/assets/scripts/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: [
                    'last 30 versions',
                    'iOS >= 8',
                    'Safari >= 8',
                    'Android >= 4'
                ],
                cascade: true
            }))
            .pipe(postcss([flexibility, flexBugsFixes]))
            .pipe(cleanCSS())
            .pipe(rename({suffix: ".min"}))
            .pipe(gulp.dest(adminPath + '/assets/scripts'))
        ;
    });

    gulp.task('templates', function () {
        gulp.src('./src/admin/templates/*.html')
            .pipe(fileInclude({
                prefix: '@@',
                context: {
                    layout: layout,
                    sidebar: sidebar,
                    navbar: navbar,
                    sidebarPosition: sidebarPosition,
                    theme: theme,
                    navbarBadgeColor: themeColors.navbarBadgeColor,
                    sidebarItemHightlightColor: themeColors.sidebarItemHightlightColor,
                    navbarTabsItemHighlight: themeColors.navbarTabsItemHighlight,
                    navbarCreateButtonColor: themeColors.navbarCreateButtonColor,
                    navbarActionButtonColor: themeColors.navbarActionButtonColor,
                    navbarMenuItemHighlight: themeColors.navbarMenuItemHighlight
                }
            }))
            .pipe(gulp.dest(adminPath))
        ;
    });
    
    gulp.task('libs', function () {
        gulp.src('./src/admin/libs/**/*.*')
            .pipe(gulp.dest(adminPath + '/libs'))
        ;
    });

    gulp.task('img', function () {
        gulp.src('./src/admin/assets/img/**/*.*')
            .pipe(gulp.dest(adminPath + '/assets/img'))
        ;
    });

    gulp.task('emails', function () {
        gulp.src('./src/emails/**/*.mjml')
            .pipe(mjml())
            .pipe(gulp.dest('./dist/emails'))
        ;

        gulp.src('./src/emails/img/**/*.*')
            .pipe(gulp.dest('./dist/emails/img'))
        ;
    });

    gulp.task('watch', function () {
        gulp.watch('./src/admin/assets/**/*.scss', ['styles:source', 'styles:minify']);
        gulp.watch('./src/admin/templates/**/*.html', ['templates']);
        gulp.watch('./src/admin/assets/scripts/**/*.js', ['scripts:source', 'scripts:js:minify']);
        gulp.watch('./src/admin/assets/scripts/**/*.scss', ['scripts:css:source', 'scripts:css:minify']);
    });

    gulp.task('default', ['connect', 'watch']);

    gulp.task('prod', [
        'libs', 'img', 'fonts', 'data',
        'templates', 'styles:source',
        'styles:minify', 'scripts:source',
        'scripts:js:minify', 'emails',
        'scripts:css:source', 'scripts:css:minify'
    ]);
})();