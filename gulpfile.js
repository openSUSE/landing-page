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

function scripts() {
  return gulp.src([assets + 'js/vendor/jquery.min.js',
                   assets + 'js/vendor/bootstrap.min.js',
                   assets + 'js/vendor/jquery.easing.1.3.js',
                   assets + 'js/vendor/smoothscroll.js',
                   assets + 'js/vendor/owl.carousel.min.js',
                   assets + 'js/vendor/wow.js',
                   assets + 'js/vendor/Modernizr.custom.js',
                   assets + 'js/vendor/jquery-cookie.js',
                   assets + 'js/vendor/jquery-lang.js',
                   assets + 'js/vendor/jquery.mobile.custom.js',
                   assets + 'js/vendor/jquery.countdown.min.js',
                   assets + 'js/vendor/moment.js',
                   assets + 'js/vendor/moment-timezone-with-data.js',
                   assets + 'js/opensuse-news.js',
                   assets + 'js/countdown.js',
                   assets + 'js/opensuse-theme.js'])
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(stripDebug())
    .pipe(gulp.dest(destination + 'js'));
};

// Preprocess CSS
var less = require('gulp-less');
var path = require('path');
var minifyCss = require('gulp-minify-css');

function compileLess() {
  return gulp.src(assets + 'css/openSUSE.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCss())
    .pipe(gulp.dest(destination + 'css'));
};

function vendorCSS() {
  return gulp.src([assets + 'css/vendor/animate/animate.css',
      assets + 'css/vendor/owl-carousel/owl.carousel.css',
      assets + 'css/vendor/fontawesome/font-awesome.css'])
    .pipe(concat('vendor.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCss())
    .pipe(gulp.dest(destination + 'css'))
};

// Images optimization
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

function imagesCompression() {
  return gulp.src(assets + 'images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 7, progressive: true, interlaced: true })))
    .pipe(gulp.dest(destination + 'images'));
};

// Watch for changes in our custom assets
function watchFiles() {
  // Watch .js files
  gulp.watch(assets + 'js/*.js', scripts);
  gulp.watch(assets + 'js/vendor/*.js', scripts);
  // Watch .less files
  gulp.watch(assets + 'css/*.less', compileLess);
  // Watch image files
  gulp.watch(assets + 'images/**/*', imagesCompression);
};

// Run python server on localhost:8000
var serverCommand = 'python -m SimpleHTTPServer';
var shell = require('gulp-shell');

gulp.task('runServer', shell.task(serverCommand))
var runServer = gulp.task('runServer');

// Export tasks
exports.scripts = scripts
exports.compileLess = compileLess
exports.imagesCompression = imagesCompression
exports.watchFiles = watchFiles
exports.runServer = runServer
exports.vendorCSS = gulp.series(compileLess)
exports.default = gulp.parallel(scripts, compileLess, vendorCSS, imagesCompression, watchFiles, runServer)
