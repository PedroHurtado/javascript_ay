export function loadPage(page){
    const content = document.getElementById('content')
    if(content){
        content.innerHTML = page
    }
}