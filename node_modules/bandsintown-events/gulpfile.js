var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
		source = require('vinyl-source-stream'),
		browserify = require('browserify'),
		watchify = require('watchify'),
		streamify = require('gulp-streamify');

var browserifyObj = function() {
  return browserify({
    cache: {},
    packageCache: {},
    entries: ['./src/BandsInTownEvents.js'],
    debug: true,
    standalone: 'BandsInTownEvents'
  });
};

//browserify watcher
var watcher = watchify(browserifyObj());
/**
 *
 * JS Task
 *
 *
 *
 */
var bundleJS = function( bundle ){
	return bundle.bundle()
    .pipe(plumber({
      errorHandler: notify.onError({
        title:		"Gulp JS",
        message:	"Error: <%= error.message %>",
        sound:		"Basso"
      })
    }))
		.pipe(source('bit-events.js'))
		// Add transformation tasks to the pipeline here.
		.pipe(gulp.dest( './dist/' ))
		.pipe(livereload())
		.pipe(rename('bit-events.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest( './dist/' ));
}

gulp.task('js', bundleJS.bind(null, browserifyObj()));

/**
 *
 * Watch Task
 * Watching just for JS changes
 *
 *
 */
gulp.task('watch', function() {
	//livereload
	livereload.listen();

	//bundle our JS right away
	bundleJS(watcher);

	//watch our JS with watchify
	watcher.on('update', bundleJS.bind(null, watcher));
});

/**
 *
 * Default Task
 * Watching just for JS changes
 *
 *
 */
gulp.task('default', ['watch']);
