import {getHighlightStyle,setBaseStyle} from '../utils/style-helper.js';
import {executeAnimation} from '../utils/animation-helper.js';
export class BaseAnimationPage extends HTMLElement {
    constructor(){
        super();
        this.showIndex = 0;
        this['_showAnimation'] = this['_showAnimation'].bind(this);
        this.attachShadow({mode: 'open'});
        setBaseStyle(this.shadowRoot);
    }
    disconnectedCallback(){
        
    }
    connectedCallback(){        
        document.addEventListener('keyup',this._showAnimation);
    }
    _setHighlight(){
        getHighlightStyle(this.shadowRoot,'atom-one-light');
        this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }
    _showAnimation(event){
        this.showIndex++;
        executeAnimation(event,this.shadowRoot,this.showIndex);
            
    }
    
}
