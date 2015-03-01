define(function () {
    return {
        getHello: function () {
            // Submit Event
            lh('submit', 'TEST_EVENT', 'mlsn1234');
            return 'Hello World';
        }
    };
});
