let project_folder="dist";
let source_folder="src";

let path={
    build:{
      html: project_folder+"/",
      css: project_folder+"/css/",
      js: project_folder+"/js/",
      img: project_folder+"/img/",
      fonts: project_folder+"/fonts/",
    },
    src:{
      html: source_folder+"/*.html",
      css: source_folder+"/sass/style.sass",
      js: source_folder+"/js/",
      img: source_folder+"/img/**/*.{jpg,jpeg,png}",
      fonts: source_folder+"/fonts/*.{ttf,eot}",
    },
    watch:{
      html: source_folder+"/**/*.html",
      css: source_folder+"/sass/**/*.sass",
      js: source_folder+"/js/**/*.js",
      img: source_folder+"/img/**/*.{jpg,jpeg,png}",
    },
    clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp'),
  gulp = require('gulp'),
  browsersync = require("browser-sync").create(),
  fileinclude = require("gulp-file-include"),
  del = require("del"),
  sass = require('gulp-sass')(require('sass')),
  htmlmin = require('gulp-htmlmin'),
  // webp = require('gulp-webp');
  imagemin = require('gulp-imagemin');


function browserSync(params) {
  browsersync.init({
    server:{
      baseDir: "./" + project_folder + "/"
    },
    port: 3000,
    notify: false
  })
}


function html() {
  return src(path.src.html)
    // .pipe(fileinclude())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css(params) {
  return src(path.src.css)
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function image(param) { 
   return src(path.src.img)
        // .pipe(webp())
        // .pipe(imagemin())
        .pipe(imagemin({
          progressive: true,
          svgoPlugins: [{
            removeViewBox: false
          }],
          interlaced: true, 
          optimizationLevel: 3
        }))
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function watchFiles(params) {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  // gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], image);
}

function clean(params) {
  return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(css, html, image));
let watch = gulp.parallel(build, watchFiles, browserSync);


exports.image = image;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
// exports.default = build;
