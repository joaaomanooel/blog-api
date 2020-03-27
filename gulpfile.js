const { src, series, dest, watch: gulpWatch } = require('gulp');
const gulpClean = require('gulp-clean');
const ts = require('gulp-typescript');

const JSON_FILES = 'src/**/*.json';
const TS_FILES = 'src/**/*.ts';

const tsProject = ts.createProject('tsconfig.json');

const scripts = () => tsProject.src().pipe(tsProject()).js.pipe(dest('dist'));
const clean = () => src('dist', { allowEmpty: true }).pipe(gulpClean());
const handleStaticFiles = () => src([JSON_FILES]).pipe(dest('dist'));
const watcher = () => gulpWatch([TS_FILES, JSON_FILES], build());
const build = () => series(clean, handleStaticFiles, scripts);
const watch = () => series(build(), watcher);

exports.watch = watch();
exports.build = build();
exports.default = watch();
