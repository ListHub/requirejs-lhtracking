define(function () {
    return {
        getHello: function () {
            // Submit Event
            require(['lh'], function(lh) {
                lh('submit', 'TEST_EVENT', 'mlsn1234');
            });
            return 'Hello World';
        }
    };
});
