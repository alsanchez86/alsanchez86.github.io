'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const runSequence = require('run-sequence');
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('./package.json'));

/*
 * Css tasks
 */
gulp.task('css:sass', function () {
    return gulp.src([pkg.sass + 'main.scss'])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat("sass.css"))
        .pipe(gulp.dest(pkg.build + 'css/'));
});

gulp.task('css:lib', function () {
    return gulp.src([
            pkg.node_modules + 'font-awesome/css/font-awesome.css'
        ])
        .pipe(concat("lib.css"))
        .pipe(gulp.dest(pkg.build + 'css/'));
});

gulp.task('css:concat', function () {
    return gulp.src([
            pkg.build + 'css/sass.css',
            pkg.build + 'css/lib.css'
        ])
        .pipe(concat("main.css"))
        .pipe(gulp.dest(pkg.build + 'css/'));
});

gulp.task('css:min', function () {
    return gulp.src([pkg.build + 'css/main.css'])
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(pkg.build + 'css/'));
});


/*
 * Js tasks
 */
gulp.task('js:lib', function () {
    return gulp.src([
            // requirejs
            pkg.node_modules + "requirejs/require.js",
            // jquery
            pkg.node_modules + "jquery/dist/jquery.min.js",
            // bootstrap
            pkg.node_modules + 'bootstrap/dist/js/bootstrap.bundle.min.js'
        ])
        .pipe(gulp.dest(pkg.lib));
});

/*
 * Environments tasks
 */
// prod
gulp.task('prod', [], function (done) {
    runSequence('css:sass', 'css:lib', 'css:concat', 'css:min', 'js:lib', function () {
        done();
    });
});
// default
gulp.task('default', ["prod"]);

/*
 * Watchers
 */
gulp.task('watch', ['default'], function () {
    gulp.watch([
        pkg.sass + '**/*.scss'
    ], ['default']);
});