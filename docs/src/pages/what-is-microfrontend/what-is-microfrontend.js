import {BaseAnimationPage} from '../base-animation-page.js';
import {getComponentStyle} from '../../utils/style-helper.js';
export class WhatIsMicrofrontendPage extends BaseAnimationPage {
    constructor(){
        super();
        
    }
    
    connectedCallback(){
        super.connectedCallback();
        this.shadowRoot.innerHTML = `
<div class="containter">
    <div class="title">What is a Micro-FrontEnd?</div>
    <div class="body">
        <div class='action action1'>
        Micro Frontends is to think about a website or web app as a composition of features which are owned by independent teams. Each team has a distinct area of business or mission it cares about and specialises in. A team is cross functional and develops its features end-to-end, from database to user interface.
        </div>
        <div class='action action2'>
        A Capability that a front end will execute with a bounded context and states contain in the  MFE.
        </div>
        <div id='bottom-div'>
            <div id='wizard'>
                <wizard-cartoon></wizard-cartoon>
            </div>
            <div class='action action3'>
                <video src="https://media.giphy.com/media/VeB9ieebylsaN5Jw8p/giphy.mp4" type="video/mp4" autoplay loop></video>
            </div>
        </div>
    </div>
</div>
       `;
       getComponentStyle('/micro-frontend-presentation/src/pages/what-is-microfrontend/what-is-microfrontend.css',this.shadowRoot);
       
       this._setHighlight();
    }
    _showAnimation(event){
        super._showAnimation(event);
        if(this.showIndex < 3){
            this.shadowRoot.querySelector('wizard-cartoon').lighting();
        }
    }
    
}
if(!customElements.get('what-is-microfrontend')){
    customElements.define('what-is-microfrontend',WhatIsMicrofrontendPage);
}