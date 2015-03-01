define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');

    // Basic inclusion of ListHub JS Tracking (async with builtin shim)
    (function(l,i,s,t,h,u,b){l['ListHubAnalyticsObject']=h;l[h]=l[h]||function(){
       (l[h].q=l[h].q||[]).push(arguments)},l[h].d=1*new Date();u=i.createElement(s),
       b=i.getElementsByTagName(s)[0];u.async=1;u.src=t;b.parentNode.insertBefore(u,b)
     })(window,document,'script','//tracking.listhub.net/la.min.js','lh');

    // Initialize ListHub client.  
    lh('init', {provider:'M-1234', test:true}); 
    
    // Note - notional ListHub Tracking event call in messages.getHello()
    
    print(messages.getHello());
});
