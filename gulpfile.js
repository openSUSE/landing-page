// Include gulp
var gulp = require('gulp');

// Define main directories
var assets = 'assets/';
var destination = 'build/';

// Concatenate & Minify JS
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var stripDebug = require('gulp-strip-debug');

gulp.task('scripts', function() {
  return gulp.src([assets + 'js/vendor/jquery.min.js',
                   assets + 'js/vendor/bootstrap.min.js',
                   assets + 'js/vendor/jquery.easing.1.3.js',
                   assets + 'js/vendor/smoothscroll.js',
                   assets + 'js/vendor/owl.carousel.min.js',
                   assets + 'js/vendor/wow.js',
                   assets + 'js/vendor/Modernizr.custom.js',
                   assets + 'js/vendor/jquery-cookie.js',
                   assets + 'js/vendor/jquery-lang.js',
                   assets + 'js/opensuse-news.js',
                   assets + 'js/opensuse-theme.js'])
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest(destination + 'js'));
});

// Preprocess CSS
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  return gulp.src(assets + 'css/openSUSE.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(destination + 'css'));
});

gulp.task('vendorCSS', ['less'], function() {
  return gulp.src([assets + 'css/vendor/animate/animate.css',
                   assets + 'css/vendor/owl-carousel/owl.carousel.css',
                   assets + 'css/vendor/fontawesome/font-awesome.css'])
         .pipe(concat('vendor.css'))
         .pipe(rename({suffix: '.min'}))
         .pipe(gulp.dest(destination + 'css'))
});

// Watch for changes in our custom assets
gulp.task('watch', function() {
  // Watch .js files
  gulp.watch(assets + 'js/*.js', ['scripts']);
  gulp.watch(assets + 'js/vendor/*.js', ['scripts']);
  // Watch .scss files
  gulp.watch(assets + 'css/*.less', ['less']);
 });

// Run python server on localhost:8000
var serverCommand = 'python -m SimpleHTTPServer';

var shell = require('gulp-shell');
gulp.task('runServer', shell.task([
  serverCommand
]))

// Default Task
gulp.task('default', ['scripts', 'less', 'vendorCSS', 'watch', 'runServer']);
