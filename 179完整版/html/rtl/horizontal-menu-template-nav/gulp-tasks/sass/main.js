var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

module.exports = function(gulp, callback) {
	return gulp.src(['template-counter.scss', 'template-3d-graphics.scss', 'template-3d-animation.scss', 'template-intro-video.scss', 'bootstrap.scss'], { cwd: config.source.sass})
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: config.autoprefixerBrowsers,
            cascade: false
        }))
		.pipe(gulp.dest(config.destination.css));
};