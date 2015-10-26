/* global jsxml, XTree */

//Tests for xtree

var simpleXML = "<tree><level1 name=\"fred\" id=\"1\"></level1></tree>";
var sampleXML = null;
function getSample()
{
    if (sampleXML == null)
    {
        xr = $.ajax("/base/public_html/xtree/sample.xml", {async: false});
        sampleXML = xr.responseText;
        // console.log("SAMPLE "+sampleXML);
    }
    return sampleXML;
}

var initSettings = {
    "attachmentPoint": "qunit-fixture",
    "transformBase": "/base/public_html/xtree/transforms/",
    "urlBase": "alpha"};

$(function () {

    QUnit.config.testTimeout = 5000;


    module("xtest.js tests", {
        setup: function () {
            //console.log("in setup for xtree");
            XTree.init(initSettings);

        },
        teardown: function () {
            //console.log("in teardown for xtree");
        }
    });

    test('test checkIsNull', function (assert) {

        assert.ok(!XTree.checkIsNull(null));
        assert.ok(!XTree.checkIsNull(" "));
        assert.ok(!XTree.checkIsNull(""));
        assert.ok(!XTree.checkIsNull(undefined));
        assert.ok(XTree.checkIsNull(35));
        assert.ok(XTree.checkIsNull("ggg"));


    });
    test('test parameters', function () {
        settings = {"urlBase": "localhost", "attachmentPoint": "alpha", "transformBase": "/base/public_html/xtree/transforms/"}
        XTree.init(settings);
        //alert(XTree.params);
        equal(XTree.params.attachmentPoint, settings.attachmentPoint);
        equal(XTree.params.urlBase, settings.urlBase);
    });
    test('test parameter defaults', function () {
        settings = {"transformBase": "/base/public_html/xtree/transforms/", }
        XTree.init(settings);
        //alert(XTree.params);
        //console.log("11111111 "+XTree.params.attachmentPoint);
        equal(XTree.params.attachmentPoint, "body");
        equal(XTree.params.urlBase, "");
    });



    test("test teardown", function ()
    {

        $('qunit-fixture').append("fix");
        $('qunit-fixture').text();
        equal($('qunit-fixture').text(), "")
    });

    test("test teardown no bleed", function ()
    {

        $('qunit-fixture').append("get a job");
        $('qunit-fixture').text();
        equal($('qunit-fixture').text(), "")
    });


    test("test tree root", function ()
    {
        settings = {};
        XTree.init(settings);
        equal(XTree.tree.documentElement.nodeName, "tree");

    });

    test("test level1 append", function ()
    {
        settings = {};
        XTree.init(settings);
        XTree.appendLevel1(3, "fred");
        equal(XTree.tree.getElementsByTagName("level1").length, 1)
        var t = XTree.tree.getElementsByTagName("level1")[0];
        equal(t.getAttribute("name"), "fred");
        equal(t.getAttribute("id"), "3");
        equal(t.getAttribute("checked"), "no");
        equal(t.getAttribute("folder"), "closed");

    });


    test("test child appends with default", function (assert)
    {
        settings = {};
        XTree.init(settings);
         
        try {
            twoNode = XTree.appendChildLevel(null, 2, 1004, "bonzo");
        }
        catch (e)
        {
            caughtError = true;
        }
        assert.equal(caughtError, true);
    });

    test("test child appends", function ()
    {
        settings = {};
        XTree.init(settings);
        oneNode = XTree.appendLevel1(1005, "fred");
        twoNode = XTree.appendChildLevel(oneNode, 2, 1004, "bonzo");
        twoNode2 = XTree.findLevel(2, 1004);
        equal(twoNode2.getAttribute("name"), "bonzo", "2nd level okay");
        threeNode = XTree.appendChildLevel(twoNode, 3, 2004, "threeNode");
        threeNode2 = XTree.findLevel(3, 2004);
        equal(threeNode2.getAttribute("name"), "threeNode", "3rd level okay");

        caughtError = false;
        try
        {
            XTree.appendChildLevel(threeNode, 2, 1004, "bonzo");
        }
        catch (e)
        {
            caughtError = true;
        }

        equal(caughtError, true, "can't add to level3");
        caughtError = false;
        try
        {
            XTree.appendChildLevel(twoNode, 2, 1004, "bonzo");
        }
        catch (e)
        {
            caughtError = true;
        }

        equal(caughtError, true, "can't add to level2");
        caughtError = false;
        try
        {
            XTree.appendChildLevel(oneNode, 3, 1004, "bonzo");
        }
        catch (e)
        {
            caughtError = true;
        }

        equal(caughtError, true, "can't add to level1");
        caughtError = false;
        try
        {
            XTree.appendChildLevel(oneNode, 75, 1004, "bonzo");
        }
        catch (e)
        {
            caughtError = true;
        }

        equal(caughtError, true, "can only add 1,2,3");


        caughtError = false;
        try
        {
            XTree.appendChildLevel(oneNode, -1, 1004, "bonzo");
        }
        catch (e)
        {
            caughtError = true;
        }

        equal(caughtError, true, "can only add 1,2,3");


    });
    test("xpath basics", function ()
    {

        sampleDoc = jsxml.fromString(getSample());
        nodes = sampleDoc.evaluate("//level3[@id='1000']", sampleDoc, null, XPathResult.ANY_TYPE, null);
        counter = 0;
        result = nodes.iterateNext();
        while (result)
        {
            counter++;
            result = nodes.iterateNext();
        }

        equal(counter, 1, "found node thru xpath");

        nodes = sampleDoc.evaluate("tree/level1[@id='fred']", sampleDoc, null, XPathResult.ANY_TYPE, null);
        counter = 0;
        result = nodes.iterateNext();
        while (result)
        {
            counter++;
            result = nodes.iterateNext();
        }

        equal(counter, 0, "found no node thru xpath");

    });

    test("test find level", function ()
    {
        XTree.tree = jsxml.fromString(getSample());
        var node1 = XTree.findLevel(1, 4001);
        equal(node1.getAttribute("name"), "omega");
        var node = XTree.findLevel(1, -55);
        ok(node == undefined, "node should be undefined for -55");
        var node2 = XTree.findLevel(2, 6000);
        equal(node2.getAttribute("name"), "manny");


    });

    test("test toString", function (assert)
    {
        var t = getSample();

        XTree.tree = jsxml.fromString(t);

        assert.ok(XTree.toString().indexOf("xml") > 0);


    });


});
