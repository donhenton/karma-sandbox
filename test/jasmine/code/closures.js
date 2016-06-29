// http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/

function inheritProtoType(child,parent)
{
    var copyOfParent = Object.create(parent.prototype);
    copyOfParent.constructor = child;
    child.prototype = copyOfParent;
    
}


if (typeof NS === 'undefined') { NS = {}; }
NS.closureDemo = function()
{
    var  alpha = 'fred';
    var localMethod = function()
    {
        return "alpha internal is "+this.alpha;
        
    }
    
    exports = function()
    {
        this.getAlphaInternal = function()
        {
            return "Internal alpha external is " + alpha;
        }
        
        
    };
    
    
    
    exports.getAlphaViaInternalMethod = function()
    {
       return exports.getAlphaInternal();
        
    }
    
    
    exports.getAlpha2 = function()
    {
        return "(2) alpha external is " + alpha;
    }
    
    exports.getAlphaForBind = function(test)
    {
       // this.alpha = "poncho";
       this.test = test;
        return "(2) alpha external is " + this.test;
    }
    
    return exports;
}