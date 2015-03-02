// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.

// Define Global ListHub Analytics Object
window.ListHubAnalyticsObject = "__lh__";
window.__lh__ = {
  q: [],
  d: 1*new Date()
};

// Include ListHub Tracking Script, register shim
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        'lh': '//tracking.listhub.net/la.min.js'
    },
    shim: {
      'lh' : {
        exports: "__lh__"
      }
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);
