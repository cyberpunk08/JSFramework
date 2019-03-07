var MyClass = /** @class */ (function () {
    function MyClass(name, email, address) {
        this.email = email;
        this.address = address;
        this.age = 10;
        // this.name = "kkang"  //error
        this.email = "a@a.com";
        this.address = "seoul";
        // age=20   //error
        this.age = 30;
    }
    return MyClass;
}());
var obj = new MyClass('kkang', 'b@b.com', 'busan');
// obj.name='lee'   //error
// obj.email = 'c@c.com';   //error
obj.address = 'inchun';
var myFun;
myFun = function (str, sub) {
    var result = str.search(sub);
    return result > -1;
};
var MyClass2 = /** @class */ (function () {
    function MyClass2() {
        this.data = true;
    }
    MyClass2.prototype.some = function () {
        return true;
    };
    return MyClass2;
}());
