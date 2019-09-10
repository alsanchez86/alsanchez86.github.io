'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('./package.json'));

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
            pkg.node_modules + 'bootstrap/dist/js/bootstrap.min.js'
        ])
        .pipe(gulp.dest(pkg.lib));
});

/*
 * Environments tasks
 */
// prod
gulp.task('prod', [], function (done) {
    runSequence('js:lib', function () {
        done();
    });
});
// default
gulp.task('default', ["prod"]);