const gulp = require('gulp')
// const gutil = require('gulp-util')
const minify = require('gulp-minify')
const useref = require('gulp-useref');

(function() {
	gulp.task('main', function() {
		gulp.src('src/common-1.0.js')
			.pipe(minify())
			.pipe(useref())
			.pipe(gulp.dest('dist'))
	});
	gulp.task('default', ['main']);
	// const handleError = function(err) {
	// 	const colors = gutil.colors;
	// 	console.log('\n')
	// 	gutil.log(colors.red('Error!'))
	// 	gutil.log('fileName: ' + colors.red(err.fileName))
	// 	gutil.log('lineNumber: ' + colors.red(err.lineNumber))
	// 	gutil.log('message: ' + err.message)
	// 	gutil.log('plugin: ' + colors.yellow(err.plugin))
	// }
})();
