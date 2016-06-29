/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
describe("fixture_tests.js", function () {



    beforeAll(function () {
        var path = '';
        //if the test is run standalone, then do not add 'base/'
        
        if (typeof window.__karma__ !== 'undefined') {
            path += 'base/';
        }

        jasmine.getFixtures().fixturesPath = path+ 'test/jasmine-jquery/fixtures/';

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

