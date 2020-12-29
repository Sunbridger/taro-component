const gulp = require('gulp');
const del = require('del');

function cleanDist(cb) {
    return del(['./dist'], cb);
}

function copyAssets() {
    return gulp.src('./src/assets/**/*').pipe(gulp.dest('./dist'));
}

exports.cleanBefore = cleanDist;
exports.cleanAfter = copyAssets;
