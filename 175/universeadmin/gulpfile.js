'use strict';

var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload,
  connect = require('gulp-connect'),
  cssnano = require('gulp-cssnano'),
  htmlbeautify = require('gulp-html-beautify'),
  browserify = require("browserify"),
  source = require('vinyl-source-stream'),
  sass = require('gulp-sass'),
  sassLint = require('gulp-sass-lint'),
  sourcemaps = require('gulp-sourcemaps'),
  nunjucks = require('gulp-nunjucks-html'),
  uglify = require('gulp-uglify'),
  fontIcon = require("gulp-font-icon"),
  replaceName = require('gulp-replace-name'),
  gulpSort = require('gulp-sort'),
  ts = require('gulp-typescript'),
  cleanCSS = require('gulp-clean-css'),
  rename = require("gulp-rename"),
  mjml = require('gulp-mjml')
;

var adminDistDir = 'dist/admin';
var adminDistCssDir = 'dist/admin/css';
var adminDistJsDir = 'dist/admin/js';
var adminDistJsFormWizardDir = 'dist/admin/js/form-wizard';
var adminDistJsGrowlNotificationDir = 'dist/admin/js/growl-notification';
var adminDistVendorDir = 'dist/admin/vendor';
var adminDistImgDir = 'dist/admin/img';
var adminDistFontsDir = 'dist/admin/fonts';

gulp.task('data', function () {
  gulp.src('./src/data/**/*')
    .pipe(gulp.dest('dist/data'))
  ;
});

gulp.task('email_templates', function () {
  gulp.src('./src/email_templates/**/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('dist/email_templates'))
  ;
  gulp.src('./src/email_templates/img/**/*')
    .pipe(gulp.dest('dist/email_templates/img'))
  ;
});

gulp.task('sass-lint', function() {
  /*return gulp.src('src/scss/!**!/!*.scss')
    .pipe(sassLint({files: {ignore: ['src/scss/components/_checkbox.scss', 'src/scss/components/_icons.scss']}}, {config: '.sass-lint.yml'}))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());*/
});

gulp.task('html', function() {
  return gulp.src('src/admin/html/*.html')
    .pipe(nunjucks({
      searchPaths: ['./src/admin/html']
    }))
    .pipe(gulp.dest(adminDistDir))
    .pipe(reload({stream: true}));
});

gulp.task('scss:base:source', function() {
  return gulp.src('src/admin/scss/base/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 5 versions'], cascade: false}))
    .pipe(gulp.dest(adminDistCssDir))
    .pipe(reload({stream: true}));
});

gulp.task('scss:base:minify', function() {
  return gulp.src('src/admin/scss/base/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 5 versions'], cascade: false}))
    .pipe(cssnano({discardComments: {removeAll: true}}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(adminDistCssDir))
    .pipe(reload({stream: true}));
});

gulp.task('scss:color-schemes:source', function() {
  return gulp.src('src/admin/scss/color-schemes/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 5 versions'], cascade: false}))
    .pipe(gulp.dest(adminDistCssDir))
    .pipe(reload({stream: true}));
});

gulp.task('scss:color-schemes:minify', function() {
  return gulp.src('src/admin/scss/color-schemes/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 5 versions'], cascade: false}))
    .pipe(cssnano({discardComments: {removeAll: true}}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(adminDistCssDir))
    .pipe(reload({stream: true}));
});

gulp.task('js:source', function() {
  return gulp.src('src/admin/js/**/*.js')
    .pipe(gulp.dest(adminDistJsDir))
    .pipe(reload({stream: true}));
});

gulp.task('js:minify', function() {
  return gulp.src('src/admin/js/**/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(adminDistJsDir))
    .pipe(reload({stream: true}));
});

gulp.task('ts:form-wizard', function () {
  return gulp.src('src/admin/ts/form-wizard/**/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      module: 'amd',
      outFile: 'form-wizard.js'
    }))
    .pipe(gulp.dest(adminDistJsFormWizardDir))
    .pipe(reload({stream: true}))
  ;
});

gulp.task('ts:growl-notification', function () {
  return gulp.src('src/admin/ts/growl-notification/**/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      target: "es5",
      module: 'amd',
      outFile: 'growl-notification.js',
      sourceMap: false,
      moduleResolution: "node",
      emitDecoratorMetadata: true,
      experimentalDecorators: true
    }))
    .pipe(gulp.dest(adminDistJsGrowlNotificationDir))
    .pipe(reload({stream: true}))
  ;
});

gulp.task('vendor', function() {
  return gulp.src('src/admin/vendor/**/*.*')
    .pipe(gulp.dest(adminDistVendorDir))
    .pipe(reload({stream: true}));
});

gulp.task('img', function() {
  return gulp.src('src/admin/img/**/*.*')
    .pipe(gulp.dest(adminDistImgDir))
    .pipe(reload({stream: true}));
});

gulp.task('fonts', function() {
  gulp.src('src/admin/fonts/**/*.{ttf,woff,woff2,eof,svg}')
    .pipe(gulp.dest(adminDistFontsDir))
    .pipe(reload({stream: true}))
  ;

  gulp.src('src/admin/fonts/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 5 versions'], cascade: false}))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(adminDistFontsDir))
    .pipe(reload({stream: true}))
  ;

  gulp.src('src/admin/fonts/**/*.css')
    .pipe(gulp.dest(adminDistFontsDir))
    .pipe(reload({stream: true}))
  ;

  return true;
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });

  gulp.watch('src/admin/html/**/*.html', ['html']);
  gulp.watch('src/admin/scss/**/*.scss', [
    'scss:base:source',
    'scss:base:minify'
  ]);
  gulp.watch('src/admin/js/**/*.js', ['js:source', 'js:minify']);
  gulp.watch('src/admin/ts/form-wizard/*.ts', ['ts:form-wizard']);
  gulp.watch('src/admin/ts/growl-notification/*.ts', ['ts:growl-notification']);
  gulp.watch('src/admin/email_templates/**/*.mjml', ['email_templates']);
});

gulp.task('default', [
  'img', 'email_templates', 'html', 'scss:base:source',
  'scss:base:minify', 'scss:color-schemes:source', 'scss:color-schemes:minify',
  'js:source', 'js:minify', 'fonts',
  'vendor', 'data', 'ts:form-wizard', 'ts:growl-notification', 'browser-sync'
]);

function app(appName) {
  var appDistDir = 'dist/apps/' + appName;
  var appDistCssDir = appDistDir + '/css';
  var appDistJsDir = appDistDir + '/js';
  var appDistVendorDir = appDistDir + '/vendor';
  var appDistImgDir = appDistDir + '/img';
  var appDistFontsDir = appDistDir + '/fonts';

  gulp.task('app:' + appName + ':html', function() {
    return gulp.src('./src/apps/' + appName + '/html/*.html')
      .pipe(nunjucks({
        searchPaths: ['./src/apps/' + appName + '/html']
      }))
      .pipe(gulp.dest(appDistDir))
      .pipe(reload({stream: true}));
  });

  gulp.task('app:' + appName + ':js:source', function() {
    return gulp.src('./src/apps/' + appName + '/js/**/*.js')
      .pipe(gulp.dest(appDistJsDir))
      .pipe(reload({stream: true}));
  });

  gulp.task('app:' + appName + ':js:minify', function() {
    return gulp.src('./src/apps/' + appName + '/js/**/*.js')
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(appDistJsDir))
      .pipe(reload({stream: true}));
  });

  gulp.task('app:' + appName + ':img', function() {
    return gulp.src('./src/apps/' + appName + '/img/**/*.*')
      .pipe(gulp.dest(appDistImgDir))
      .pipe(reload({stream: true}));
  });

  gulp.task('app:' + appName + ':vendor', function() {
    return gulp.src('./src/apps/' + appName + '/vendor/**/*.*')
      .pipe(gulp.dest(appDistVendorDir))
      .pipe(reload({stream: true}))
    ;
  });

  gulp.task('app:' + appName + ':scss:source', function() {
    return gulp.src('./src/apps/' + appName + '/scss/style.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(autoprefixer({browsers: ['last 5 versions'], cascade: false}))
      .pipe(gulp.dest(appDistCssDir))
      .pipe(reload({stream: true}));
  });

  gulp.task('app:' + appName + ':scss:minify', function() {
    return gulp.src('./src/apps/' + appName + '/scss/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({browsers: ['last 5 versions'], cascade: false}))
      .pipe(cssnano({discardComments: {removeAll: true}}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(appDistCssDir))
      .pipe(reload({stream: true}));
  });

  gulp.task('app:' + appName + ':fonts', function() {
    gulp.src('./src/apps/' + appName + '/fonts/**/*.{ttf,woff,woff2,eof,svg}')
      .pipe(gulp.dest(appDistFontsDir))
      .pipe(reload({stream: true}))
    ;

    gulp.src('./src/apps/' + appName + '/fonts/**/*.scss')
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(autoprefixer({browsers: ['last 5 versions'], cascade: false}))
      .pipe(cleanCSS())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(appDistFontsDir))
      .pipe(reload({stream: true}))
    ;

    gulp.src('./src/apps/' + appName + '/fonts/**/*.css')
      .pipe(gulp.dest(appDistFontsDir))
      .pipe(reload({stream: true}))
    ;

    return true;
  });

  gulp.task('app:' + appName, [
    'app:' + appName + ':html',
    'app:' + appName + ':js:source',
    'app:' + appName + ':js:minify',
    'app:' + appName + ':img',
    'app:' + appName + ':vendor',
    'app:' + appName + ':scss:source',
    'app:' + appName + ':scss:minify',
    'app:' + appName + ':fonts'
  ]);

  gulp.task('app:' + appName + ':watch', function() {
    gulp.watch('./src/apps/' + appName + '/html/**/*.html', [
      'app:' + appName + ':html'
    ]);
    gulp.watch('./src/apps/' + appName + '/scss/**/*.scss', [
      'app:' + appName + ':scss:source',
      'app:' + appName + ':scss:minify'
    ]);
    gulp.watch('./src/apps/' + appName + '/js/**/*.js', [
      'app:' + appName + ':js:source',
      'app:' + appName + ':js:minify'
    ]);
  });

  gulp.run('app:' + appName);
  gulp.run('app:' + appName + ':watch');
}

function customLayout(layoutName) {
  var customLayoutDistDir = 'dist/custom-layouts/' + layoutName;
  var customLayoutDistCssDir = customLayoutDistDir + '/css';
  var customLayoutDistJsDir = customLayoutDistDir + '/js';
  var customLayoutDistVendorDir = customLayoutDistDir + '/vendor';
  var customLayoutDistImgDir = customLayoutDistDir + '/img';
  var customLayoutDistFontsDir = customLayoutDistDir + '/fonts';

  gulp.task('custom-layout:' + layoutName + ':html', function() {
    return gulp.src('./src/custom-layouts/' + layoutName + '/html/*.html')
      .pipe(nunjucks({
        searchPaths: ['./src/custom-layouts/' + layoutName + '/html']
      }))
      .pipe(gulp.dest(customLayoutDistDir))
      .pipe(reload({stream: true}));
  });

  gulp.task('custom-layout:' + layoutName + ':js:source', function() {
    return gulp.src('./src/custom-layouts/' + layoutName + '/js/**/*.js')
      .pipe(gulp.dest(customLayoutDistJsDir))
      .pipe(reload({stream: true}));
  });

  gulp.task('custom-layout:' + layoutName + ':js:minify', function() {
    return gulp.src('./src/custom-layouts/' + layoutName + '/js/**/*.js')
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(customLayoutDistJsDir))
      .pipe(reload({stream: true}));
  });

  gulp.task('custom-layout:' + layoutName + ':img', function() {
    return gulp.src('./src/custom-layouts/' + layoutName + '/img/**/*.*')
      .pipe(gulp.dest(customLayoutDistImgDir))
      .pipe(reload({stream: true}));
  });

  gulp.task('custom-layout:' + layoutName + ':vendor', function() {
    return gulp.src('./src/custom-layouts/' + layoutName + '/vendor/**/*.*')
      .pipe(gulp.dest(customLayoutDistVendorDir))
      .pipe(reload({stream: true}))
      ;
  });

  gulp.task('custom-layout:' + layoutName + ':scss:source', function() {
    return gulp.src('./src/custom-layouts/' + layoutName + '/scss/style.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(autoprefixer({browsers: ['last 5 versions'], cascade: false}))
      .pipe(gulp.dest(customLayoutDistCssDir))
      .pipe(reload({stream: true}));
  });

  gulp.task('custom-layout:' + layoutName + ':scss:minify', function() {
    return gulp.src('./src/custom-layouts/' + layoutName + '/scss/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({browsers: ['last 5 versions'], cascade: false}))
      .pipe(cssnano({discardComments: {removeAll: true}}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(customLayoutDistCssDir))
      .pipe(reload({stream: true}));
  });

  gulp.task('custom-layout:' + layoutName + ':fonts', function() {
    gulp.src('./src/custom-layouts/' + layoutName + '/fonts/**/*.{ttf,woff,woff2,eof,svg}')
      .pipe(gulp.dest(customLayoutDistFontsDir))
      .pipe(reload({stream: true}))
    ;

    gulp.src('./src/custom-layouts/' + layoutName + '/fonts/**/*.scss')
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(autoprefixer({browsers: ['last 5 versions'], cascade: false}))
      .pipe(cleanCSS())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(customLayoutDistFontsDir))
      .pipe(reload({stream: true}))
    ;

    gulp.src('./src/custom-layouts/' + layoutName + '/fonts/**/*.css')
      .pipe(gulp.dest(customLayoutDistFontsDir))
      .pipe(reload({stream: true}))
    ;

    return true;
  });

  gulp.task('custom-layout:' + layoutName, [
    'custom-layout:' + layoutName + ':html',
    'custom-layout:' + layoutName + ':js:source',
    'custom-layout:' + layoutName + ':js:minify',
    'custom-layout:' + layoutName + ':img',
    'custom-layout:' + layoutName + ':vendor',
    'custom-layout:' + layoutName + ':scss:source',
    'custom-layout:' + layoutName + ':scss:minify',
    'custom-layout:' + layoutName + ':fonts'
  ]);

  gulp.task('custom-layout:' + layoutName + ':watch', function() {
    gulp.watch('./src/custom-layouts/' + layoutName + '/html/**/*.html', [
      'custom-layout:' + layoutName + ':html'
    ]);
    gulp.watch('./src/custom-layouts/' + layoutName + '/scss/**/*.scss', [
      'custom-layout:' + layoutName + ':scss:source',
      'custom-layout:' + layoutName + ':scss:minify'
    ]);
    gulp.watch('./src/custom-layouts/' + layoutName + '/js/**/*.js', [
      'custom-layout:' + layoutName + ':js:source',
      'custom-layout:' + layoutName + ':js:minify'
    ]);
  });

  gulp.run('custom-layout:' + layoutName);
  gulp.run('custom-layout:' + layoutName + ':watch');
}

app('prototype');
app('file-storage');
app('crm');
customLayout('simple');
