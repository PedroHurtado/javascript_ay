class Foo{
    constructor(){
        this._count = 0
        //this.incrementar = this.incrementar.bind(this)
        this.render()
        
    }
    render(){
        const button = document.createElement('button')
        button.addEventListener('click',()=>{
            this._count++
            console.log(this._count)
        })        
        button.textContent = "Aceptar"
        document.body.appendChild(button)
    }
    incrementar(value){
        this._count++;
        /*
            Carol->0->pierde el ambito
            Omar->incrementa
            Pedro: dice que error en consola por cada click            
        */
        console.log(this._count)
    }
}
new Foo()