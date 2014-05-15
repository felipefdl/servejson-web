/*jslint node:true*/
'use strict';

var gulp       = require('gulp');
var jslint     = require('gulp-jslint');
var uglify     = require('gulp-uglify');
var imagemin   = require('gulp-imagemin');
var jade       = require('gulp-jade');
var browserify = require('gulp-browserify');

gulp.task('copy_and_paste', function () {
    gulp.src('./src/fonts/*')
        .pipe(gulp.dest('./dist/fonts'));
    gulp.src('./src/scripts/vendor/*')
        .pipe(gulp.dest('./dist/scripts/vendor'));
    gulp.src('./src/styles/*.css')
        .pipe(gulp.dest('./dist/styles'));
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
            'debug': true
        }))
        // .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts/app'));
});

gulp.task('images', function () {
    gulp.src('./src/images/*')
        .pipe(imagemin({ 'optimizationLevel': 5 }))
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('templates', function () {
    gulp.src('./src/templates/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./dist/templates'));
});

gulp.task('watch', function () {
    gulp.watch('./src/scripts/app/**/*.js', ['jslint', 'scripts']);
    gulp.watch('./src/templates/**/*.jade', ['templates']);
});

gulp.task('default', ['jslint', 'copy_and_paste', 'scripts', 'images', 'templates']);
