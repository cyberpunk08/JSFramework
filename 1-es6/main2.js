import {data1, Shape} from './some'

console.log(data1);

class Rectagle extends Shape {
    constructor(id,x,y,width,height) {
        super(id,x,y)
        this.width = width
        this.height = height
    }

    sayHello() {
        super.sayHello();
        console.log(`Rectangle... ${this.id},${this.x},${this.y},${this.width},${this.height}`)
    }
}

var obj = new Rectagle(1,0,0,100,100)
obj.sayHello()