export const createInput = (classes) =>{
    const $element = document.createElement('input')
    $element.classList = classes.join(' ');
    
    return $element;
}