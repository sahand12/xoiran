const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');
const glob = require('fast-glob');

gulp.task('default', ['browser-sync'], () => {

});
gulp.task('browser-sync', ['nodemon', 'sass:watch'], () => {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    files: ['public/**/*.*', 'views/**/*.*'],
    browser: 'google chrome',
    port: 7000,
  });
});

gulp.task('nodemon', cb => {
  let started = false;
  return nodemon({
    script: 'index.js',
  })
    .on('start', () => {
      if (!started) {
        cb();
        started = true;
      }
    });
});

gulp.task('sass', () => {
  return glob('./public/**/*.scss')
    .then(files => gulp.src(files)
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./public/css'))
    );
});

gulp.task('sass:watch', () => {
  gulp.watch('./public/css/**/*.scss', ['sass']);
});
