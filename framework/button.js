export const createButton = (classes , title) =>{
    const $element = document.createElement('button')
    $element.classList = classes.join(' ');
    
    const $title = document.createElement('span')

    $title.innerHTML = title ;
    $element.appendChild($title);

    return $element;
}