const gulp = require('gulp');
const serve = require('./gulp/tasks/serve');
const html = require('./gulp/tasks/html');
const styles = require('./gulp/tasks/styles');
const script = require('./gulp/tasks/script');
const clean = require('./gulp/tasks/clean');

const dev = gulp.parallel(html, styles, script);
const build = gulp.series(clean, dev);

module.exports.clean = clean;
module.exports.build = build;
module.exports.start = gulp.series(build, serve);
