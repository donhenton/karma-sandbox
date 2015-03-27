/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global jsxml, QUnit */

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
    var fixtureId = "fixtureId";


    function setData()
    {
        $("#"+fixtureId).append(transformedHTML);
    }
    function getSample(assert)
    {
        if (sampleXML === null)
        {

            sampleXML = __html__['public_html/qunit/transform/test.xml'];
            assert.ok("NOT FOUND" !== sampleXML);
            sampleDoc = jsxml.fromString(sampleXML);
            xslString = __html__['public_html/qunit/transform/test_transform.xsl'];
            transformedHTML = $.parseHTML(jsxml.transReady(sampleDoc, xslString));
            
            //setData();
            //console.log($(":root").html());

        }

    }
    /**
     * all tests after this call are in this module. Another call to 
     * module will start a new module
     * 
     */
    QUnit.module("document_tests.js Karma QUnit Document Environment Tests", {
        beforeEach: function (assert) {
            $("body").prepend("<div id='"+fixtureId+"'></div>");
            getSample(assert);


        },
        afterEach: function (assert) {
            $("#"+fixtureId).remove();
        }
    });

    QUnit.test('null check function', function (assert) {

        assert.testNull(sampleDoc, false);
        assert.testNull(sampleXML, false);
        assert.testNull(testNull, true);
        assert.testNull(testUndef, true);
        assert.testNull(xslString, false);

    });
 
    QUnit.test('test __html__ var load for fixtures', function (assert) {

        
        
        //console.log(Object.keys(__html__));
        assert.ok(true);
        assert.equal(Object.keys(__html__).length,3);

    });


    QUnit.test('xsl worked', function (assert) {

        setData();
        var text = $("#gamma").text();
        assert.equal('200', text);

    });


 


});