const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
    return gulp.src(['libs/**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint']);
