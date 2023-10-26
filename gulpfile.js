const gulp = require('gulp');
const sass = require('sass');
const gulpSass = require('gulp-sass');
const scss = gulpSass(sass);
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');

const SCSS_FOLDER = './js/hw33/style/*.scss';
const BUILD_FOLDER = './js/hw33/dist/';
const SRC_FOLDER = './js/hw33/js/*.js';

function watcher() {
    return gulp.watch([SRC_FOLDER, SCSS_FOLDER], gulp.series(lint, copy, scssTask, jsTask));
}

function copy() {
    return gulp.src(SRC_FOLDER)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('build.js'))
        .pipe(gulp.dest(BUILD_FOLDER));
}

function scssTask() {
    return gulp.src(SCSS_FOLDER)
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(gulp.dest(BUILD_FOLDER));
}

function jsTask() {
    return gulp.src(SRC_FOLDER)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(BUILD_FOLDER));
}

function lint() {
    return gulp.src(SRC_FOLDER)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

gulp.task('default', gulp.series(lint, copy, scssTask, jsTask, watcher));
