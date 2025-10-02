const content = document.getElementById('content')

function mount(parentNode, newNode, referenceNode) {

    //https://developer.mozilla.org/es/docs/Web/API/Node/insertBefore

    //anchor es null actua igual que appendChild
    //anchor no es nulo lo pone por encima del anchor
    //div.appendChild excepto que lo muy claro no utilizar

    parentNode.insertBefore(newNode, referenceNode)
}
function create() {
    /*
        document.createElementNS('http://www.w3.org/1999/xhtml', 'div')
        document.createAttributeNS()->namespace
        document.createAttribute()->html
    */

    const div = document.createElement('div')
    const text = document.createTextNode('Hola Mundo!')
    const comment = document.createComment("Clase de dom")
    mount(div, text)
    mount(div, comment, text)
    mount(content, div)

    return { div, text, comment }
}

function update() {
    const { div, text, comment } = create()

    div.setAttribute("id", "div1")
    div.setAttribute("disabled", "") //presente 
    //div.removeAttribute("id")
    //div.removeAttribute("disabled") no presente
    div.className = "red"
    //div.classList.add
    div.style.setProperty("color", "blue")
    //div.style.removeProperty("color")
    text.data = "Hello World"
    comment.data = "Comment"
    return { div, text, comment }
}

!function remove() {
    const { div, text, comment } = update()
    div.removeChild(comment)
    //div.removeAttribute("id")
    div.removeAttribute('disabled')
    div.style.removeProperty("color")
    //div.textContent = '' //elimina todos los hijos

}()

!function select() {
    let result   //HTMLCollection
    const selectDiv = document.getElementById('div1')  //1 node
    result = document.getElementsByClassName('red') //[] nodes
    result = document.getElementsByTagName('div') //[] nodes

    result = document.querySelector('#div1') //1 node //Node
    result = document.querySelector('.red') //1 node
    result = document.querySelector('div') //1 node

    result = document.querySelectorAll('#div1') //[] node //NodeList
    result = document.querySelectorAll('.red') //[] node
    result = document.querySelectorAll('div') //[] node

    const firstChild = selectDiv.children[0]  //devuelve los hijos del tipo
    const firstNode = selectDiv.childNodes[0] //devuelve los elements+text+comment

    firstChild.nextSibling //recorre de izquierda a derecha text+comment+elemento
    firstChild.nextElementSibling //recorrer elementos de izquiera a derecha

    firstChild.previousSibling //de derecha a izquierda
    firstChild.previousElementSibling //de derecha a izquierda

}()


function performance(){
    //crear elemetos virtuales en memoria
    
    const fragment = document.createDocumentFragment()
    fragment.cloneNode(true) //extraer esos elementos clonados

    //https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker
    document.body.textContent = ''
}