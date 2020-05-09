var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function(done) {
    gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss'])
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());


    done();
});

gulp.task('serve', function(done) {

    browserSync.init({
        server: ""
    });

    gulp.watch(['app/sass/*.sass', 'app/sass/*.scss'], gulp.series('sass'));
    gulp.watch('*.html').on('change', () => {
      browserSync.reload();
      done();
    });


    done();
});

gulp.task('default', gulp.series('sass', 'serve'));
