let data1 = "hello"
let data2 = "world"

function funA() {
    console.log("fun()......")
}

class Shape {
    constructor(id,x,y) {
        this.id = id
        this.x = x
        this.y = y
    }

    sayHello() {
        console.log(`Shape..sayHello... ${this.id}, ${this.x}, ${this.y}`)
    }
}

export {data1, funA, Shape}