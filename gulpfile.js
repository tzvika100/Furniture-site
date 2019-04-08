// Load Plugins.
// --------------------------------------------------------------
var gulp = require('gulp');
var sass = require('gulp-sass');

// Task: `style`.
// --------------------------------------------------------------
function style() {

	return gulp
	.src( './assets/sass/style.scss' )
	.pipe( sass.sync({outputStyle: 'compressed'}).on('error', sass.logError) )
	.pipe( gulp.dest( './' ) );

}

// Watch.
// --------------------------------------------------------------
function watch() {

	style();
	gulp.watch( ['./assets/**/*.scss'], style );

}

// Export tasks
// --------------------------------------------------------------
exports.default = watch;