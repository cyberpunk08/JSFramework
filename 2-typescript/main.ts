class MyClass {
    age=10
    constructor(name:string, private email:string, public address : string) {
        // this.name = "kkang"  //error
        this.email = "a@a.com"
        this.address = "seoul"
        // age=20   //error
        this.age = 30
    }
}

let obj = new MyClass('kkang', 'b@b.com', 'busan')
// obj.name='lee'   //error
// obj.email = 'c@c.com';   //error
obj.address = 'inchun'


interface MyInterface {
    (arg1:string, arg2:string) : boolean
}

let myFun : MyInterface

myFun = function(str:string,sub:string) : boolean {
    let result = str.search(sub)
    return result > -1
}

interface MyClassInterface {
    data : boolean
    some() : boolean
}

class MyClass2 implements MyClassInterface {
    data : boolean = true
    some():boolean {
        return true
    }
}

