var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

function compressImages() {
  return gulp.src('assets/images/**/*')
    .pipe(imagemin()) // No options
    .pipe(gulp.dest('build/images'));
}

exports.default = compressImages;

