module.exports = {

    options: {
      merge: false,
      hashlen: 5
    },
    js: {
      cwd: 'dist/js/',
      src: 'main.min.js',
      dest: '.build/dist/js/'
    },
    css: {
      cwd: 'dist/css/',
      src: 'main.min.css',
      dest: '.build/dist/css/'
    }
};