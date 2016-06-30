

////////////////////////////////////////////////////////////////////////////


describe("image_tests.js", function () {
     
    let testClass = null;
      beforeEach(function () {
         testClass = new ImageLoader(imageData);

    });
     
     
    it("data should exist", function ()
    {

        expect(imageData).toBeDefined();
    });
     
    it("can create class", function ()
    {
        
        expect(testClass).toBeDefined();
    });
    
    it("test Immutable Data", function ()
    {
        let hasMore = testClass.hasMore();
        
        expect(hasMore).toEqual(true)
        hasMore = false;
        hasMore2 = testClass.hasMore();
        expect(hasMore2).toEqual(true)
    });
    
    it("high level data works", function ()
    {
        let hasMore = testClass.hasMore();       
        expect(hasMore).toEqual(true);
        let nextOffset = testClass.nextOffset();
        expect(nextOffset).toEqual(2)
         
    });
    
    
    it("data must be an object", function ()
    {
        function nullCreate()
        {
            let nullTest =   new ImageLoader();
        }
        function needObject()
        {
            let nullTest =   new ImageLoader('fred');
        }
         
        expect(nullCreate).toThrow() ;
        expect(needObject).toThrow() ;
         
         
    });
    
    it("list data exists", function ()
    {
        let listData = testClass.getListData();
        expect(listData.length).toEqual(2)
         
         
    });
    it("list data is immutable", function ()
    {
        let listData = testClass.getListData();
        let ref = listData[0];
        expect(ref.userid).toBeDefined();
        ref.userid = 'fred';
        listData = testClass.getListData();
        ref = listData[0];
        expect(ref.userid).not.toEqual('fred');
         
         
    });
    
    it("getters work", function ()
    {
        let listData = testClass.getListData();
        let ref = listData[0];
        expect(ref.userid).toBeDefined();
        expect(ref.preview).toBeDefined(); 
        expect(ref.deviationid).toBeDefined(); 
        expect(ref.category).toBeDefined(); 
        expect(ref.categoryPath).toBeDefined(); 
        
        
    });
    
     it("thumbs exist", function ()
    {
        let listData = testClass.getListData();
        let ref = listData[0];
        expect(ref.thumbs.length).toEqual(3);
        let testValues = [150,200,420]
        testValues.forEach((v,i) =>{
            
            expect(ref.thumbs[i].height).toEqual(testValues[i])
            
        })
         
    });
    
     it("smallest thumb works", function ()
    {
        let listData = testClass.getListData();
        let ref = listData[0];
        let testThumb = 
                
                {
                    "src": "space_girl__commission__by_karladiazc-da88vv3.jpg",
                    "height": 150,
                    "width": 107,
                    "transparency": false
                }
    
                
                
        
        let smallThumb = ref.smallestThumb;
        expect(smallThumb.height).toEqual(testThumb.height)
        expect(smallThumb.width).toEqual(testThumb.width)
        expect(smallThumb.transparency).toEqual(testThumb.transparency)
        expect(smallThumb.src.indexOf(testThumb.src)).toBeGreaterThan(-1)
         
    });
    
    
    
    
    
    

});
