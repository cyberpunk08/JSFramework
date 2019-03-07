(function(){
    console.log("es5.......scope test......");
    var name = "hello";
    console.log(name);

    if(true) {
       var name = "kkang"; 
    } 
    console.log(name);
    {
        var name = "kim";
    }
    console.log(name);


    console.log("es6.....scope test......");
    let name1 = "hello";
    console.log(name1);
    if(true) {
       let name1 = "kkang"; 
    } 
    console.log(name1);
    {
        let name1 = "kim";
    }
    console.log(name1);


    console.log("es6...default argument.....");

    function some(x, y=10, z=20) {
        console.log(`X=${x} Y=${y} Z=${z}`);
    }

    some(1);
    some(1,2);
    some(1,2,3);
})()