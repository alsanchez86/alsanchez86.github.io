'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    fs = require('fs'),
    includeTemplate = require('gulp-advanced-include-template'),
    htmlmin = require('gulp-htmlmin'),
    pkg = JSON.parse(fs.readFileSync('./package.json'));

// Css taks
gulp.task('css:sass', function () {
    return gulp.src([
            pkg.css + 'sass/main.scss'
        ])
        .pipe(
            sass.sync()
            .on('error', sass.logError)
        )
        .pipe(
            concat("main.css")
        )
        .pipe(
            gulp.dest(pkg.dist + 'css/')
        );
});

gulp.task('css:min', function () {
    return gulp.src([
            pkg.dist + 'css/main.css'
        ])
        .pipe(
            cleanCSS({
                compatibility: 'ie8'
            })
        )
        .pipe(
            rename({
                suffix: '.min'
            })
        )
        .pipe(
            gulp.dest(pkg.dist + 'css/')
        );
});

// Js tasks
gulp.task('js:lib', function () {
    return gulp.src([
            // jquery
            pkg.node_modules + "jquery/dist/jquery.min.js",
            // popper
            pkg.node_modules + 'popper.js/dist/umd/popper.min.js',
            // bootstrap
            pkg.node_modules + 'bootstrap/dist/js/bootstrap.min.js'
        ])
        .pipe(
            concat("lib.js")
        )
        .pipe(
            gulp.dest(pkg.dist + 'js/')
        );
});

gulp.task('js:custom', function () {
    return gulp.src([
            pkg.js + 'lib/jquery_cache.js',
            pkg.js + 'main.js'
        ])
        .pipe(
            concat("custom.js")
        )
        .pipe(
            gulp.dest(pkg.dist + 'js/')
        );
});

gulp.task('js:concat', function () {
    return gulp.src([
            pkg.dist + 'js/lib.js',
            pkg.dist + 'js/custom.js'
        ])
        .pipe(
            concat("main.js")
        )
        .pipe(
            gulp.dest(pkg.dist + 'js/')
        );
});

gulp.task('js:min', function () {
    return gulp.src([
            pkg.dist + 'js/**/*.js',
            '!' + pkg.dist + 'js/**/*.min.js'
        ])
        .pipe(
            uglify()
            .on('error', function (e) {
                console.log(e);
            })
        )
        .pipe(
            rename({
                suffix: '.min'
            })
        )
        .pipe(
            gulp.dest(pkg.dist + 'js/')
        );
});

// Template tasks
gulp.task('template:index', function() {
    gulp.src("./partials/index.html")
        .pipe(includeTemplate())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./'))
});

gulp.task('template:perfil', function() {
    gulp.src("./partials/perfil/index.html")
        .pipe(includeTemplate())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./perfil'))
});

// Enviroment tasks
gulp.task('watch', ['default'], function () {
    gulp.watch([
        pkg.css + 'sass/**/*.scss'
    ], ['default']);
});

gulp.task('dev', [], function (done) {
    runSequence('css:sass', 'js:lib', 'js:custom', 'js:concat', 'template:index', 'template:perfil', function () {
        done();
    });
});

gulp.task('prod', [], function (done) {
    runSequence('css:sass', 'css:min', 'js:lib', 'js:custom', 'js:concat', 'js:min', 'template:index', 'template:perfil', function () {
        done();
    });
});

gulp.task('default', ["dev"]);