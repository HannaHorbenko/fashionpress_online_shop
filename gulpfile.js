'use strict';

let gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require("gulp-rename"),
    clean = require('gulp-clean'),
    rigger       = require('gulp-rigger'),
    uglify       = require('gulp-uglify-es').default,
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    zopfli       = require('imagemin-zopfli'),
    mozjpeg      = require('imagemin-mozjpeg'),
    giflossy     = require('imagemin-giflossy'),
    jpegtran     = require('imagemin-jpegtran');


gulp.task('html', () => {
    return gulp.src("src/*.html")
        .pipe(rigger())
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());

})

gulp.task('favicon', () => {
    return gulp.src("src/favicon.*")
        .pipe(gulp.dest("dist"))
})


gulp.task('sass', () => {
    return gulp.src("src/scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        })
            .on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('clean', () => {
    return gulp.src("dist", {
        read: false,
        allowEmpty: true
    })
        .pipe(clean({ force: true }));
})

gulp.task('js', () => {
    return gulp.src(['src/js/main.js'])
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('images', () => {
    return gulp.src('src/img/**/*.*')
        .pipe(imagemin([
            pngquant({
                speed: 1,
                quality: [0.95, 1]
            }),
            zopfli({more: true}),
            giflossy({
                optimizationLevel: 3,
                optimize: 3,
                lossy: 2
            }),
            imagemin.svgo({
                plugins: [{
                    removeViewBox: false
                }]
            }),
            jpegtran({
                progressive: true
            }),
            mozjpeg({
                quality: 90
            })
        ]))
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.stream());
});



gulp.task('serve', gulp.series('html', 'favicon', 'sass', 'js', () => {

    browserSync.init({
        server: "./dist/"
    });

    gulp.watch("src/scss/**/*.scss", gulp.parallel('sass'));
    gulp.watch("src/js/**/*.js", gulp.parallel('js'));
    gulp.watch("src/**/*.html", gulp.parallel('html'));
}));

gulp.task('default', gulp.series('clean', 'images', 'serve'));