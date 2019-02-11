var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
let cleanCSS = require('gulp-clean-css');
// var pug = require('gulp-pug');

gulp.task('styles', function () {
  return gulp.src('./dev/style/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(gulp.dest('./dest/style'));
});
// gulp.task('pug', function buildHTML() {
//   return gulp.src('./dev/pages/*.pug')
//   .pipe(gulp.dest('./'));
// });

gulp.task('watch', function () {
   gulp.watch('**/*.less', gulp.series(['styles']));
});



gulp.task('default', gulp.series(['styles', 'watch']));
