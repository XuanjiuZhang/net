var gulp = require('gulp')
var del = require('del')

function cleanImg() {
  return del([
    './dist/img/**/*',
  ])
}

function copyImg() {
  return gulp.src(['./src/img/**/*'])
    .pipe(gulp.dest('./dist/img'))
}

function cleanLib() {
  return del([
    './dist/lib/**/*',
  ]);
}

function copyLib() {
  return gulp.src(['./src/lib/**/*'])
    .pipe(gulp.dest('./dist/lib'))
}

function cleanStyle() {
  return del([
    './dist/style/*',
  ]);
}

function copyStyle() {
  return gulp.src(['./src/style/**/*'])
    .pipe(gulp.dest('./dist/style'))
}

gulp.task('copy', gulp.series(
  cleanImg,
  cleanLib,
  cleanStyle,
  copyImg,
  copyLib,
  copyStyle
))