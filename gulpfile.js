var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('sync',function(){
    browserSync.init({
        server:{
            baseDir:'./',
        }
    });
    gulp.watch(["**/*.html","**/*.js","**/*.css"]).on('change',browserSync.reload);
});