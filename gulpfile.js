var gulp = require('gulp'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    compass = require('gulp-compass'),
    livereload = require('gulp-livereload'),
    build = require('gulp-build'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename');

var notifyInfo = {
    title: 'Gulp'
};

var plumberErrorHandler = {
    erroHandler: notify.onError({
        title: notifyInfo.title,
        message: "Error: <%= error.message %>"
    })
};

var srcPath = 'src/',
    targetPath = 'src/',
    distPath = 'www/';

var path = {
    src : {
        sass : srcPath + 'sass/'
    },
    target : {
        sass : targetPath + 'css/'
    }
};

gulp.task('compass', function() {
  gulp.src(['./' + path.src.sass + '*.sass'])
    .pipe(plumber(plumberErrorHandler))
    .pipe(compass({
        sass : path.src.sass,
        css : path.target.sass
    }))
    .pipe(gulp.dest(path.target.sass))
    .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(path.src.sass + '*.sass', ['compass']);
    gulp.watch(srcPath + '/js/**').on('change', livereload.changed);
});

// Delete the dist directory
gulp.task('clean', function() {
    return gulp.src(distPath)
        .pipe(clean());
});

// Copy all other files to dist directlydirectly
gulp.task('concat', function() {
    gulp.src([
            './' + srcPath + 'bower_components/angular/angular.js',
            './' + srcPath + 'bower_components/angular-animate/angular-animate.min.js',
            './' + srcPath + 'bower_components/angular-translate/angular-translate.min.js',
            './' + srcPath + 'bower_components/angular-ui-router/release/angular-ui-router.min.js',
            './' + srcPath + 'js/**/*.js'
        ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./' + distPath));
});

// Copy all other files to dist directly
gulp.task('copy', ['clean'], function() {
    gulp.src([
            srcPath + 'index_prod.html'
        ])
        .pipe(rename("index.html"))
        .pipe(gulp.dest(distPath));

    gulp.src([
            srcPath + 'img/**/*.{gif,png,jpg}'
        ])
        .pipe(gulp.dest(distPath + 'img'));

    gulp.src([
            srcPath + 'css/**/*.{css,map}'
        ])
        .pipe(gulp.dest(distPath + 'css'));
});

// build prod
gulp.task('build', ['copy', 'concat'], function() {
    console.log('build done');
});

gulp.task('default', ['compass', 'watch']);
