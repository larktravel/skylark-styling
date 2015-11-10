var gulp          = require('gulp'),
    connect       = require('gulp-connect'),
    plumber       = require('gulp-plumber'),
    sass          = require('gulp-sass'),
    runSequence   = require('run-sequence');


//default gulp task run sequentially
gulp.task('default', function() {
  runSequence(['sass'],
    // 'moveStylingAssetsToDist',
    ['connect'],
    'watch-sass'
  )
});


  //grap main app.scss
  //move to example (for development)
  gulp.task('sass',function() {
    return gulp.src('./sass/lark.sass')
      .pipe(plumber())
      .pipe(sass())
      .pipe(gulp.dest('./guide/stylesheets'))
  });

//asset building for Distribution
  gulp.task("moveStylingAssetsToDist", function(){
    return gulp.src([
      "./bower_components/skylark-styling/fonts/*",
      "./bower_components/skylark-styling/images/*"
    ])
    .pipe(gulp.dest("dist/assets/"));
  });


//WATCHERS
  gulp.task('watch-sass', function() {
   gulp.watch(['./sass/**/*.{sass,scss}', './sections/**/*.{sass,scss}',] ['sass']); 
  });

//SERVER STARTER
  gulp.task('connect', function () {
    connect.server({
      root: './guide/',
      port: 8888
    });
  });
