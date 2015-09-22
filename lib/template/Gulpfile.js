// Dependencies
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Destination for the compiled/bundled files
var destination = 'public/assets'

// Javascript compilation task
gulp.task('scripts', function() {
    // Browserify follows `request` in order concatenate JS files for use in
    // the browser. Reactify is a JSX -> JS transpiler, turning React components
    // into plain JS statements. Uglify minifies the result.
    gulp.src(['assets/scripts/*.js'])
        .pipe(browserify({
            debug: true,
            transform: ['reactify']
        }))
        .pipe(gulp.dest(destination + '/scripts'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(destination + '/scripts'));

});

// Run the the scripts task
gulp.task('default', ['scripts']);
