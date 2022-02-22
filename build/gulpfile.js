

const { src, dest, series } = require("gulp");
const postcss = require("gulp-postcss");
const path = require("path");
const fs = require("fs")
const INPUT_PATH = path.resolve(__dirname, "../packages");
const OUTPUT_PATH = path.resolve(__dirname, "../lib");
const less = require('gulp-less');

function components() {

  const components = fs.readdirSync(`${INPUT_PATH}`)
  let data = components.map((name) => {
    // 操作文件夹
    if (name.indexOf(".") == -1) {
      return `${INPUT_PATH}/${name}/style/${name}.less`
    }
  }).filter(item => item)
  return src(data)
    .pipe(less())
    .pipe(dest(`${OUTPUT_PATH}/style`));
}
exports.default = series(components);
