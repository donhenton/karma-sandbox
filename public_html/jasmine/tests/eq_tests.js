

//https://dorey.github.io/JavaScript-Equality-Table/

describe("eq_tests.js", function () {
    var x;
    var y;
    var a = null;
    var b ;
    var emptyArray = [];
    var isFalse = false;
    
    beforeEach(function () {
        x = 1;
        y = "1";

    });
     
    it("data type matters to ===", function ()
    {
        
        expect(x === y).toEqual(false);
    });
     
    it("data type doesn't matter to ==", function ()
    {
        
        expect(x == y).toEqual(true);
    });
    
    it("== says undefined is null", function ()
    {
        
        expect(a == b).toEqual(true);
    });
    
  
    it("=== says undefined is not the same as null", function ()
    {
        
        expect(a === b).toEqual(false);
    });
    
    it("== says empty array is false", function ()
    {
        
        expect(emptyArray == isFalse).toEqual(true);
    });

});

 