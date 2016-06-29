/* global fanfiction, spyOn, NS, topLevel, expect, fanFiction, literature */
//http://jasmine.github.io/2.0/introduction.html
describe("first_tests.js", function () {

    var data = {};
    beforeEach(function () {
        
       //topLevel
        
        data = addKeys(topLevel, null);
       
       //next 
        data =  addKeys(literature,data);
        data =  addKeys(fanFiction,data);
    });

    afterEach(function () {
        
    });

 

    it("data is defined", function () {
        expect(fanFiction).toBeDefined();
        expect($).toBeDefined();
        expect(topLevel).toBeDefined();
        expect(literature).toBeDefined();
         

    });

    it("categores to be added", function () {
        
        
        expect(data.keys.length).toEqual(32);
         

    });
    
    it("fanfiction child check", function () {
        
        var fanFictionItem = data.treeData[12].children[1]
        expect(fanFictionItem.children.length).toEqual(7);
        expect(fanFictionItem.key).toEqual("/literature/fanfiction");
         

    });
    
    var cacheStore = {};
    describe("cache testing", function () {
        beforeEach(function () {
       
       
            cacheStore =  addKeys(topLevel,null);
        
        });

        afterEach(function () {

        });
        
        
        it("cache check", function () {
        
            var literature = cacheStore.store["/literature"];
            var literatureFan = cacheStore.store["/literature/fanfiction"]
            
            expect(literature).toBeDefined();
            expect(literatureFan).not.toBeDefined();
         

        });

    });


});
