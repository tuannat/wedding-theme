'use strict';

var path = require('path');
var ghPages = require('gulp-gh-pages');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var dest = path.join(taskTarget);

  // Copy
  gulp.task('deploy', function() {
    return gulp.src([
        path.join(dirs.destination, '**/*')
        ])
    .pipe(ghPages());
  });
};
