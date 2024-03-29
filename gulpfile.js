'use strict';

const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('./package.json'));
const gulp = require('gulp');
const { series } = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const mustache = require('gulp-mustache');
const htmlmin = require('gulp-htmlmin');

/**
 * Read all subfolders from source folder
 *
 * @param {String} source
 * @returns {Array}
 */
function readDirs(source) {
  return fs
    .readdirSync(source)
    .filter((dir) => fs.lstatSync(source + dir).isDirectory())
    .map((dir) => source + dir + '/')
    .map((dir) => new Array(dir).concat(readDirs(dir)))
    .reduce((acc, val) => acc.concat(val), []);
}

/*
 * Css tasks
 */
function sassCompile() {
  return gulp
    .src([pkg.sass + 'main.scss'])
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concat('sass.css'))
    .pipe(gulp.dest(pkg.css));
}

function cssLibs() {
  return gulp
    .src([
      pkg.node_modules + 'font-awesome/css/font-awesome.css',
      pkg.node_modules + '@glidejs/glide/dist/css/glide.core.min.css',
      pkg.node_modules + 'bootstrap4-toggle/css/bootstrap4-toggle.min.css',
    ])
    .pipe(concat('lib.css'))
    .pipe(gulp.dest(pkg.css));
}

function cssConcat() {
  return gulp
    .src([pkg.css + 'sass.css', pkg.css + 'lib.css'], { allowEmpty: true })
    .pipe(concat('main.css'))
    .pipe(gulp.dest(pkg.css));
}

function cssMin() {
  return gulp
    .src([pkg.css + 'main.css'])
    .pipe(
      cleanCSS({
        compatibility: 'ie8',
      }),
    )
    .pipe(
      rename({
        suffix: '.min',
      }),
    )
    .pipe(gulp.dest(pkg.css));
}

/*
 * Js tasks
 */
function jsLibs() {
  return gulp
    .src([
      `${pkg.node_modules}requirejs/require.js`,
      `${pkg.node_modules}jquery/dist/jquery.min.js`,
      `${pkg.node_modules}bootstrap/dist/js/bootstrap.bundle.min.js`,
      `${pkg.node_modules}@glidejs/glide/dist/glide.js`,
      `${pkg.node_modules}bootstrap4-toggle/js/bootstrap4-toggle.min.js`,
    ])
    .pipe(gulp.dest(pkg.lib));
}

/*
 * Template tasks
 */
function templates(cb) {
  const languages = [
    {
      id: 'es',
      isRoot: true,
    },
    {
      id: 'en',
      isRoot: false,
    },
  ];
  const root = ['.', 'src', 'templates', 'sections', 'home']
    .join('/')
    .concat('/');
  const dirs = readDirs(root);

  dirs.push(root); // push root index
  dirs.map((dir) => {
    languages.map((language) => {
      const outputDir = dir.replace(root, './' + language.id);

      compileTemplate({ dir, language, outputDir });

      if (language.isRoot) {
        compileTemplate({ dir, language, outputDir: './' });
      }
    });
  });

  cb();
}

function compileTemplate({ dir, language, outputDir }) {
  gulp
    .src(dir + 'index.mustache')
    .pipe(
      mustache(
        `${dir}index.json`,
        {
          extension: '.mustache',
        },
        {},
      ),
    )
    .pipe(
      mustache(
        `${dir}${language.id}.json`,
        {
          extension: '.html',
        },
        {},
      ),
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      }),
    )
    .pipe(gulp.dest(outputDir));
}

exports.default = series(
  sassCompile,
  cssLibs,
  cssConcat,
  cssMin,
  jsLibs,
  templates,
);
