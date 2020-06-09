// Подлючаем модули галппа
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();

const cssFiles = [
    './src/css/fontello.css',
    './src/add-new/add-new.css',
    './src/header/header.css',
    './src/loader/loader.css',
    './src/login-modal/login-modal.css',
    './src/nav/main-nav/main-nav.css',
    './src/nav/title-nav/title.css',
    './src/search-form/button/button.css',
    './src/search-form/input/input.css',
    './src/search-form/search-form.css',
    './src/select-form/selected/selected.css',
    './src/css/style.css'
];

const jsFiles = [
    './src/loader/loader.js',
    './src/js/script.js',
    './src/add-new/add-new.js',
    './src/login-modal/login-modal.js',
    './src/search-form/button/button.js',
    './src/search-form/input/input.js',
    './src/select-form/selected/selected.js'
];

const fontFiles = [
    './src/font/fontello.eot',
    './src/font/fontello.svg',
    './src/font/fontello.ttf',
    './src/font/fontello.woff',
    './src/font/fontello.woff2',
];

//Таск на стили CSS
function styles() {
    return gulp.src(cssFiles)
        .pipe(concat('style.css'))
        // Добавить префиксы
        .pipe(autoprefixer({
            cascade: false
        }))
        // Минификация CSS
        .pipe(cleanCSS({
            level: 2
        }))
        //Выходная папка для стилей
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

function font() {
    return gulp.src(fontFiles)

        //Выходная папка для стилей
        .pipe(gulp.dest('./build/font'))
        .pipe(browserSync.stream());
}

//Таск на крипты JS
function scripts() {
    return gulp.src(jsFiles)
        .pipe(concat('script.js'))
//
        .pipe(uglify())
        //Выходная папка для стилей
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

function clean(){
    return del(['build/*'])
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./src/css/**/*.css',styles);
    gulp.watch('./src/add-new/**/*.css',styles);
    gulp.watch('./src/header/**/*.css',styles);
    gulp.watch('./src/login-modal/**/*.css',styles);
    gulp.watch('./src/nav/**/*.css',styles);
    gulp.watch('./src/search-form/**/*.css',styles);
    gulp.watch('./src/select-form/**/*.css',styles);
    gulp.watch('./src/js/**/*.js',scripts);
    gulp.watch("./*.html").on('change', browserSync.reload)
}

// Таск вызывающий функцию styles
gulp.task('styles', styles);
// Таск вызывающий функцию scripts
gulp.task('scripts', scripts);

gulp.task('font', font);

gulp.task('watch', watch);

gulp.task('build', gulp.series(clean, gulp.parallel(styles,scripts,font)));

gulp.task('dev', gulp.series('build','watch'));