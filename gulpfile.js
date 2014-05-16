/*jslint node:true, nomen:true*/
'use strict';

var gulp       = require('gulp');
var jslint     = require('gulp-jslint');
var imagemin   = require('gulp-imagemin');
var browserify = require('gulp-browserify');
var less       = require('gulp-less');
var minifyCSS  = require('gulp-minify-css');
var path       = require('path');

gulp.task('copy_and_paste', function () {
    gulp.src('./src/fonts/*')
        .pipe(gulp.dest('./dist/fonts'));
    gulp.src('./src/scripts/vendor/*')
        .pipe(gulp.dest('./dist/scripts/vendor'));
    gulp.src('./src/styles/*.css')
        .pipe(gulp.dest('./dist/styles'));
    gulp.src('./src/images/*')
        .pipe(gulp.dest('./dist/images'));
    gulp.src('./src/robots.txt')
        .pipe(gulp.dest('./dist'));
});

gulp.task('jslint', function () {
    var jslintconfig = {
        'errorsOnly': true
    };
    gulp.src('./*.js')
        .pipe(jslint(jslintconfig));
    gulp.src('./src/scripts/app/**/*.js')
        .pipe(jslint(jslintconfig));
});

gulp.task('scripts', function () {
    gulp.src('./src/scripts/app/servejson.js')
        .pipe(jslint())
        .pipe(browserify({
            'insertGlobals': false,
            'debug': false
        }))
        .pipe(gulp.dest('./dist/scripts/app'));
});

gulp.task('less', function () {
    gulp.src('./src/styles/**/*.less')
        .pipe(less({
            'paths': [ path.join(__dirname, 'src', 'styles', 'includes') ]
        }))
        .pipe(minifyCSS({keepBreaks: true}))
        .pipe(gulp.dest('./dist/styles'));
});

gulp.task('images', function () {
    gulp.src('./src/images/*')
        .pipe(imagemin({ 'optimizationLevel': 5 }))
        .pipe(gulp.dest('./src/images'));
});

gulp.task('watch', function () {
    gulp.watch('./src/scripts/app/**/*.js', ['jslint', 'scripts']);
    gulp.watch('./src/styles/**/*.less', ['less']);
    gulp.watch('./src/images/**/*', ['images', 'copy_and_paste']);
    gulp.watch('./src/fonts/**/*', ['copy_and_paste']);
});

gulp.task('default', ['jslint', 'copy_and_paste', 'scripts', 'less']);
