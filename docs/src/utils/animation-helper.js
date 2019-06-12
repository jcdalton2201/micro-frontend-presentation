/**
 * 
 * @param {Event} event 
 * @param {HTMLElement} shadowRoot 
 * @param {int} showIndex 
 */
export function executeAnimation(event,shadowRoot,showIndex){
    if(event.keyCode === 78){
        shadowRoot.querySelector(`.action${showIndex}`).classList.add('show');
    }
}