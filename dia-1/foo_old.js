
/*
    function Foo(name) {
        this._name = name;
    }
    Foo.prototype._write = function () {
        console.log(this._name);
    };
    Foo.prototype.write = function () {
        this._write();
    };
    Foo.write = function () {
        console.log("static method");
    };
*/

//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
//https://claude.ai/chat/fcc79b8c-96bc-4178-8b7e-97c49445be05
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
//Definicion del tipo y constructor
function Foo(name){
    this._name = name
}

//Method
Foo.prototype.write = function(){
    this._write()
}

Foo.prototype._write = function(){
    console.log(this._name)
}

Foo.write = function(){
    console.log("Static method")
}