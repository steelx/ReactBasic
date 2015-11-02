var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

gulp.task('default', function (argument) {
    return gulp.src('jsx/**')//load every file inside jsx folder
        .pipe(react())//convert jsx into js
        .pipe(concat('main.js'))//concat all files into one js file
        .pipe(gulp.dest('./public/'));//save file into destination
});
