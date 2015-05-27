/* 
 * Tests for the caliper API
 */


/* global svgWidth, caliper, QUnit */

$(function () {

    QUnit.config.testTimeout = 5000;

    QUnit.assert.testNull = function (value, expected, message)
    {
        var actual = (value === null) || (typeof value === 'undefined');
        QUnit.push(actual === expected, actual, expected, message);
    };

    var caliperLength = 0;
    var widthValue = 0;


    function getInfoText()
    {
        return $("#info").text();
    }

    function getHandlePos(handleId)
    {
        var href = $("rect#" + handleId);
        if (href === null)
            return null;
        //translate(20,0);
        var transformStr = href.attr("transform");
        var ret = transformStr.split("(");

        return parseInt(ret[1].split(",")[0]) + widthValue / 2;
    }

    function setCaliperLength()
    {
        //M0,0L580,0
        var pathLengthStr = $('path').attr('d');
        var firstRes = pathLengthStr.split(',');
        caliperLength = parseInt(firstRes[1].substring(2, 5));
        var href = $("rect#handleLeft");
        var w = parseInt(href.attr("width"));
        widthValue = w;


    }

    QUnit.module("selenium-mouse_tests.js testing mouse movement and events", {
        beforeEach: function (assert) {

            rundemo();
            setCaliperLength();

        },
        afterEach: function (assert) {

        }
    });

    QUnit.test('check left is Postioned Physically', function (assert) {
        // expect 40,60

        var res = getHandlePos("handleLeft");
        var testValue = res / caliperLength;
        testValue = Math.round(testValue * 100);
        assert.equal(testValue, 40);

        res = getHandlePos("handleRight");
        testValue = res / caliperLength;
        testValue = Math.round(testValue * 100);
        assert.equal(testValue, 60);


    });


});