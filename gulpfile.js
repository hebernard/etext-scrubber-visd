var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss');

    sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp.src('./src/styles/styles.scss')
  .pipe(sourcemaps.init())
  .pipe(postcss([ autoprefixer({grid: true}) ]))
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./src/css/'))
  // .pipe(gulp.dest('./public/styles/'));
});

gulp.task('watch', function() {
  return gulp.watch('./src/styles/*', gulp.series('sass'));
});

