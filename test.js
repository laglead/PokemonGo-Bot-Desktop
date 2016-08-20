const browserify = require("browserify");
const babelify   = require("babelify");
const vueify     = require("vueify");
const fs         = require("fs");

console.log("Starting");
process.env.NODE_ENV = 'development';

browserify('app/src/main.js')
  .transform(vueify)
  .transform(babelify)
  .bundle()
  .pipe(fs.createWriteStream('build/bundle.js'));

console.log("Done");

//
