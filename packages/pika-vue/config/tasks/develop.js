const gulp = require('gulp');
const debug = require('gulp-debug');
const changed = require('gulp-changed');

const ts = require('gulp-typescript');
const tsProject = ts.createProject('./tsconfig.json');
const minify = require('gulp-minify');

const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const babel = require('gulp-babel');

function compileTsChanged() {
    return tsProject
        .src()
        .pipe(changed('./dist', { extension: '.js' }))
        .pipe(debug({ title: '编译: ' }))
        .pipe(tsProject())
        .js.pipe(
            babel({
                presets: ['es2015'],
            })
        )
        .pipe(
            minify({
                ext: {
                    src: '-debug.js',
                    min: '.js',
                },
                noSource: true,
            })
        )
        .pipe(gulp.dest('./dist'));
}

function compileCssChanged() {
    return gulp
        .src('./src/style/**/*.scss')
        .pipe(changed('./dist/style', { extension: '.css' }))
        .pipe(debug({ title: '编译: ' }))
        .pipe(
            sass({
                includePaths: ['./node_modules', '../../node_modules'],
            }).on('error', sass.logError)
        )
        .pipe(gulp.dest('./dist/style'));
}

function compileVueChanged() {
    return gulp
        .src('./src/**/*.vue')
        .pipe(changed('./dist'))
        .pipe(debug({ title: '编译: ' }))
        .pipe(gulp.dest('./dist'));
}

function compileAssetChanged() {
    return gulp
        .src('./src/assets/**/*')
        .pipe(changed('./dist/assets'))
        .pipe(debug({ title: '编译: ' }))
        .pipe(gulp.dest('./dist'));
}

function watch() {
    gulp.watch('./src/**/*.vue', compileVueChanged);
    gulp.watch('./src/**/*.ts', compileTsChanged);
    gulp.watch('./src/style/**/*.scss', compileCssChanged);
    gulp.watch('./src/assets/**/*', compileAssetChanged);
}

exports.watch = watch;
