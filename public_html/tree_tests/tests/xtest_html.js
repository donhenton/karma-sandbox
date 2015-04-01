/* global XTree */

var htmlSettings = {
    "attachmentPoint": "qunit-fixture",
    "urlBase": "alpha"
};
var sampleHTML = null;
var simpleXML = "";

// ////// testing helper functions ////////////////////

function getText(levelNum, id) {
    var selector = "#level_" + levelNum + "_name_" + id;
    return $(selector).text();
}

function isChecked(levelNum, id) {
    var selector = "#level_" + levelNum + "_" + id;
    return $(selector).children('input').is(':checked');
}

function openFolder(levelNum, id) {
    var selector = "#level_" + levelNum + "_" + id + " .indicator";
    return $(selector).click();
}

function clickBox(levelNum, id) {
    selector = "#level_" + levelNum + "_" + id;
    $(selector).children('input').click();
}
function areAllChildrenChecked(levelNum, id) {
    selector = "#level_" + levelNum + "_" + id;
    var uC = $(selector).children('ul').children('li').children('input');
    var checkCount = 0;
    for (var i = 0; i < uC.length; i++) {
        if ($(uC[i]).is(':checked')) {
            checkCount++;
        }

    }
    return checkCount;
}

// ///// testing helper functions /////////////////////

function getHtmlSample() {
    if (sampleHTML === null) {
        var xr = $.ajax("/base/public_html/tree_tests/sample.html", {
            "async": false,
            "type": "GET",
            "error": function (xr, status, err) {
                alert(err + " " + status);
            }

        });

        sampleHTML = xr.responseText;
    }
    return sampleHTML;
}
$(function () {
    module("xtext_html.js basic sample DOM Tests", {
        setup: function () {
            // console.log("in setup for xtree dom");
            $("body").prepend("<div id='qunit-fixture'></div>");
            $('#qunit-fixture').append(getHtmlSample());
            // console.log("\n\n\n\n\n"+$('body').html());

        },
        teardown: function () {
            $('#qunit-fixture').remove();
        }
    });




    test('test replacing HTML', function () {

        // console.log($('#qunit-fixture').html())
        equal(getText(2, 2002), "gamma3");
        equal(false, areAllChildrenChecked(1, 33333));
        equal(false, isChecked(2, 2002));
        equal(true, isChecked(2, 2000));

    });

    //////////////////////////////////////////////////
    module("xtext_html.js _html DOM Tests", {
        setup: function () {
            XTree.init({
                "attachmentPoint": 'qunit-fixture',
                "transformBase": "/base/public_html/tree_tests/transforms/",
                "urlBase": "alpha"
            });
            XTree.getLevel1DataForGroup(3);
            $("body").prepend("<div id='qunit-fixture'></div>");
            var stuff = XTree.toHtml();
            $('#qunit-fixture').html(stuff);
            //console.log("\n\n\n\n\n" + $('body').html());
        },
        teardown: function () {
            $('#qunit-fixture').remove();
        }
    });

    // these tests assume that the creation of the tree is sync, but it now uses
    // getJSON, so its async
    // http://lostechies.com/chadmyers/2008/12/22/asynchronous-javascript-testing-with-qunit/

    asyncTest('click works for tree when not initially checked', function () {

        setTimeout(function () {
            clickBox(1, 22);
            // xml changed
            equal(XTree.findLevel(1, 22).getAttribute("checked"), 'yes');
            // html changed
            equal(isChecked(1, 22), true);
            openFolder(1, 22);


            clickBox(1, 22);
            equal(XTree.findLevel(1, 22).getAttribute("checked"), 'no');
            // html changed
            equal(isChecked(1, 22), false);
             
             openFolder(9,999)

            start();

        }, 1000);

    });

    asyncTest('open folder works for tree', function () {

        setTimeout(function () {
            openFolder(1, 22);
            var t = XTree.findLevel(1, 22);
            equal(t.getAttribute("folder"), "open");
            t = XTree.findLevel(1, 33);
            equal(t.getAttribute("folder"), "closed");
            $('qunit-fixture').html(XTree.toHtml());
            equal(1, 1);
            start();

        }, 1000);

    });

    asyncTest('close an open folder', function () {

        setTimeout(function () {
            openFolder(1, 22);
            var t = XTree.findLevel(1, 22);
            equal(t.getAttribute("folder"), "open");
            openFolder(1, 22);
            t = XTree.findLevel(1, 22);
            equal(t.getAttribute("folder"), "closed");
            $('qunit-fixture').html(XTree.toHtml());
            equal(1, 1);
            start();

        }, 1000);

    });



});// end jquery start function
