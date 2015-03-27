/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global jsxml, QUnit */

$(function () {

    QUnit.config.testTimeout = 5000;
    var myThing = ['a', 'b', 'c'];

    QUnit.assert.testNull = function (value, expected, message)
    {
        var actual = (value === null) || (typeof value === 'undefined');
        QUnit.push(actual === expected, actual, expected, message);
    };





    /**
     * all tests after this call are in this module. Another call to 
     * module will start a new module
     * 
     */
    QUnit.module("qunit-context_tests.js Various QUnit Demo Tests eg, contexts, async", {
        beforeEach: function (assert) {

            this.parts = ["wheels", "motor", "chassis"];


        },
        afterEach: function (assert) {

        }
    });

    QUnit.test('onetest', function (assert) {

        assert.equal(this.parts.length, 3);
        this.parts.push("radio");

        assert.equal(myThing.length, 3);
        myThing.push("radio");



    });

    QUnit.test('twotest', function (assert) {

        assert.equal(this.parts.length, 3);
        this.parts.push("radio");
        assert.equal(myThing.length, 4);
        myThing.push("radio");

    });


    QUnit.test('threetest', function (assert) {

        assert.equal(this.parts.length, 3);
        this.parts.push("radio");
        assert.equal(myThing.length, 5);
    });


    QUnit.test('asynctest', function (assert) {

        assert.async();
        var timeVar1 = Date.now();
        window.setTimeout(function () {
            var timeVar2 = Date.now();
            var diff = (timeVar2 - timeVar1);
            assert.ok(diff> 99 && diff < 105);
            QUnit.start();
        }, "100");

    });


});