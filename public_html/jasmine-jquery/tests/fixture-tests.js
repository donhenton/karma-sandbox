/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
describe("fixturecl_tests.js", function () {



    beforeAll(function () {
        var path = '';
        if (typeof window.__karma__ !== 'undefined') {
            path += 'base/';
        }
       // jasmine.getFixtures().fixturesPath = path + 'spec/javascripts/fixtures';


        jasmine.getFixtures().fixturesPath = path+ 'public_html/jasmine-jquery/fixtures/';

    });

    beforeEach(function () {
        loadFixtures('fixture1.html')

    });

    it("the fixture should load", function () {
        var fixtureContent = $('#fixture1').text();
        expect(fixtureContent != null).toEqual(true);
        expect(fixtureContent).toEqual('Get a job');
    });



});
