let gulp = require('gulp');
let browserSync = require('browser-sync');
let sass = require('gulp-sass');

gulp.task('sync',function(){
    browserSync.init({
        server:{
            baseDir:'./',
        }
    });
    gulp.watch(["**/*.html","**/*.js","**/*.css"]).on('change',browserSync.reload);
});

gulp.task('sass',function(){
    return gulp.src('app/scss/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('src/css'));
});
