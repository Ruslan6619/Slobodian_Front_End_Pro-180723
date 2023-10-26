const gulp = require('gulp');
const sass = require('sass');
const gulpSass = require('gulp-sass');
const scss = gulpSass(sass);
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');

const SCSS_FOLDER = './js/hw33/style/*.scss';
const BUILD_FOLDER = './js/hw33/dist/';
const SRC_FOLDER = './js/hw33/js/*.js';


function watcher() {
    return gulp.watch([SRC_FOLDER, SCSS_FOLDER], gulp.series(copy,scssTask))
}

function copy() {
    return gulp.src(SRC_FOLDER)
        .pipe(uglify())
        .pipe(concat('build.js'))
        .pipe(gulp.dest(BUILD_FOLDER));
}

function scssTask() {
    return gulp.src(SCSS_FOLDER)
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(gulp.dest(BUILD_FOLDER));
}


gulp.task('default', gulp.series(copy, scssTask, watcher));
