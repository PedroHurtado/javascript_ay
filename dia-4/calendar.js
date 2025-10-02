import styles from "./calendar.css" with { type: "css" };
import {generateCalendar} from './calendar-service.js'

/*
https://github.com/WICG/webcomponents
https://web.dev/articles/constructable-stylesheets?hl=es-419
https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
*/
export default class Calendar extends HTMLElement{
    //static observedAttributes = ["id"];
    constructor(){
        super() 
        const shadow = this.attachShadow({mode:'closed'})  
        shadow.adoptedStyleSheets=[styles] 
        const div = document.createElement('div')
        div.className = 'calendar'
        
        div.insertBefore(this.createSlot('header'), null)
        
        for(const {day} of generateCalendar(new Date(2025,1,22))){
            const dayDom = document.createElement('div')
            dayDom.className="day"
            dayDom.setAttribute('data-day',day)
            dayDom.textContent=day
            div.insertBefore(dayDom,null)
        }        
        div.insertBefore(this.createSlot('footer'), null)

        shadow.appendChild(div)
        //console.log('constructor')
    }
    createSlot(name){
        const slot= document.createElement('slot')
        slot.setAttribute('name', name)
        return slot
    }
    handlerClick(ev){
        const node = ev.composedPath().find(n=>n.dataset && 'day' in n.dataset)
        if(node){
            const {day} =node.dataset
            console.log(day) 
        }
    }
    connectedCallback(){
        this.addEventListener('click',this.handlerClick)
    }
    disconnectedCallback(){
        this.removeEventListener('click',this.handlerClick)
    }
    /*attributeChangedCallback(name, oldValue, newValue) {
        console.log(name)
        console.log(oldValue)
        console.log(newValue)
    }*/
}

customElements.define('ayesa-calendar',Calendar)

//customElements.define('ayesa_calendar',Calendar) No
//customElements.define('calendar',Calendar) No