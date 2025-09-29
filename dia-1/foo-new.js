class Foo{
    constructor(name){
        this._name = name
    }
    _write(){
        console.log(this._name)
    }
    write(){
        this._write()
    }
    static write(){
        console.log("static method")
    }
}