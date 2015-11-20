/* global expect, spyOn, NS */
//http://jasmine.github.io/2.0/introduction.html
describe("object_tests.js", function() {
    
    var myfunc = null;
    beforeEach(function(){
         myfunc = NS.myFunction;
         spyOn(myfunc, 'init') ;
    });

    afterEach(function() {
         myfunc.reset();
    });
    
     
    it("should populate stuff during initialization", function(){
        myfunc.init();
        //console.log(myfunc.toString()+" "+myfunc.stuff.length)
        expect(myfunc.stuff.length).toEqual(1);
        expect(myfunc.stuff[0]).toEqual('Testing');
    });
  
    it("should be able to initialize", function() {
        expect(myfunc.init).toBeDefined();
        myfunc.init();
        expect(myfunc.init).toHaveBeenCalled();
       
    });

    

    //ADDITIONAL TESTS TO WRITE FIRST:
    describe("appending strings", function() {
        it("should be able to append 2 strings", function() {
            expect(myfunc.append).toBeDefined();
        });
        it("should append 2 strings", function() {
            expect(myfunc.append('hello ','world')).toEqual('hello world');
        });
    });
    
    
     describe("slice tests", function() {
         
         var initArray = [1,2,3,4];
         var result = initArray.splice(1,1);
        it("[1,2,3,4] split 1", function() {
            expect(initArray).toEqual([1,3,4]);
        });
         
    });
    
});

