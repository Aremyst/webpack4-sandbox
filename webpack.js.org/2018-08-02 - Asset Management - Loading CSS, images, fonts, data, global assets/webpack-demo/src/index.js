import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    
    // Lodash, now imported by current index.js script(see above).
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    return element;
}

document.body.appendChild(component());