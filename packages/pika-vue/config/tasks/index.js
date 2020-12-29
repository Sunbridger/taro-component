const gulp = require('gulp');
const { compile } = require('./compile');
const { cleanBefore, cleanAfter } = require('./dealFile')

exports.default = gulp.series(cleanBefore, compile, cleanAfter);