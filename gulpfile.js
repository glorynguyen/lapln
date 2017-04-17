var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');

//Style
gulp.task('styles', function() {
    gulp.src('app/assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/assets/css/'));
});
//Concat

gulp.task('watch', ['styles','concat'], function() {
  browserSync.reload();
});

gulp.task('concat', ['styles'], function() {
	gulp.src("app/assets/css/**/**.css")
      	.pipe(concat('main.css'))
      	.pipe(gulp.dest('app/assets/styles'));
});
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
    // gulp.watch("app/**/*.*").on('change', browserSync.reload);
    gulp.watch("app/**/*.*",['watch']);
});

gulp.task('default',['browser-sync','styles','concat'], function() {
  // place code for your default task here
});