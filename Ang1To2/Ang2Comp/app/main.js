(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    console.log('loaded');
    ng.platform.browser.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));