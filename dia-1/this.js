/*
    1. PERDIDA DE AMBITO
    1.1 Cuando se asigna un metodo a una variable
    1.2 Cunado se pasa un metodo como argumento a otra funcion
*/

window.x=10
window.foo = {
    x:11,
    write:function(){console.log(this.x)}
}

wibdow.foo.write() // 10 o 11(x)
window.writer = window.foo.write.bind(this)
window.foo.write() //10
window.writer() //10(x) o 11

//evitar el uso de var
//let si queremos que sean mutables
//const si queremos si queremos que sean constantes, no inmutables

function printVar(){
    var i;
    for(i=0;i<100;i++){
        console.log(i)
    }
    console.log(i) //
}

function printLet(){
    
    for(let i=0;i<100;i++){
        console.log(i)
    }
    console.log(i) //
}

class Bar{
    constructor(writer){
        writer()  //undefined
        this.writer = writer
        this.writer(); //Bar
    }
}


/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
*/
class Foo{
    constructor(){
        new Bar(this.writer) //perdida de ambito 
        //new Bar(this.writer.bind(this)) bind estable el ambito(1)
        //new Bar(()=>this.writer()) // no se pierde ambito(2)
    }
    writer(){
        console.log(this)
    }
}

new Foo()