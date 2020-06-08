// Подлючаем модули галппа
const gulp = require('gulp');
const concat = require('gulp-concat');

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

//Таск на стили CSS
function styles() {
    return gulp.src(cssFiles)
        .pipe(concat('style.css'))
        //Выходная папка для стилей
        .pipe(gulp.dest('./build/css'))
}

//Таск на крипты JS
function scripts() {
    return gulp.src(jsFiles)
        .pipe(concat('script.js'))
        //Выходная папка для стилей
        .pipe(gulp.dest('./build/js'))
}

// Таск вызывающий функцию styles
gulp.task('styles', styles);
// Таск вызывающий функцию scripts
gulp.task('scripts', scripts);