# Jerarquía del DOM en JavaScript

## Estructura de Herencia

La jerarquía del Document Object Model (DOM) sigue un patrón de herencia bien definido que va desde lo más específico hasta lo más fundamental:

**Elementos HTML concretos** como `HtmlDivElement`, `<a>` y `<h1>` heredan de `HtmlElement` (clase abstracta), que representa elementos HTML genéricos.

**Nodos de contenido** como `Text` y `Comment` heredan de `CharacterData`, una clase especializada para datos de caracteres dentro del árbol DOM.

Todos estos convergen en `Element`, que proporciona la funcionalidad base para cualquier elemento del documento.

La base común es `Node`, que representa cualquier nodo en el árbol DOM y hereda de `EventTarget`, permitiendo que todos los elementos manejen eventos.

Finalmente, todo hereda de `Object`, la clase fundamental de JavaScript, y la cadena de prototipos termina en `null`.

## Tabla de Jerarquías de Herencia

| Nivel | Rama HTML | Rama Text | Rama Comment |
|-------|-----------|-----------|--------------|
| **7** | `HtmlDivElement`, `<a>`, `<h1>` | `Text` | `Comment` |
| **6** | `HtmlElement` (abstracto) | `CharacterData` | `CharacterData` |
| **5** | `Element` |  |  |
| **4** | `Node` | `Node` | `Node` |
| **3** | `EventTarget` | `EventTarget` | `EventTarget` |
| **2** | `Object` | `Object` | `Object` |
| **1** | `null` | `null` | `null` |

**Flujo de herencia:** Específico → Abstracto → Base → Nulo

## Espacios de Nombres XML

El DOM distingue tres espacios de nombres principales para diferentes tipos de contenido:

### SVG (Scalable Vector Graphics)
```
http://www.w3.org/2000/svg
```
Utilizado para gráficos vectoriales escalables.

### HTML (HyperText Markup Language)
```
http://www.w3.org/1999/xhtml
```
Utilizado para documentos HTML estándar.

### MathML (Mathematical Markup Language)
```
http://www.w3.org/1998/Math/MathML
```
Utilizado para notación matemática en la web.

## Conclusión

Esta arquitectura permite que el navegador procese y manipule diferentes tipos de contenido web de manera consistente y eficiente, proporcionando una base sólida para la programación web moderna.

---

