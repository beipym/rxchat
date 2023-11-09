export const customElement = (node, classes, attrs, children, customHtml) =>{

    const $element = document.createElement(node);

    $element.classList = classes.join(' ');

    
    Object.keys(attrs).map(
        (value, index) => {
            $element.setAttribute( value, attrs[value] )
        }
    )

    if(children.lentgh > 0){

        children.map(
            (item) => {
                $element.appendChild(item)
            }
        )
    }

    // if(customHtml){
        $element.innerHTML = customHtml;
    // }

    return $element;
}