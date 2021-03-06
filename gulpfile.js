"use strict";

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var uncss = require('gulp-uncss');
var concatjs = require('gulp-concat');
var minifyjs = require('gulp-minify');


// Concat js
gulp.task('scripts', function() {
    return gulp.src('js-custom/*.js')
        .pipe(concatjs('common.js'))
        .pipe(minifyjs(''))
        .pipe(gulp.dest('app/js/'))
        .pipe(connect.reload());
});

//Local Server(localhost:8080)
gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
});


// Sass
gulp.task('sass', function () {
    gulp.src('sass/style.scss')
        .pipe(sass())
        .pipe(concatCss("style.min.css"))
        .pipe(prefix('last 15 versions'))
        .pipe(minifyCSS(''))
        .pipe(gulp.dest('app/css/'))
        .pipe(connect.reload());
});


//Html
gulp.task('html', function(){
    gulp.src('app/*.html')
        .pipe(connect.reload());
});

//Watch
gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', ['html']);
    gulp.watch('js-custom/*.js', ['scripts']);
});

gulp.task('default', ['connect', 'html', 'sass', 'scripts', 'watch']);