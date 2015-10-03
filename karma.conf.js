module.exports = function(config) {
  config.set({
    basePath : '.',
    files : [
        'public/js/lib/angular.min.js',
        'node_modules/chai-angular/chai-angular.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'public/js/*.js',
        'specs/public/*.js',
        'specs/public/services/*.js'
    ],
    plugins: ['karma-mocha', 'karma-chai', 'karma-phantomjs-launcher', 'karma-mocha-reporter'],
    frameworks: ['mocha', 'chai'],
    reporters: ['mocha'],

    port: 9876,
    colors: true,
    autoWatch: false,
    singleRun: true,
    browsers: ['PhantomJS']
  });
};