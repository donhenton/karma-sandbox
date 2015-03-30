/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global jsxml */

$(function () {

    QUnit.config.testTimeout = 5000;

    QUnit.assert.testNull = function (value, expected, message)
    {
        var actual = (value === null) || (typeof value === 'undefined');
        QUnit.push(actual === expected, actual, expected, message);
    };

    var sampleXML = null;
    var sampleDoc = null;
    var testNull = null;
    var testUndef = undefined;
    var xslString = null;
    var transformedHTML = null;


    function setData()
    {
        $("#qunit-fixture").append(transformedHTML);
    }
    function getSample(assert)
    {
        if (sampleXML === null)
        {
            var xr = $.ajax("transform/test.xml", {async: false});
            sampleXML = xr.responseText;
            //not found if it can't be loaded
            assert.ok("NOT FOUND" !== sampleXML);
            sampleDoc = jsxml.fromString(sampleXML);
            xslString = $.ajax("transform/test_transform.xsl",
                    {"async": false, "type": "GET"}).responseText;
            transformedHTML = $.parseHTML(jsxml.transReady(sampleDoc, xslString));



        }

    }
    QUnit.module("xslt_tests.js xslt simple tests", {
        beforeEach: function (assert) {
             
            getSample(assert);


        },
        afterEach: function (assert) {

        }
    });

     QUnit.test('test load of sample xml by null', function (assert) {

         assert.testNull(sampleDoc, false);
         assert.testNull(sampleXML, false);
         assert.testNull(testNull, true);
         assert.testNull(testUndef, true);
         assert.testNull(xslString, false);

    });

     QUnit.test('test load of sample by string', function (assert) {

        var sText = jsxml.toXml(sampleDoc);
        assert.equal(sText, sampleXML);
    });


     QUnit.test('xsl worked', function (assert) {

        setData();
        var text = $("#gamma").text();
        assert.equal('200', text);

    });





});