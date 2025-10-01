/*
    https://dmitripavlutin.com/javascript-event-delegation/
    https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes
*/
import {loadPage} from '../util.js'
!function menu(){
    document.addEventListener('click', async (ev)=>{
        ev.preventDefault()
        ev.stopPropagation()
        const node = ev.composedPath().find(n=>n.dataset && 'page' in n.dataset)
        if(node){
            const {page}= node.dataset
            const url = `./${page}.js`
            const module = await import(url)
            module && loadPage(module.default())
        }
        
    })
}()