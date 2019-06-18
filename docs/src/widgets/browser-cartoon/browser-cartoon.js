import { getComponentStyle } from '../../utils/style-helper.js';
import anime from '../../../scripts/anime.es.js';
export class BrowserCartoon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <svg  viewBox="0 0 1440 730" width='70vw'>
        <g id="browser" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M109.443,67 L330.557,67 L321.167643,41.9617162 C320.151842,39.2529139 316.897755,37 314.000796,37 L125.999204,37 C123.108224,37 119.846816,39.2564917 118.832357,41.9617162 L109.443,67 Z" id="Background-Tab1" stroke="#057100" stroke-width="2" fill-opacity="0.05" fill="#A1A7BE"></path>
            <path d="M16,67 L16,109 L1424,109 L1424,67 L530.557,67 L521.167643,41.9617162 C520.151842,39.2529139 516.897755,37 514.000796,37 L325.999204,37 C323.108224,37 319.846816,39.2564917 318.832357,41.9617162 L309.443,67 L16,67 Z" id="selectedTab" stroke="#057100" stroke-width="2" fill="#B4ECB1"></path>
            <g id="broswernav" transform="translate(33.000000, 80.000000)" fill="#057100">
                <path d="M73.6,2.4 C72.2,0.9 70.2,0 68,0 C63.6,0 60,3.6 60,8 C60,12.4 63.6,16 68,16 C71.7,16 74.8,13.4 75.7,10 L73.6,10 C72.8,12.3 70.6,14 68,14 C64.7,14 62,11.3 62,8 C62,4.7 64.7,2 68,2 C69.7,2 71.1,2.7 72.2,3.8 L69,7 L76,7 L76,0 L73.6,2.4 L73.6,2.4 Z" id="Refresh"></path>
                <polygon id="Next" points="38 0 36.6 1.4 42.2 7 30 7 30 9 42.2 9 36.6 14.6 38 16 46 8"></polygon>
                <polygon id="Previous" points="16 7 3.8 7 9.4 1.4 8 0 0 8 8 16 9.4 14.6 3.8 9 16 9"></polygon>
            </g>
            <rect id="searchBox" stroke="#057100" stroke-width="2" fill="#FFFFFF" x="145" y="77" width="998" height="21" rx="8"></rect>
            <rect id="Border" stroke="#057100" stroke-width="4" x="17" y="17" width="1406" height="696" rx="8"></rect>
            <g id="windowButtons" transform="translate(33.000000, 33.000000)" stroke="#057100" stroke-width="2">
                <circle id="close" class="button" cx="7" cy="7" r="7"></circle>
                <circle id="mimimize" class="button" cx="31" cy="7" r="7"></circle>
                <circle id="Extend" class="button" cx="55" cy="7" r="7"></circle>
            </g>
            <rect id="player" stroke="#D30000" stroke-width="2" x="258" y="167" width="885" height="498" rx="8"></rect>
            <rect id="info" stroke="#C25700" stroke-width="2" x="1196" y="167" width="186" height="498" rx="8"></rect>
        </g>
    </svg>
        `;
        getComponentStyle('src/widgets/browser-cartoon/browser-cartoon.css', this.shadowRoot);
    }
    showBrowser(){
        this.shadowRoot.querySelector('svg').style.visibility = 'visible';
        this.shadowRoot.querySelector('#Border').classList.add('show');
        this.shadowRoot.querySelector('#selectedTab').classList.add('show');
        this.shadowRoot.querySelector('#Background-Tab1').classList.add('show');
        this.shadowRoot.querySelectorAll('.button').forEach(item => item.classList.add('show'));
    }
    showPlayer(){
        this.shadowRoot.querySelector('#player').classList.add('show');
    }
    showInfo(){
        this.shadowRoot.querySelector('#info').classList.add('show');
    }
   
}
if (!customElements.get('browser-cartoon')) {
    customElements.define('browser-cartoon', BrowserCartoon);
}