var gulp = require('gulp'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    compass = require('gulp-compass'),
    livereload = require('gulp-livereload'),
    build = require('gulp-build'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css');

var notifyInfo = {
    title: 'Gulp'
};

var plumberErrorHandler = {
    erroHandler: notify.onError({
        title: notifyInfo.title,
        message: "Error: <%= error.message %>"
    })
};

var fontName = 'Reviens';

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
    gulp.watch(srcPath + '/js/**/*.js').on('change', livereload.changed);
    gulp.watch(srcPath + '/partials/*.html').on('change', livereload.changed);
});

gulp.task('Iconfont', function(){
    gulp.src([srcPath + 'img/icons/*.svg'])
        .pipe(iconfontCss({
            fontName: fontName,
            path: srcPath + 'sass/templates/_icons.scss',
            targetPath: '../sass/_icons.scss',
            fontPath: '../fonts/'
        }))
        .pipe(iconfont({
            fontName: fontName, // required
            fixedWidth: true,
            centerHorizontally: true,
            normalize: true,
            // descent:
            appendCodepoints: true // recommended option
        }))
        .on('codepoints', function(codepoints, options) {
            // CSS templating, e.g.
            console.log(codepoints, options);
        })
        .pipe(gulp.dest(srcPath + 'fonts/'));
});

// Delete the dist directory
gulp.task('clean', function() {
    return gulp.src(distPath)
        .pipe(clean());
});

// Copy all other files to dist directly
gulp.task('concat', function() {
    gulp.src([
            './' + srcPath + 'bower_components/angular/angular.js',
            './' + srcPath + 'bower_components/angular-animate/angular-animate.min.js',
            './' + srcPath + 'bower_components/angular-translate/angular-translate.min.js',
            './' + srcPath + 'bower_components/angular-translate-loader-partial/angular-translate-loader-partial.min.js',
            './' + srcPath + 'bower_components/angular-ui-router/release/angular-ui-router.min.js',,
            './' + srcPath + 'js/app.js',
            './' + srcPath + 'js/reviens.js',
            './' + srcPath + 'js/modules/*.js'
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
            srcPath + 'fonts/**/*.{eot,svg,ttf,woff}'
        ])
        .pipe(gulp.dest(distPath + 'fonts'));

    gulp.src([
            srcPath + 'partials/**/*.html'
        ])
        .pipe(gulp.dest(distPath + 'partials'));

    gulp.src([
            srcPath + 'translations/**/*.json'
        ])
        .pipe(gulp.dest(distPath + 'translations'));

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
