'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const rm = require('gulp-rm');
const runSequence = require('run-sequence');
const fs = require('fs');
const mustache = require("gulp-mustache");
const htmlmin = require('gulp-htmlmin');
const pkg = JSON.parse(fs.readFileSync('./package.json'));

/*
 * Css tasks
 */

gulp.task('css:reset', function () {
    return gulp.src(pkg.css + '**/*', {
            read: false
        })
        .pipe(rm())
});

gulp.task('css:sass', function () {
    return gulp.src([pkg.sass + 'main.scss'])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat("sass.css"))
        .pipe(gulp.dest(pkg.css));
});

gulp.task('css:lib', function () {
    return gulp.src([
            pkg.node_modules + 'font-awesome/css/font-awesome.css'
        ])
        .pipe(concat("lib.css"))
        .pipe(gulp.dest(pkg.css));
});

gulp.task('css:concat', function () {
    return gulp.src([
            pkg.css + 'sass.css',
            pkg.css + 'lib.css'
        ])
        .pipe(concat("main.css"))
        .pipe(gulp.dest(pkg.css));
});

gulp.task('css:min', function () {
    return gulp.src([pkg.css + 'main.css'])
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(pkg.css));
});

gulp.task('css:clean', function () {
    return gulp.src([pkg.css + 'lib.css', pkg.css + 'sass.css'], {
            read: false
        })
        .pipe(rm())
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
 * Template tasks
 */

// 404
gulp.task('template:404', function () {
    gulp.src("./templates/sections/404/404.mustache")
        .pipe(mustache("./templates/sections/404/index.json", {
            extension: ".html"
        }, {}))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./'))
});

// home
gulp.task('template:home', function () {
    gulp.src("./templates/sections/home/index.mustache")
        .pipe(mustache("./templates/sections/home/index.json", {
            extension: ".html"
        }, {}))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./'))
});

// profile
gulp.task('template:profile', function () {
    gulp.src("./templates/sections/profile/index.mustache")
        .pipe(mustache("./templates/sections/profile/index.json", {
            extension: ".html"
        }, {}))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./perfil/'))
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
        .pipe(gulp.dest('./portfolio/'))
});

// templates
gulp.task('templates', [], function (done) {
    runSequence(['template:404', 'template:home', 'template:profile', 'template:portfolio'], function () {
        done();
    });
});

/*
 * Environments tasks
 */

// prod
gulp.task('prod', [], function (done) {
    runSequence('css:reset', 'css:sass', 'css:lib', 'css:concat', 'css:min', 'css:clean', 'js:lib', 'templates', function () {
        done();
    });
});

// default
gulp.task('default', ["prod"]);

/*
 * Watchers
 */
// gulp.task('watch', ['default'], function () {
//     gulp.watch([
//         pkg.sass + '**/*.scss'
//     ], ['default']);
// });