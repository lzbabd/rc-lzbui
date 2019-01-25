const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

let postcssPlugins = [
  require('postcss-flexbugs-fixes'),
  autoprefixer({
    browsers: [
      '>1%',
      'last 4 versions',
      'Firefox ESR',
      'not ie < 9',
    ],
    flexbox: 'no-2009',
  })
];
gulp.task('default', ['transformLess']);
gulp.task('transformLess', () =>
  gulp.src('src/components/**/*.less')
    .pipe(postcss(postcssPlugins))
    .pipe(less())
    .pipe(gulp.dest('src/components/'))
);

gulp.task('watch', () => {
  gulp.watch('src/**/*.*', ['default']);
})
