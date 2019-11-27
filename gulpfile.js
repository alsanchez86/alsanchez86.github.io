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
            pkg.node_modules + 'font-awesome/css/font-awesome.css',
            pkg.node_modules + '@glidejs/glide/dist/css/glide.core.min.css'
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
            pkg.node_modules + "requirejs/require.js",
            pkg.node_modules + "jquery/dist/jquery.min.js",
            pkg.node_modules + 'bootstrap/dist/js/bootstrap.bundle.min.js',
            pkg.node_modules + '@glidejs/glide/dist/glide.js',
        ])
        .pipe(gulp.dest(pkg.lib));
});

/*
 * Template tasks
 */

gulp.task('templates', [], function (done) {
    const section = ((process && process.argv && process.argv[3]) || "");
    const root = [".", "templates", "sections", section].filter(e => e).join("/").concat("/");
    const dirs = readDirs(root);

    dirs.push(root); // push root index
    dirs.map(dir => {
        let outputDir = dir.replace(root, "./");
        gulp.src(dir + "index.mustache")
            .pipe(mustache(dir +  "index.json", {
                extension: ".html"
            }, {}))
            .pipe(htmlmin({
                collapseWhitespace: true
            }))
            .pipe(gulp.dest(outputDir))
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
gulp.task('watch', ['default'], function () {
    gulp.watch([
        pkg.sass + '**/*.scss'
    ], ['default']);
});

/**
 * Read all subfolders from source folder
 *
 * @param {String} source
 * @returns {Array}
 */
function readDirs(source) {
    return fs.readdirSync(source)
        .filter(dir => fs.lstatSync(source + dir).isDirectory())
        .map(dir => (source + dir + "/"))
        .map(dir => new Array(dir).concat(readDirs(dir)))
        .reduce((acc, val) => acc.concat(val), []);
}