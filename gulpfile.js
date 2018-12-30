let gulp = require('gulp');
let browserSync = require('browser-sync');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');

gulp.task('sync',function(){
    browserSync.init({
        server:{
            baseDir:'./',
        }
    });
    gulp.watch(["**/*.html","**/*.js","**/*.css"]).on('change',browserSync.reload);
});

gulp.task('sass',function(){
    let sassInit = function(){
        return gulp.src('app/scss/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('src/css'));
    }
    gulp.watch('app/scss/*.scss',sassInit);
});

gulp.task('minify', function () {
    let minifyInit = function(){
        return gulp.src(["src/css/*.css","!src/css/*.min.css"])
            .pipe(cleanCSS())
            .pipe(rename(
                {
                    suffix: '.min'
                }
            ))
            .pipe(gulp.dest('src/css'));
    }
    gulp.watch("src/css/*.css").on('change', minifyInit);
});