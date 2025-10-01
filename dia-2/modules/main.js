import {suma,multiplicacion,division,resta as r} from './operaciones.js'
import * as op from './operaciones.js'
import './run.js'
import  './pages/menu.js'

/*
  se carga el default le puedo como quiera en la importación
  y debe de ser el primero y no meterlo en el desectructuring
  del modulo
import pepito, {a,b} from './pages/page1.js' 
*/

console.log(r(4,4))
console.log(multiplicacion(3,5))
console.log(division(4,4))
console.log(suma(3,5))

console.log(op.resta(0,0))