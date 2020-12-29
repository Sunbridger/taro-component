const gulp = require('gulp');

const ts = require('gulp-typescript');
const tsProject = ts.createProject('./tsconfig.json');

const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const minify = require('gulp-minify');

const babel = require('gulp-babel');

function compileTypescript() {
    return tsProject
        .src()
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

function compileScss() {
    return gulp
        .src('./src/style/**/*.scss')
        .pipe(
            sass({
                includePaths: ['./node_modules', '../../node_modules'],
            }).on('error', sass.logError)
        )
        .pipe(gulp.dest('./dist/style'));
}

function delTemplate() {
    return (
        gulp
            .src('./src/**/*.vue')
            //     .pipe(replace(/\<style lang=\"css\"\>(.*?)\<\/style\>/g, function(){
            //         let relativePath=this.file.relative.replace(/\/index.vue/,'.css');
            //         return `<style lang="css">
            //     @import "~${package.name}/dist/style/${relativePath}";
            // </style>`;
            //     }))
            .pipe(gulp.dest('./dist'))
    );
}

exports.compileTypescript = compileTypescript;
exports.compileScss = compileScss;
exports.delTemplate = delTemplate;

// 分别处理js,sass,vue文件, 并行处理
exports.compile = gulp.parallel(compileTypescript, compileScss, delTemplate);
