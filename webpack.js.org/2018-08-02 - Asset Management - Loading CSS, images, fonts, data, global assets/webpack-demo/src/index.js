import _ from 'lodash';
import './style.css';

function component() {
    var element = document.createElement('div');
    
    // Lodash, now imported by current index.js script(see above).
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    
    return element;
}

document.body.appendChild(component());