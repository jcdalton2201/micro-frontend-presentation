import {BaseAnimationPage} from '../base-animation-page.js';
import {getComponentStyle} from '../../utils/style-helper.js';
export class WcApi extends BaseAnimationPage {
    constructor(){
        super();
        
    }
    
    connectedCallback(){
        super.connectedCallback();
        getComponentStyle('/micro-frontend-presentation/src/pages/wc-api/wc-api.css',this.shadowRoot);
        this.shadowRoot.innerHTML = `
<div class="containter">
    <div class="title">Web Component</div>
    <div class="body">
    <pre>
    <code class="javascript">
export class MyElement extends HTMLElement {
    static get observedAttributes(){return []}
    constructor(){
        super(); 
        this.attachShadow({mode: 'open'});  
    }
    connectedCallback(){}
    disconnectedCallback(){}
    adoptedCallback(){}
    attributeChangedCallback(name, oldValue, newValue)){}
    
}
if(!customElements.get('my-element')){
    customElements.define('my-element',MyElement);
}
    </code>
</pre>

    </div>
</div>
       `;
       this._setHighlight();
    }
    _showAnimation(event){
        super._showAnimation(event);
        if(this.showIndex === 1){
            this.shadowRoot.innerHTML = `
            <div class="containter">
    <div class="title">Web Component API</div>
    <div class="body">
    <svg  viewBox="0 0 1440 730" width='70vw' encoding="UTF-8">
    <rect id="newsUi" stroke="#B000BF" stroke-width="2" x="570" y="150" width="300" height="100" rx="8">
    </rect>
    <g class='arrow' x='570'>
        <path d="M50,2 L50,95" class="arrowbody" ></path>
        <path class='tail-1' d="M50,95 L30,76" id="Path-10" ></path>
        <path class='tail-2' d="M50,95 L70,76" id="Path-11" ></path>
    </g>
    <text x='580' y='180' fill='white'>Custom Element</text>
    <text x='580' y='100' fill='tomato'>Attributes</text>
    <text x='880' y='200' fill='green'>Events</text>
    <g class='arrow event' x='570'>
        <path d="M50,2 L50,95" class="arrowbody" ></path>
        <path class='tail-1' d="M50,95 L30,76" id="Path-10" ></path>
        <path class='tail-2' d="M50,95 L70,76" id="Path-11" ></path>
    </g>
</svg>
    </div>
    </div>
            
            `;
        }
    }
    
}
if(!customElements.get('wc-api')){
    customElements.define('wc-api',WcApi);
}


