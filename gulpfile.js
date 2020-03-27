const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => tsProject
  .src()
  .pipe(tsProject())
  .js.pipe(gulp.dest('dist'))
);
