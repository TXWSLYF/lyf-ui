const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const components = require("./components.json");
const pkg = require("../package.json");

// 构建整体的 css 样式
function buildCss(cb) {
  gulp
    .src("../src/styles/index.scss")
    // sass to css
    .pipe(sass())
    // 添加浏览器前缀
    .pipe(autoprefixer())
    // css 文件压缩
    .pipe(cleanCSS())
    // 重命名
    .pipe(rename(`${pkg.name}.css`))
    .pipe(gulp.dest("../lib/styles"));

  cb();
}

// 构建各个组件的 css 样式
function buildSeperateCss(cb) {
  Object.keys(components).forEach(compName => {
    gulp
      .src(`../src/styles/${compName}.scss`)
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(cleanCSS())
      .pipe(rename(`${compName}.css`))
      .pipe(gulp.dest("../lib/styles"));
  });

  cb();
}

exports.default = gulp.series(buildCss, buildSeperateCss);
