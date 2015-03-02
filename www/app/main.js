define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');

    // Initialize ListHub client.  
    require(['lh'], function(lh) {
        lh('init', {provider:'M-1234', test:true});
    });
    
    // Note - notional ListHub Tracking event call in messages.getHello()    
    print(messages.getHello());
});
