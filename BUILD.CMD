CALL "C:\Program Files\nodejs\nodevars.bat"
ECHO ON
REM GOTO RUN
CALL NPM install gulp gulp-concat gulp-uglify gulp-rename gulp-strip-debug gulp-less ^
 gulp-clean-css gulp-imagemin gulp-cache gulp-shell
:RUN
CALL NODE_MODULES\.BIN\GULP
PAUSE
