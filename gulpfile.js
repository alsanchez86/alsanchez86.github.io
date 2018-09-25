'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const runSequence = require('run-sequence');
const fs = require('fs');
const mustache = require("gulp-mustache");
const htmlmin = require('gulp-htmlmin');
const pkg = JSON.parse(fs.readFileSync('./package.json'));

/*
 * Css taks
 */
gulp.task('css:scss', function () {
    return gulp.src([pkg.scss + 'main.scss'])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat("main.css"))
        .pipe(gulp.dest(pkg.dist + 'css/'));
});

gulp.task('css:min', function () {
    return gulp.src([pkg.dist + 'css/main.css'])
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(pkg.dist + 'css/'));
});

/*
 * Js tasks
 */
gulp.task('js:lib', function () {
    return gulp.src([
            // jquery
            pkg.node_modules + "jquery/dist/jquery.min.js",
            // popper
            pkg.node_modules + 'popper.js/dist/umd/popper.min.js',
            // bootstrap
            pkg.node_modules + 'bootstrap/dist/js/bootstrap.min.js',
            // transition for zoom out zoom.js
            pkg.lib + 'transition.js',
            // zoom.js
            pkg.lib + 'zoom.js/js/zoom.js'
        ])
        .pipe(concat("lib.js"))
        .pipe(gulp.dest(pkg.dist + 'js/'));
});

gulp.task('js:custom', function () {
    return gulp.src([
            // jquery cache
            pkg.js + 'jquery_cache.js',
            pkg.js + 'main.js'
        ])
        .pipe(concat("custom.js"))
        .pipe(gulp.dest(pkg.dist + 'js/'));
});

gulp.task('js:concat', function () {
    return gulp.src([
            pkg.dist + 'js/lib.js',
            pkg.dist + 'js/custom.js'
        ])
        .pipe(concat("main.js"))
        .pipe(gulp.dest(pkg.dist + 'js/'));
});

gulp.task('js:min', function () {
    return gulp.src([
            pkg.dist + 'js/**/*.js',
            '!' + pkg.dist + 'js/**/*.min.js'
        ])
        .pipe(uglify().on('error', function (e) {
            console.log(e);
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(pkg.dist + 'js/'));
});

/*
 * Template tasks
 */
// inicio
gulp.task('template:inicio', function () {
    gulp.src("./templates/sections/inicio/index.mustache")
        .pipe(mustache("./templates/sections/inicio/index.json", {
            extension: ".html"
        }, {}))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./'))
});
// perfil
gulp.task('template:perfil', function () {
    gulp.src("./templates/sections/perfil/index.mustache")
        .pipe(mustache("./templates/sections/perfil/index.json", {
            extension: ".html"
        }, {}))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./perfil'))
});
// portfolio
gulp.task('template:portfolio', function () {
    gulp.src("./templates/sections/portfolio/index.mustache")
        .pipe(mustache("./templates/sections/portfolio/index.json", {
            extension: ".html"
        }, {}))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./portfolio'))
});
// blog
gulp.task('template:blog', function () {
    gulp.src("./templates/sections/blog/index.mustache")
        .pipe(mustache("./templates/sections/blog/index.json", {
            extension: ".html"
        }, {}))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./blog'))
});
// contacto
gulp.task('template:contacto', function () {
    gulp.src("./templates/sections/contacto/index.mustache")
        .pipe(mustache("./templates/sections/contacto/index.json", {
            extension: ".html"
        }, {}))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./contacto'))
});
// 404
gulp.task('template:404', function () {
    gulp.src("./templates/sections/404/index.mustache")
        .pipe(mustache("./templates/sections/404/index.json", {
            extension: ".html"
        }, {}))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./'))
});

/*
 * Enviroment tasks
 */
// templates
gulp.task('templates', [], function (done) {
    runSequence('template:inicio', 'template:perfil', 'template:portfolio', 'template:blog', 'template:contacto', 'template:404', function () {
        done();
    });
});
// dev
gulp.task('dev', [], function (done) {
    runSequence('css:scss', 'js:lib', 'js:custom', 'js:concat', 'templates', function () {
        done();
    });
});
// prod
gulp.task('prod', [], function (done) {
    runSequence('css:scss', 'css:min', 'js:lib', 'js:custom', 'js:concat', 'js:min', 'templates', function () {
        done();
    });
});
// default
gulp.task('default', ["dev"]);

/*
 * Watchers
 */
gulp.task('watch', ['default'], function () {
    gulp.watch([
        pkg.scss + '**/*.scss'
    ], ['default']);
});