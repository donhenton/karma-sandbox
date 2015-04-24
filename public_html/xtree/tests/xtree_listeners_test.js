/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    var BASE = "/base/public_html";
    //var BASE = "http://localhost:8383/karma-sandbox/";
    function clickBox(levelNum, id) {
        selector = "#level_" + levelNum + "_" + id;
        $(selector).children('input').click();
    }
    function isChecked(levelNum, id) {
        selector = "#level_" + levelNum + "_" + id;
        return $(selector).children('input').is(':checked');
    }

    function openFolder(levelNum, id) {
        selector = "#level_" + levelNum + "_" + id + " .indicator";
        return $(selector).click();
    }

    function loadSampleXML(filename) {
        $("body").prepend("<div id='xml_block'></div>");
        $("body").prepend("<div id='selected_list_items'></div>");
        // $('#qunit-fixture').append(getHtmlSample());
        // console.log("\n\n\n\n\n"+$('body').html());
        XTREE_LISTENERS.transformBase = BASE + "/xtree/transforms/";
        XTREE_LISTENERS.init();
        XTree.tree = jsxml.fromString(getXML(filename));
    }

    function tearDown()
    {
        $('#xml_block').remove();
        $('#selected_list_items').remove();
        $('#qunit-fixture').remove();
        sampleXML = null;
    }


    var sampleXML = null;
    function getXML(filename) {
        if (sampleXML == null) {
            xr = $.ajax(BASE + "/xtree/" + filename, {
                "async": false,
                "type": "GET",
                "error": function (xr, status, err) {
                    alert(err + " " + status);
                }

            });

            sampleXML = xr.responseText;
        }
        return sampleXML;
    }

    module("xtree_listeners_test.js xml block", {
        setup: function () {
            // console.log("in setup for xtree dom");
            loadSampleXML("sample.xml")


        },
        teardown: function () {
            tearDown();
        }
    });


    test('test xml_block_refresh', function (assert) {


        var blockBefore = $('#xml_block').text();
        // console.log("xxxx "+blockBefore.trim())
        assert.ok(blockBefore.trim().length == 0);
        XTREE_LISTENERS.xml_block_refresh();
        blockBefore = $('#xml_block').text();
        assert.ok(blockBefore.trim().length > 0);

    });


    module("xtree_listeners_test.js xsl check", {
        setup: function () {
            XTree.init({
                "attachmentPoint": 'qunit-fixture',
                "transformBase": BASE + "/xtree/transforms/",
                "urlBase": "alpha"
            });
            XTree.getLevel1DataForGroup(3);

            XTREE_LISTENERS.transformBase = BASE + "/xtree/transforms/";
            XTREE_LISTENERS.init();


            $("body").prepend("<div id='qunit-fixture'></div>");
            var stuff = XTree.toHtml();
            $('#qunit-fixture').html(stuff);

            $("body").append("<div id='selected_list_items'></div>");

        },
        teardown: function () {

            tearDown();
        }
    });


    test('xsl not null', function (assert) {

        assert.ok(XTREE_LISTENERS.list_xsl.trim().length > 0);

    });

    module("xtree_listeners_test.js line ", {
        setup: function () {
            XTREE_LISTENERS.transformBase = BASE + "/xtree/transforms/";
            XTREE_LISTENERS.init();
            getXML("selection_sample.xml");
            $("body").prepend("<div id='selected_list_items'></div>");

        },
        teardown: function () {
            tearDown();
        }
    });


    test('selected_list_refresh', function (assert) {


        var doc = jsxml.fromString(sampleXML);
        // xml changed
        var blockBefore = $('#selected_list_items').html();

        assert.ok(blockBefore.trim().length == 0);
        // console.log(XTree.toHtml());
        XTREE_LISTENERS.selected_list_refresh(doc);
        blockBefore = $('#selected_list_items').html();

        assert.ok(blockBefore.trim().length > 0);





    });









/////////////    
});
