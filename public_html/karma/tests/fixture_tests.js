/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global QUnit, __html__ */

$(function () {

    var fixtureId = "fixture";
    QUnit.config.testTimeout = 5000;
    function addTemplate(templateName)
    {
        var transformedHTML = $.parseHTML(__html__[templateName] );
         $("#"+fixtureId).html(transformedHTML);
    }

    QUnit.assert.testNull = function (value, expected, message)
    {
        var actual = (value === null) || (typeof value === 'undefined');
        QUnit.push(actual === expected, actual, expected, message);
    };


    QUnit.module("fixture_tests.js fixture usuage tests", {
        beforeEach: function (assert) {
            $("body").prepend("<div id='"+fixtureId+"'></div>");
             
          


        },
        afterEach: function (assert) {
             $("#"+fixtureId).remove();
        }
    });

    QUnit.test('append a template', function (assert) {

         addTemplate('public_html/karma/templates/a1.html');
        // console.log($('html').html());
        equal("Hello",$("#alpha").text());
         assert.ok(true);

    });


});
