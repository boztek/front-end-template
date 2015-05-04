var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var filterCoffeeScript = require('broccoli-coffee');

var app = 'app';
var sourceTrees = [app];

var appHtml = pickFiles(app, {
  srcDir: '.',
  files: ['*.html'],
  destDir: '.'
});

var jsSrcDir = 'app/scripts';
var compiledJs = filterCoffeeScript(jsSrcDir);
var appJs = pickFiles(compiledJs, {
  srcDir: '.',
  files: ['*.js'],
  destDir: 'scripts'
});

var appCss = compileSass(sourceTrees, 'styles.scss', 'styles/main.css');

module.exports = mergeTrees([appHtml, appCss, appJs]);
