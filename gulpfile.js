var shell = require('shelljs');

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var browserSync = require('browser-sync').create();

gulp.task('build-gitbook', function(){
  if(shell.exec('npm run build').code != 0){
    echo('Error: generate gitbook failed');
    exit(1);
  }
});

gulp.task('deploy-to-gh-pages', function(){
  return gulp.src('./notes/_book/**/*')
    .pipe(ghPages());
});

// create a task that ensures the `html` task is complete before
// reloading browsers
gulp.task('html-watch', ['build-gitbook'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('serve', ['build-gitbook'], function(){
  browserSync.init({
    server: {
      baseDir: './notes/_book'
    }
  });
  gulp.watch(['./notes/**/*.md'], ['html-watch']);
});

gulp.task('publish', ['build-gitbook', 'deploy-to-gh-pages']);
gulp.task('default', ['serve']);
