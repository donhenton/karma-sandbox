/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function alpha() {
    this.x = 1;
    this.y = 2;
}
alpha.prototype.setY = function (t) {
    this.y = t;
};
alpha.prototype.setX = function (t) {
    this.x = t;
};

alpha.prototype.getY = function () {
    return this.y;
};
alpha.prototype.getX = function () {
    return this.x;
};



var Person = {
    FirstName: "John",
    LastName: "Smith",
    FullName: function () {
        return this.FirstName + " " + this.LastName;
    }

}

function Worker(First, Last) {
    this.FirstName = First;
    this.LastName = Last;
};
Worker.prototype = Person;