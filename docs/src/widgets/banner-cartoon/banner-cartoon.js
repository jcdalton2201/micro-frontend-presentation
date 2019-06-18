import { getComponentStyle } from '../../utils/style-helper.js';
import anime from '../../../scripts/anime.es.js';
export class BannerCartoon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <svg width="455px" height="83px" viewBox="0 0 455 83" >
        <g id="banner" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M10,4 C20.6666667,27.3333333 61,39 131,39 C180.367148,39 236.364381,16.6421243 298,12 C315.173616,10.7065586 357.173616,12.039892 424,16 L364,31 L418,71 C363.333333,52.3333333 325.666667,44 305,46 C271.342616,49.2571662 211.224923,69.8887517 131,75 C106.980458,76.5303205 64.3137916,71.8636538 3,61 L19,39 L10,4 Z" id="Path-3" fill='#FFFFFF' stroke="#000000"></path>
        <path  d="M6,59 C62.9054954,69.1149257 103.572162,73.448259 128,72 C205.139273,67.4266257 289.562566,37.7436809 311,41 C363.666667,49 396.333333,57.3333333 409,66" id="myPath" stroke="#FFFFFF"></path>
        </g>
        <text>
            <textPath startOffset='15px' href='#myPath'>
                I Want to Listen to My Music
            </textPath>
        </text>
    </svg>
        `;
        getComponentStyle('src/widgets/banner-cartoon/banner-cartoon.css', this.shadowRoot);
    }
   
}
if (!customElements.get('banner-cartoon')) {
    customElements.define('banner-cartoon', BannerCartoon);
}