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

    QUnit.module("basic-caliper-tests.js caliper initial state tests", {
        beforeEach: function (assert) {

            rundemo();
            setCaliperLength();

        },
        afterEach: function (assert) {

        }
    });


    QUnit.test('caliper installed at fixture', function (assert) {

        var text = $("#qunit-fixture").html();
        assert.equal(true, text.substring(1, 4) === 'svg');

    });

    QUnit.test('check lineLength', function (assert) {

        assert.equal(caliperLength, svgWidth - 20);

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

    QUnit.test('check pos via API', function (assert) {


        var data = caliper.queryData();
        assert.equal(data.left.percent, 40);
        assert.equal(data.right.percent, 60);

        assert.equal(data.left.x + widthValue / 2, getHandlePos("handleLeft"));

    });

    QUnit.test('simple mouse drag', function (assert) {

        var perChange = caliperLength / 10;
        $('rect#handleRight').simulate('drag', {'dx': perChange});
        var data = caliper.queryData();
        assert.equal(data.right.percent, 70);

    });


    QUnit.test('left cant go past right', function (assert) {

        var perChange = 4 * caliperLength / 10;

        $('rect#handleLeft').simulate('drag', {'dx': perChange});
        //should be 80 if blocking didn't work
        var data = caliper.queryData();
        assert.equal(true, (data.left.percent - data.right.percent) < 1);

    });

    QUnit.test('right cant go past left', function (assert) {

        var perChange = 4 * caliperLength / 10;

        $('rect#handleRight').simulate('drag', {'dx': -perChange});
        //should be 40 if blocking didn't work
        var data = caliper.queryData();
        assert.equal(true, (data.left.percent - data.right.percent) < 1);

    });

    QUnit.test('test getPercentForPos', function (assert) {

        var perChange = (4 * caliperLength / 10);
        var s = caliper.getPercentForPos(perChange);
        assert.equal(s, 41);

        s = caliper.getPercentForPos(caliperLength * 2);
        assert.equal(s, 100);
        s = caliper.getPercentForPos(-5);
        assert.equal(s, 0);

    });

    QUnit.test('test reposition', function (assert) {
        // expect 40,60
        var perChange = {"left": 35, "right": 75};
        caliper.reposition(perChange);
        var data = caliper.queryData();
        assert.equal(data.left.percent, perChange.left);
        assert.equal(data.right.percent, perChange.right);

        var res = getHandlePos("handleLeft");
        var testValue = res / caliperLength;
        testValue = Math.round(testValue * 100);
        assert.equal(testValue, perChange.left);

        res = getHandlePos("handleRight");
        testValue = (res) / caliperLength;
        testValue = Math.round(testValue * 100);
        assert.equal(testValue, perChange.right - 1);



    });

    QUnit.test('test resize', function (assert) {
        caliper.resize(750);
        setCaliperLength();
        var res = getHandlePos("handleLeft");
        var testValue = res / caliperLength;
        testValue = Math.round(testValue * 100);
        assert.equal(testValue, 40);

    });
    
     QUnit.test('test resize and move', function (assert) {
         
         var perChange = 5 * caliperLength / 10;

        $('rect#handleRight').simulate('drag', {'dx': perChange});
         
        //caliper.resize(750);
        //setCaliperLength();
        var res1 = getHandlePos("handleRight");
        var testValue = res1 / caliperLength;
        testValue = Math.round(testValue * 100);
        assert.equal(testValue, 99);
        var data = caliper.queryData();
        assert.equal(data.right.percent, 100);
        
        caliper.resize(750);
        setCaliperLength();
        
        
        var res2 = getHandlePos("handleRight");
        testValue = res2 / caliperLength;
        testValue = Math.round(testValue * 100);
        assert.equal(testValue, 99);
        data = caliper.queryData();
        assert.equal(data.right.percent, 100);
        
        assert.equal(true,res2 > res1);
    });

});