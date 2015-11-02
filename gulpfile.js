var gulp = require('gulp');
var gutil = require('gulp-util');//debug utility
var source = require('vinyl-source-stream');//text streams
var browserify = require('browserify');//require module for jsx
var watchify = require('watchify');//file watcher
var reactify = require('reactify');//covert jsx into js with browserify

gulp.task('default', function () {
    //instantiator bundler
    var bundler = watchify(browserify({
        entries: ['./jsx/app.jsx'],//first file browserify looks into
        transform: [reactify],
        extensions: ['.jsx', '.html', '.css', '.js'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    function build(file) {
        if (file) {
            gutil.log('Recompiling ' + file);
        }

        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'browserify error'))
            .pipe(source('main.js'))
            .pipe(gulp.dest('./public/'));
    }

    build();
    bundler.on('update', build);//run build on file update
});
//react tooling with gulp ##00
