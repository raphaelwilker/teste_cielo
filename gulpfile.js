var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
var exec = require('child_process').exec;
//var server = require('gulp-server-livereload');

gulp.task('default', function() {
  // place code for your default task here
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

gulp.task('server',function(cb){
	exec('node bin/js/server/index.js',function (err,stdout, stderr){
		console.log(err);
		console.log(stdout);
		cb(err);
	});
});

gulp.task('compress', function () {
  
		gulp.src(['./src/html/view/*.html'])
				.pipe(gulp.dest('.bin/html/view'))
		
		gulp.src([
			'./js/controller/*.js',
			'./js/factory/*.js'])
		  .pipe(concat('teste-cielo-min.js'))
      .pipe(uglify({mangle: false}))
			.pipe(gulp.dest('./bin/js'))
			
		
		gulp.src([
			'./css/*.css'])
			.pipe(concat('teste-cielo-min.css'))
			.pipe(cssMin())
			.pipe(gulp.dest('./bin/css'))
		
		gulp.src(['./js/server/sever.js'])
				.pipe(concat('index.js'))
				.pipe(uglify({mangle: false}))
				.pipe(gulp.dest('./bin/js/sever/index.js'))

    gulp.src(['./node_modules/angular/angular.min.js'])    
				.pipe(concat('angular.js'))
				.pipe(gulp.dest('./bin/js'))

		gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.min.js'])    
				.pipe(concat('bootstrap.js'))
				.pipe(gulp.dest('./bin/js'))
		
		gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css'])
				.pipe(concat('bootstrap.css'))
				.pipe(gulp.dest('./bin/css'))
		
		gulp.src(['./node_modules/jquery/dist/jquery.min.js'])    
				.pipe(concat('jquery.js'))
				.pipe(gulp.dest('./bin/js'))

});