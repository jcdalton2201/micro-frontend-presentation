import {BaseAnimationPage} from '../base-animation-page.js';
export class TemplatePage extends BaseAnimationPage {
    constructor(){
        super();
        
    }
    
    connectedCallback(){
        super.connectedCallback();
        this.shadowRoot.innerHTML = `
<div class="containter">
    <div class="title">Title</div>
    <div class="body">
        
    </div>
</div>
       `;
       this._setHighlight();
    }
    
}
if(!customElements.get('template-page')){
    customElements.define('template-page',TemplatePage);
}