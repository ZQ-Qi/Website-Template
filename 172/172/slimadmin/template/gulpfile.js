
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var mainBowerFiles = require('main-bower-files');
var bowerNormalizer = require('gulp-bower-normalize');

gulp.task('sass-css', function(){
  return gulp.src('scss/slim.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('minify-css', function(){
  return gulp.src('scss/slim.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('sass-skin', function(){
  return gulp.src('scss/skins/*.scss')
    .pipe(sass())
    .pipe(rename({prefix: 'slim.'}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: { baseDir: 'app' }
  })
});

gulp.task('serve', ['browserSync'], function() {
  gulp.watch('scss/**/*.scss', ['minify-css', 'sass-css']);
  gulp.watch('scss/skins/*.scss', ['sass-skin']);
  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);
})

gulp.task('bower', function() {
  return gulp.src(mainBowerFiles(), {base: 'bower_components'})
    .pipe(bowerNormalizer({bowerJson: './bower.json', checkPath: true}))
    .pipe(gulp.dest('app/lib'))
});
