const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
const autoprefixer = require('gulp-autoprefixer');

const browserSync = require('browser-sync').create();

gulp.task('copyJS', function() {
  return gulp.src('app/js/*.js')
    .pipe(gulp.dest('public/js/'));
});


gulp.task('minifyJS', function() {
   return pipeline(
         gulp.src('app/js/*.js'),
         uglify(),
         gulp.dest('public/js/')
   );
 });

 gulp.task('autoPrefixCSS', function() {
    gulp.src('app/css/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('public/css/'))
});

gulp.task('sassToCSS', function() {
  return gulp.src('app/scss/*.scss')
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
        cascade: false
    }))
    .on('error', console.error.bind(console))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'public'
  });
  browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('watchFiles', function() {
  gulp.watch('app/scss/*.scss', gulp.series('sassToCSS'));
  gulp.watch('app/js/*.js', gulp.series('copyJS'));
});

gulp.task('default', gulp.parallel('watchFiles', 'serve'));
