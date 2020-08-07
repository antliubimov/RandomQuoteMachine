const { watch, series } = require('gulp');
const browserSync = require('browser-sync').create();
const styles = require('./styles');
const script = require('./script');
const html = require('./html');

module.exports = function serve(cb) {
  browserSync.init({
    server: './build',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  watch('source/sass/**/*.scss', series(styles)).on(
    'change',
    browserSync.reload,
  );
  watch('source/js/**/*.js', series(script)).on('change', browserSync.reload);
  watch('source/*.html', series(html));
  watch('build/*.html').on('change', browserSync.reload);
  return cb();
};
