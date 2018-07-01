const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const ifElse = require('gulp-if-else');
const argv = require('yargs').argv;

gulp.task('images', () => {
  gulp.src(['source/assets/images/**/*.{jpg,jpeg,png,gif}'], { base: 'source/assets/images' })
    .pipe(ifElse(argv.compress, () => imagemin()))
    .pipe(gulp.dest('build/assets/images'));
});

gulp.task('copy', function () {
  gulp.src('source/index.html')
      .pipe(gulp.dest('build/'));
});
