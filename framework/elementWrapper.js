export const elementWrapper = (children , classes) => {

    const $div = document.createElement('div');
    $div.classList = classes.join(' ');

    children.forEach(element => {
        $div.appendChild(element)
    });

    return $div;
}