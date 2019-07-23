var watch           = require('gulp-watch');
var pug            = require('gulp-pug');

module.exports = function(gulp, callback) {
	// return watch('./pug/template-builder/pages/*.pug')
	return watch(config.source.template + '/pages/*.pug')
		.pipe(pug({
			pretty: true,
			data: {
                // debug: false,
                useLayout: myLayout, // Predefined layout name i.e vertical-light-sidebar
                useDirection: myTextDirection,
                rtl: rtl,
                app_assets_path : config.app_assets_path,
                assets_path : config.assets_path
            }
		}))
		.pipe(gulp.dest(config.html+ '/' + myTextDirection + '/' + myLayoutName));
};