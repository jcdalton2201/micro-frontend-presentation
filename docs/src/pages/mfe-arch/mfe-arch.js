import {BaseAnimationPage} from '../base-animation-page.js';
import {getComponentStyle} from '../../utils/style-helper.js';
export class MfeArch extends BaseAnimationPage {
    constructor(){
        super();
        
    }
    
    connectedCallback(){
        super.connectedCallback();
        getComponentStyle('/micro-frontend-presentation/src/pages/mfe-arch/mfe-arch.css',this.shadowRoot);
        this.shadowRoot.innerHTML = `
<div class="containter">
    <div class="title">MFE structure</div>
    <div class="body">
    <svg  viewBox="0 0 1440 730" width='70vw' encoding="UTF-8">
    <filter>
    </filter>
       <g id="appGroup">
        <rect id="application" stroke="#D30000" stroke-width="2" x="15" y="15" width="1425" height="600" rx="8"></rect>
        <text id="applicationTitle" class='titles' x="30" y="50">
            I Want To Play Music
        </text>
       </g>
        <g id="newsCap">
            <rect id="newscap" stroke="#B000BF" stroke-width="2" x="30" y="100" width="1400" height="200" rx="8"></rect>
            <text id="newsCapTitle" class="titles" x="40" y="130">
            Music News
            </text>
            <rect id="newsUi" stroke="#B000BF" stroke-width="2" x="60" y="150" width="300" height="100" rx="8"></rect>
            <text id="newsTitleUi" class="titles" x="170" y="200">
            MFE 
            </text>
            <rect id="newsBff" stroke="#B000BF" stroke-width="2" x="380" y="150" width="300" height="100" rx="8"></rect>
            <text id="newsTitleBff" class="titles" x="500" y="200">
            BFF 
            </text>
            <rect id="newsMicroservice" stroke="#B000BF" stroke-width="2" x="700" y="150" width="300" height="100" rx="8"></rect>
            <text id="newsTitleMicroservice" class="titles" x="820" y="200">
            &#956;S
            </text>
            <rect id="newsDb" stroke="#B000BF" stroke-width="2" x="1020" y="150" width="300" height="100" rx="8"></rect>
            <text id="newsTitleDb" class="titles" x="1140" y="200">
            Data 
            </text>
        </g>
        <g id="player">
            <rect id="playerCap" stroke="#269114" stroke-width="2" x="30" y="320" width="1400" height="200" rx="8"></rect>
            <text id="playerTitleCap" class="titles" x="40" y="370">
                Play Music Selected
            </text>
                    <rect id="playerUi" stroke="#269114" stroke-width="2" x="60" y="390" width="300" height="100" rx="8"></rect>
                    <text id="playerTitleUi" class="titles" x="170" y="440">
                    MFE 
                    </text>
                    <rect id="playerBff" stroke="#269114" stroke-width="2" x="380" y="390" width="300" height="100" rx="8"></rect>
                    <text id="playerTitleBff" class="titles" x="500" y="440">
                    BFF 
                    </text>
                    <rect id="playerMicroservice" stroke="#269114" stroke-width="2" x="700" y="390" width="300" height="100" rx="8"></rect>
                    <text id="playerTitleMicroservice" class="titles" x="820" y="440">
                    &#956;S
                    </text>
                    <rect id="playerDb" stroke="#269114" stroke-width="2" x="1020" y="390" width="300" height="100" rx="8"></rect>
                    <text id="playerTitleDb" class="titles" x="1140" y="440">
                    Data 
                    </text>
        </g>
</svg>
    </div>
</div>
       `;
       this._setHighlight();
       
    }
    _showAnimation(event){
        super._showAnimation(event);
        if(this.showIndex === 1){
            this.shadowRoot.querySelector('#appGroup').style.display = 'block';
            setTimeout(()=> this.shadowRoot.querySelector('#application').classList.add('show'));
            setTimeout(()=> this.shadowRoot.querySelector('#applicationTitle').classList.add('show'));
        }
        if(this.showIndex === 2){
            this.shadowRoot.querySelector('#newsCap').style.display = 'block';
            setTimeout(()=> this.shadowRoot.querySelector('#newscap').classList.add('show'));
            setTimeout(()=> this.shadowRoot.querySelector('#newsCapTitle').classList.add('show'));
        }
        if(this.showIndex === 3){
            setTimeout(()=> this.shadowRoot.querySelector('#newsUi').classList.add('show'));
            setTimeout(()=> this.shadowRoot.querySelector('#newsTitleUi').classList.add('show'));
        }
        if(this.showIndex === 4){
            setTimeout(()=> this.shadowRoot.querySelector('#newsBff').classList.add('show'));
            setTimeout(()=> this.shadowRoot.querySelector('#newsTitleBff').classList.add('show'));
        }
        if(this.showIndex === 5){
            setTimeout(()=> this.shadowRoot.querySelector('#newsMicroservice').classList.add('show'));
            setTimeout(()=> this.shadowRoot.querySelector('#newsTitleMicroservice').classList.add('show'));
        }
        if(this.showIndex === 6){
            setTimeout(()=> this.shadowRoot.querySelector('#newsDb').classList.add('show'));
            setTimeout(()=> this.shadowRoot.querySelector('#newsTitleDb').classList.add('show'));
        }
        if(this.showIndex === 7){
            this.shadowRoot.querySelector('#player').style.display = 'block';
            setTimeout(()=> {
                this.shadowRoot.querySelector('#playerCap').classList.add('show')
                this.shadowRoot.querySelector('#playerTitleCap').classList.add('show')
                this.shadowRoot.querySelector('#playerUi').classList.add('show')
                this.shadowRoot.querySelector('#playerTitleUi').classList.add('show')
                this.shadowRoot.querySelector('#playerBff').classList.add('show')
                this.shadowRoot.querySelector('#playerTitleBff').classList.add('show')
                this.shadowRoot.querySelector('#playerMicroservice').classList.add('show')
                this.shadowRoot.querySelector('#playerTitleMicroservice').classList.add('show')
                this.shadowRoot.querySelector('#playerDb').classList.add('show')
                this.shadowRoot.querySelector('#playerTitleDb').classList.add('show')
            });
        }
        if(this.showIndex === 8){
            this.shadowRoot.innerHTML =`
            <div class="containter" style='height: 100vh;'>
            <div class="body">
<video src="https://media.giphy.com/media/10yIEN8cMn4i9W/giphy.mp4"  type="video/mp4" autoplay loop></video>
</div>
</div>         
            
            `;
        }
    }
    
}
if(!customElements.get('mfe-arch')){
    customElements.define('mfe-arch',MfeArch);
}