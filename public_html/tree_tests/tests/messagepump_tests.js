/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global MESSAGE_PUMP */

$(function () {
    
     
    var TEST_EVENT = 'test_event';
    var TEST_MESSAGE = 'test';
    var messageResults = null;
    
    function getMessage(m)
    {
       messageResults = m;
    }
    
    function tearDown()
    {
        gotMessage = false;
        messageResults = null;
        MESSAGE_PUMP.unsubscribe(getMessage,TEST_EVENT);
        //console.log("ZZZ "+MESSAGE_PUMP.subscribers[TEST_EVENT]);
    }
    
    module("messagepump_tests.js", {
        setup: function () {
            MESSAGE_PUMP.subscribe(getMessage,TEST_EVENT);


        },
        teardown: function () {
            tearDown();
        }
    });

    test('test subscribe', function (assert) {

        assert.equal(MESSAGE_PUMP.subscribers[TEST_EVENT].length,1);
        MESSAGE_PUMP.raiseEvent(TEST_MESSAGE, TEST_EVENT);
        assert.equal(TEST_MESSAGE,messageResults);
        

    });
    
    
    test('test unsubscribe', function (assert) {
        assert.equal(MESSAGE_PUMP.subscribers[TEST_EVENT].length,1);
        MESSAGE_PUMP.unsubscribe(getMessage,TEST_EVENT);
        assert.equal(MESSAGE_PUMP.subscribers[TEST_EVENT].length,0);
        

    });
    
    
});

