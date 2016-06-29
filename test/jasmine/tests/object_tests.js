/* global expect, spyOn, NS */
//http://jasmine.github.io/2.0/introduction.html
describe("object_tests.js", function () {

    var myfunc = null;
    beforeEach(function () {
        myfunc = NS.myFunction;
        spyOn(myfunc, 'init');
    });

    afterEach(function () {
        myfunc.reset();
    });


    it("should populate stuff during initialization", function () {
        myfunc.init();
        //console.log(myfunc.toString()+" "+myfunc.stuff.length)
        expect(myfunc.stuff.length).toEqual(1);
        expect(myfunc.stuff[0]).toEqual('Testing');
    });

    it("should be able to initialize", function () {
        expect(myfunc.init).toBeDefined();
        myfunc.init();
        expect(myfunc.init).toHaveBeenCalled();

    });



    //ADDITIONAL TESTS TO WRITE FIRST:
    describe("appending strings", function () {
        it("should be able to append 2 strings", function () {
            expect(myfunc.append).toBeDefined();
        });
        it("should append 2 strings", function () {
            expect(myfunc.append('hello ', 'world')).toEqual('hello world');
        });
    });

/////////// closure 'public private' ///////////////

    describe("closure/inheritance demo", function () {
        var myClosure = null;
        beforeEach(function () {
            myClosure = NS.closureDemo();

        });
        it("should be able to reach 'public' methods" , function()
        {
            var test = myClosure.getAlpha2();
            expect(test).toEqual("(2) alpha external is fred")
        });
        
        
        
        it("can't reach methods on 'this'" , function()
        {
            
            
            expect( function(){ myClosure.getAlphaViaInternalMethod(); } )
                    .toThrow(new Error("exports.getAlphaInternal is not a function"));
            
            
        });
        it("can't reach 'local methods'" , function()
        {
            
            
            expect( function(){ myClosure.localMethod(); } )
                    .toThrow(new Error("myClosure.localMethod is not a function"));
            
            
        });
        
         

    });
});

