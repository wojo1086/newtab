var gulp = require('gulp');
var inject = require('gulp-inject');
var connect = require('gulp-connect');
var angularFilesort = require('gulp-angular-filesort');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['connect', 'watch', 'start', 'copy-node-modules-styles'], function () {

});

gulp.task('start', ['inject-js', 'move-manifest', 'move-images', 'copy-compression']);

//gulp.task('inject-js', ['copy-js',
//	'copy-node-modules-styles',
//	'inject-css'], function () {
//	var target = gulp.src('app/index.html');
//	var sources = gulp.src([
//		'app/**.js',
//		'app/*/**.js'
//	]).pipe(angularFilesort());
//	return target.pipe(inject(sources, {relative: true}))
//	.pipe(gulp.dest('app'))
//	.pipe(connect.reload());
//});

gulp.task('move-manifest', function() {
	return gulp.src('dev/manifest.json')
	.pipe(gulp.dest('app/'));
});

gulp.task('move-images', function () {
	return gulp.src('dev/images/**/*.*')
	.pipe(gulp.dest('app/images/'));
});

gulp.task('copy-html', function () {
	return gulp.src('dev/**/*.html')
	.pipe(gulp.dest('app/'));
});

gulp.task('copy-background-js', function() {
	return gulp.src('dev/background.js')
		.pipe(gulp.dest('app/'));
});

gulp.task('copy-compression', function() {
	return gulp.src([
		'lz-string-master/libs/lz-string.min.js',
		'lz-string-master/libs/base64-string.js']
	)
		.pipe(gulp.dest('app/libs/'));
});

gulp.task('copy-js', ['inject-css', 'copy-background-js'], function () {
	return gulp.src([
		'dev/**/*.js',
		'!dev/background.js'
	])
	.pipe(ngAnnotate())
	.pipe(sourcemaps.init())
	.pipe(concat('newtab.js'))
	.pipe(gulp.dest('app/'))
	.pipe(uglify())
	.pipe(rename('newtab.min.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/'));
});

gulp.task('copy-node-modules', function () {
	return gulp.src([
		'node_modules/angular/angular.min.js',
		'node_modules/angular-ui-router/release/angular-ui-router.min.js',
		'node_modules/angular-aria/angular-aria.min.js',
		'node_modules/angular-animate/angular-animate.min.js',
		'node_modules/angular-messages/angular-messages.min.js',
		'node_modules/angular-material/angular-material.min.js'
	])
	.pipe(sourcemaps.init())
	.pipe(concat('libs.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/libs/'));
});

gulp.task('inject-js', ['copy-js', 'copy-node-modules'], function () {
	var target = gulp.src('app/index.html');
	var sources = gulp.src([
		'app/newtab.js',
		'app/libs/libs.js',
		'!app/background.js',
		'app/libs/lz-string.min.js',
		'app/libs/base64-string.js'
	]).pipe(angularFilesort());
	return target.pipe(inject(sources, {relative: true}))
	.pipe(gulp.dest('app/'))
	.pipe(connect.reload());
});

gulp.task('copy-node-modules-styles', ['copy-node-modules'], function () {
	return gulp.src([
		'node_modules/angular-material/angular-material.min.css'
	])
	.pipe(gulp.dest('app/libs/'));
});


//gulp.task('copy-js', ['copy-html'], function () {
//	return gulp.src([
//		'dev/**/*.js'
//	])
//	.pipe(ngAnnotate())
//	.pipe(concat('cards.js'))
//	.pipe(gulp.dest('app/'));
//});

gulp.task('inject-css', ['sass', 'copy-html', 'copy-node-modules-styles'], function () {
	var target = gulp.src('app/index.html');
	var sources = gulp.src([
		'app/libs/*.min.css',
		'app/newtab.css'
	]);
	var transform = function (filepath) {
		return '<link rel="stylesheet" type="text/css" href="' + filepath + '">';
	}
	return target.pipe(inject(sources, {transform: transform, relative: true}))
	.pipe(gulp.dest('app'));
});

gulp.task('sass', function () {
	return gulp.src([
		'dev/**/*.sass'
	])
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('newtab.css'))
	.pipe(gulp.dest('app/'));
});

gulp.task('watch', function () {
	gulp.watch(['dev/**/*.*'], ['start']);
});
