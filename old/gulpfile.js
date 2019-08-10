var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
var nodemon = require('gulp-nodemon')
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var exec = require('child_process').exec;
//var server = require('gulp-server-livereload');

gulp.task('default', function() {
	// place code for your default task here
	//gulp.watch(["./*.html"], reload);
});

//gulp.task('ngdocs', [], function () {
//  var gulpDocs = require('gulp-ngdocs');
//  return gulp.src([
//  	'./view/**/*.js',
//  	'./controller/**/*.js',
//  	'./scripts/**/*.js'])
//    .pipe(gulpDocs.process())
//    .pipe(gulp.dest('./docs'));
//});

gulp.task('server',['compress','nodemon'],function(cb){

	browserSync.init(null, {
		proxy: "http://localhost:8080", // port of node server
});


	/*exec('node build/js/server/index.js',function (err,stdout, stderr){
		console.log(err);
		console.log(stdout);
		cb(err);
	});*/

	gulp.watch("*.html",['compress-watch'])
	gulp.watch("./src/css/*.css",['compress-watch'])
	gulp.watch("./src/js/**/*.js",['compress-watch'])
	gulp.watch("./src/js/*.js",['compress-watch'])

});

gulp.task('nodemon', function (cb) {
    var callbackCalled = false;
    return nodemon({script: './build/js/server/index.js'}).on('start', function () {
        if (!callbackCalled) {
            callbackCalled = true;
            cb();
        }
    });
});



gulp.task('compress-watch', ['compress'],  function (done) {
	reload;
});

gulp.task('compress', function () {
  
		gulp.src(['./src/html/view/*.html'])
				.pipe(gulp.dest('.build/html/view'))
		
		gulp.src([
			'./src/js/controller/*.js',
			'./src/js/factory/*.js'])
		  .pipe(concat('teste-cielo-min.js'))
      .pipe(uglify({mangle: false}))
			.pipe(gulp.dest('./build/js'))
			.pipe(browserSync.reload({
				stream: true
			}))
			
		gulp.src([
			'./css/*.css'])
			.pipe(concat('teste-cielo-min.css'))
			.pipe(cssMin())
			.pipe(gulp.dest('./build/css'))
			.pipe(browserSync.reload({
				stream: true
			}))
		
		gulp.src(['./src/js/server/server.js'])
				.pipe(concat('index.js'))
				.pipe(uglify({mangle: true}))
				.pipe(gulp.dest('./build/js/server/'))
				.pipe(browserSync.reload({
					stream: true
				}))

    gulp.src(['./node_modules/angular/angular.min.js'])    
				.pipe(concat('angular.js'))
				.pipe(gulp.dest('./build/js'))
				.pipe(browserSync.reload({
					stream: true
				}))

		gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.min.js'])    
				.pipe(concat('bootstrap.js'))
				.pipe(gulp.dest('./build/js'))
				.pipe(browserSync.reload({
					stream: true
				}))
		
		gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css'])
				.pipe(concat('bootstrap.css'))
				.pipe(gulp.dest('./build/css'))
				.pipe(browserSync.reload({
					stream: true
				}))
		
		gulp.src(['./node_modules/jquery/dist/jquery.min.js'])    
				.pipe(concat('jquery.js'))
				.pipe(gulp.dest('./build/js'))
				.pipe(browserSync.reload({
					stream: true
				}))

});