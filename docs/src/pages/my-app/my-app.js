import '../../widgets/knight-cartoon/knight-cartoon.js';
import '../../widgets/banner-cartoon/banner-cartoon.js';
import '../../widgets/browser-cartoon/browser-cartoon.js';
import {BaseAnimationPage} from '../base-animation-page.js';
import {getComponentStyle} from '../../utils/style-helper.js';
export class MyAppPage extends BaseAnimationPage {
    constructor(){
        super();
        
    }
    
    connectedCallback(){
        super.connectedCallback();
        this.shadowRoot.innerHTML = `
    <div class="containter">
        <div class="body">
            <div id='top-row'>
                <browser-cartoon></browser-cartoon>
                <knight-cartoon></knight-cartoon>
                <banner-cartoon></banner-cartonn>
            </div>
        </div>
    </div>
       `;
       getComponentStyle('/micro-frontend-presentation/src/pages/my-app/my-app.css',this.shadowRoot);
       
    }
    _showAnimation(event){
        super._showAnimation(event);
        if(this.showIndex === 1){
            this.shadowRoot.querySelector('browser-cartoon').showBrowser();
        }
        if(this.showIndex === 2){
            this.shadowRoot.querySelector('browser-cartoon').showPlayer();
        }
        if(this.showIndex === 3){
            this.shadowRoot.querySelector('browser-cartoon').showInfo();
        }
        if(this.showIndex === 4){
            this.shadowRoot.innerHTML = `
            <div class="containter" style='height: 100vh;'>
            <div class="body">
<video src="https://media.giphy.com/media/OFEGBrfPh8QmI/giphy.mp4"  type="video/mp4" autoplay loop></video>
</div>
</div>
            `
        }
    }
    
}
if(!customElements.get('my-app')){
    customElements.define('my-app',MyAppPage);
}