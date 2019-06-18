import { BaseAnimationPage } from '../base-animation-page.js';
import { getComponentStyle } from '../../utils/style-helper.js';
export class WcStructure extends BaseAnimationPage {
    constructor() {
        super();
        this['truckDone'] = this['truckDone'].bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        getComponentStyle('/micro-frontend-presentation/src/pages/wc-structure/wc-structure.css', this.shadowRoot);
        this.shadowRoot.innerHTML = `
<div class="containter">
    <div class="title">Deploying your MicroFrontend</div>
    <div class="body">
    <svg width="95vw" height="1024px" viewBox="0 0 1440 1024">
        <defs>
            <linearGradient x1="26.2256918%" y1="46.223655%" x2="11.8470228%" y2="36.8523898%" id="linearGradient-1">
                <stop stop-color="#B2F4D0" offset="0%"></stop>
                <stop stop-color="#000000" stop-opacity="0.5" offset="100%"></stop>
            </linearGradient>
            <path
                d="M165,82.214574 C176.527845,80.070719 185.194511,80.070719 191,82.214574 C196.805489,84.3584291 204.805489,90.5131078 215,100.67861 L215,137.606683 L77,137.606683 L77,113.372635 C75.4525196,106.296272 77.7858529,100.141593 84,94.9085989 C90.2141471,89.675605 100.214147,85.4442634 114,82.214574 L165,82.214574 Z"
                id="path-2"></path>
            <linearGradient x1="32.6820481%" y1="50%" x2="29.8590357%" y2="39.1482251%" id="linearGradient-3">
                <stop stop-color="#B2F4D0" offset="0%"></stop>
                <stop stop-color="#000000" stop-opacity="0.5" offset="100%"></stop>
            </linearGradient>
            <path
                d="M66,39.2169465 C66,39.2169465 53.1333074,61.2189722 39,64.2169465 C24.8666926,67.2149208 4.75040166,60.7175807 0,53.2169465 C0,48.5502799 6.66666667,42.2169465 20,34.2169465 C21.7956479,36.9523834 23.1289813,38.61905 24,39.2169465 C27.3196634,41.4956749 30.3734095,40.9314476 33,41.2169465 C51.0119833,43.1747708 66,39.2169465 66,39.2169465 Z"
                id="path-4"></path>
        </defs>
        <g id="deployment" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="build-icon" transform="translate(1008.000000, 46.000000)">
                <g id="body">
                    <use fill="#B2F4D0" xlink:href="#path-2"></use>
                    <use stroke="#000000" stroke-width="1" fill="url(#linearGradient-1)" xlink:href="#path-2"></use>
                </g>
                <g id="Wall" transform="translate(0.000000, 130.000000)" fill="#B70000" stroke="#979797" stroke-width="3">
                    <rect id="Rectangle" x="1.5" y="61.5" width="67" height="27" rx="2"></rect>
                    <rect id="Rectangle" x="277.5" y="61.5" width="32" height="27" rx="2"></rect>
                    <rect id="Rectangle" x="277.5" y="1.5" width="32" height="27" rx="2"></rect>
                    <rect id="Rectangle" x="2.5" y="31.5" width="32" height="27" rx="2"></rect>
                    <rect id="Rectangle" x="70.5" y="61.5" width="67" height="27" rx="2"></rect>
                    <rect id="Rectangle" x="139.5" y="61.5" width="67" height="27" rx="2"></rect>
                    <rect id="Rectangle" x="208.5" y="61.5" width="67" height="27" rx="2"></rect>
                    <rect id="Rectangle" x="36.5" y="31.5" width="67" height="27" rx="2"></rect>
                    <rect id="Rectangle" x="105.5" y="31.5" width="67" height="27" rx="2"></rect>
                    <rect id="Rectangle" x="174.5" y="31.5" width="67" height="27" rx="2"></rect>
                    <rect id="Rectangle" x="243.5" y="31.5" width="67" height="27" rx="2"></rect>
                    <rect id="Rectangle" x="1.5" y="1.5" width="67" height="27" rx="2"></rect>
                    <rect id="Rectangle" x="70.5" y="1.5" width="67" height="27" rx="2"></rect>
                    <rect id="Rectangle" x="139.5" y="1.5" width="67" height="27" rx="2"></rect>
                    <rect id="Rectangle" x="208.5" y="1.5" width="67" height="27" rx="2"></rect>
                </g>
                <rect id="placeBrink" stroke="#979797" stroke-width="3" fill="#B70000"
                    transform="translate(212.000000, 98.000000) rotate(12.000000) translate(-212.000000, -98.000000) "
                    x="178.5" y="84.5" width="67" height="27" rx="2"></rect>
                <ellipse id="head" stroke="#000000" fill="#FCDFC9" cx="139.5" cy="52" rx="34.5" ry="44"></ellipse>
                <g id="hat" transform="translate(88.000000, 0.000000)">
                    <path
                        d="M82.9310813,10.2224163 L83,10.2169465 L83,30.2169465 L82.9310732,30.2213228 C82.9721715,35.6614242 69.3403299,40.9938481 52.1975647,42.192587 C34.8429733,43.4061383 20.4619868,39.9236696 20.0767324,34.4142754 C20.0720301,34.347029 20.0694346,34.2797914 20.0689268,34.2125702 L20,34.2169465 L20,15.2169465 L20.22947,15.1987346 C20.1466831,14.9421856 20.0953556,14.6805987 20.0767324,14.4142754 C19.6914781,8.90488132 33.4478438,3.45485727 50.8024353,2.24130602 C68.1570267,1.02775476 82.5380132,4.51022348 82.9232676,10.0196176 C82.9279954,10.0872287 82.9305935,10.1548308 82.9310813,10.2224163 Z"
                        id="Combined-Shape" stroke="#000000" fill="#B2F4D0"></path>
                    <ellipse id="Oval" stroke="#000000" fill="#B2F4D0"
                        transform="translate(51.120832, 12.389916) rotate(-4.000000) translate(-51.120832, -12.389916) "
                        cx="51.1208323" cy="12.3899159" rx="31.5" ry="10"></ellipse>
                    <g id="Path-13">
                        <use fill="#B2F4D0" xlink:href="#path-4"></use>
                        <use stroke="#000000" stroke-width="1" fill="url(#linearGradient-3)" xlink:href="#path-4"></use>
                    </g>
                </g>
                <ellipse id="hand" stroke="#979797" fill="#FCDFC9" cx="220.5" cy="86" rx="8.5" ry="10"></ellipse>
                <path
                    d="M130,73 C140.649141,68.814347 146.982474,67.814347 149,70 C152.026289,73.2784795 144.264381,84.0375366 142,86 C140.490413,87.3083089 137.823746,86.3083089 134,83"
                    id="mouth" stroke="#979797" fill="#ECCAB1"></path>
                <text id="your-bundel.js" font-size="16" font-weight="normal" fill="#FFFFFF">
                    <tspan x="80" y="240">your-bundel.js</tspan>
                </text>
            </g>   
        </g>
        <g id="truck" transform="translate(697.000000, 120.000000)">
            <text id="NPM"
                font-size="53" font-weight="normal" fill="#FFFFFF">
                <tspan x="158" y="75">NPM</tspan>
            </text>
            <path
                d="M74.7591653,132.5 L278,132.5 C282.142136,132.5 285.5,129.142136 285.5,125 L285.5,89 C285.5,84.8578644 282.142136,81.5 278,81.5 L147,81.5 C144.818994,81.5 142.790349,82.43549 141.37487,84.0392179 L140.5,85.0304388 L140.5,36.6350452 C140.5,32.927119 137.790426,29.7757073 134.124406,29.2198093 C111.413746,25.7761042 94.5358167,31.8003271 83.4060661,47.2917368 C77.3232917,55.7583012 72.9488282,67.0629208 70.2898731,81.2081356 L70.2147326,81.607871 L69.8080711,81.6156736 C47.4281804,82.0450743 30.3193663,83.6700802 18.4908103,86.4864031 C6.14467517,89.4259591 0.129056997,102.250641 0.517635902,125.127375 C0.587139729,129.219261 3.92407604,132.499999 8.01655262,132.5 L74.375,132.5 C74.4352061,132.5 74.4953241,132.499292 74.5789133,132.497877 C74.6389061,132.499292 74.6989927,132.5 74.7591653,132.5 Z"
                id="truckBody" stroke="#979797" fill="#7D1111"></path>
            <path
                d="M99.3726207,44.3333974 C95.2336443,48.9593121 92.7086782,57.3373534 91.8359572,69.4615287 C91.823058,69.6407294 91.8166022,69.8203357 91.8166022,70 C91.8166022,74.1421392 95.1744695,77.500005 99.3166075,77.5 L117,77.5 C121.142136,77.5 124.5,74.1421356 124.5,70 L124.5,46.5980139 C124.5,42.798503 121.658694,39.5992377 117.885776,39.1505049 C109.501869,38.1533509 103.348515,39.8897511 99.3726207,44.3333974 Z"
                id="window" stroke="#979797" fill="#FFFFFF"></path>
            <ellipse id="frontWheel" stroke="#979797" fill="#000000" cx="38.5" cy="137" rx="22.5" ry="22"></ellipse>
            <path
                d="M6,131 C5.775465,131.954274 8.775465,132.287607 15,132 C17.1925208,126.61769 19.1925208,122.951024 21,121 C25.7718653,115.849167 32.6859418,113 38,113 C43.1705484,113 49.0861035,115.150222 54,119 C55.4115133,120.105846 58.9307532,123.151884 61,127 C61.5789132,128.076587 61.9122465,129.743254 62,132 C67.7611605,133.522321 69.4278271,131.855654 67,127 C63.3582593,119.716519 60.9457445,115.756596 55,111 C49.0542555,106.243404 45.2904524,103 37,103 C28.7095476,103 25.5245544,105.580356 20,110 C14.4754456,114.419644 6.33680249,129.568589 6,131 Z"
                id="Path-14" stroke="#FFFFFF" stroke-width="2"></path>
            <ellipse id="backWheel" stroke="#979797" fill="#000000" cx="214.5" cy="133" rx="22.5" ry="22"></ellipse>
            <path d="" id="Path-15" stroke="#979797"></path>
            <path
                d="M191,132 C191,132 192,128 192,127 C192,126 192,125 196,119 C197.95123,116.073156 201.096946,114.499108 204,113 C207.048176,111.425952 209.902459,110 214,110 C222,110 222,110 230,116 C233.364888,118.523666 234.057207,120.408708 235,122 C236.298691,124.191994 237.261833,126.20611 239,132 C240.333333,132.666667 241.666667,132.666667 243,132 L235,113 C228,107 221,104 214,104 C203.5,104 199.705849,107.970613 193,113 C186.294151,118.029387 185.627888,120.563349 184,124 C182.914742,126.291101 182.914742,128.957768 184,132 C188.666667,132 191,132 191,132 Z"
                id="Path-16" stroke="#FFFFFF" stroke-width="2"></path>
            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="38" cy="137" r="6"></circle>
            <rect id="Rectangle" stroke="#000000" fill="#7E4C00" x="147.5" y="43.5" width="3" height="37"></rect>
            <rect id="Rectangle" stroke="#000000" fill="#7E4C00" x="151.5" y="65.5" width="113" height="9"></rect>
            <rect id="Rectangle" stroke="#000000" fill="#7E4C00" x="151.5" y="45.5" width="113" height="9"></rect>
            <rect id="Rectangle" stroke="#000000" fill="#7E4C00" x="188.5" y="43.5" width="3" height="37"></rect>
            <rect id="Rectangle" stroke="#000000" fill="#7E4C00" x="215.5" y="43.5" width="3" height="37"></rect>
            <rect id="Rectangle" stroke="#000000" fill="#7E4C00" x="265.5" y="43.5" width="3" height="37"></rect>
            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="214" cy="133" r="6"></circle>
        </g>
        <g id="home" transform="translate(73.000000, 19.000000)" stroke="#FFFFFF" stroke-width="3">
            <rect id="Rectangle" x="38.5" y="113.5" width="205" height="152"></rect>
            <path d="M141,0.5 L0.5,156" id="Line" stroke-linecap="square"></path>
            <path d="M284,0.5 L143.5,156" id="Line" stroke-linecap="square"
                transform="translate(213.500000, 78.000000) scale(1, -1) translate(-213.500000, -78.000000) "></path>
            <text id="APP"  font-size="53" font-weight="normal" fill="#FFFFFF">
                <tspan x="38" y="373">Your App</tspan>
            </text>
        </g>
        <g id="Sat" transform="translate(1027.000000, 569.000000)">
            <text id="beem" font-size="16" font-weight="normal" fill="#FFFFFF">
                <tspan x="90" y="100">your-bundel.js</tspan>
            </text>
            <path
                d="M10.5809956,166.917836 L209.779964,16.8106459 C222.568075,36.4207855 230,59.8424832 230,85 C230,154.035594 174.035594,210 105,210 C67.300711,210 33.4993627,193.310932 10.5809956,166.917836 Z M202.583765,6.87480463 L207.110156,12.8815294 C205.660603,10.8328926 204.15095,8.82979519 202.583765,6.87480463 Z"
                id="dish" stroke="#000000" stroke-width="5" fill="#FED009"></path>
            <ellipse id="Oval" stroke="#000000" stroke-width="3" fill="#A80000" cx="70" cy="34.5" rx="12" ry="12.5">
            </ellipse>
            <path d="M78.5,46 L101.5,72.5" id="Line-2" stroke="#FFFFFF" stroke-width="4" stroke-linecap="square"></path>
            <polygon id="Path-17" stroke="#000000" stroke-width="5" fill="#FED009" points="11 167 210 17 198 0 0 152">
            </polygon>
            <path
                d="M146.5,138.051468 C128.690685,139.07815 111.096387,155.411483 93.7171053,187.051468 L90,285 L203,285 L203,187 C183.142648,153.340964 164.309315,137.024787 146.5,138.051468 Z"
                id="Path-18" stroke="#000000" stroke-width="5" fill="#AB0000"></path>
            <ellipse id="Oval" stroke="#000000" stroke-width="5" fill="#E62F2F" cx="146.5" cy="175" rx="16.5" ry="18">
            </ellipse>
            <path
                d="M78,290 L210,290 C221.045695,290 230,298.954305 230,310 L230,317 L58,317 L58,310 C58,298.954305 66.954305,290 78,290 Z"
                id="Path-19" stroke="#000000" stroke-width="5" fill="#5F5F5F"></path>
            <text id="BFF/Web"  font-size="53" font-weight="normal" fill="#FFFFFF">
                <tspan x="38" y="373">BFF/Web</tspan>
            </text>
        </g>
    </svg>     
    </div>
</div>
       `;
        this._setHighlight();
    }
    truckDone(){
        console.log('done');
        this.shadowRoot.querySelector('#home').style.display ='block';
        this.shadowRoot.querySelector('#NPM').classList.add('flip');
    }
    _showAnimation(event){
        super._showAnimation(event);
        if(this.showIndex === 1){
            this.shadowRoot.querySelector('#build-icon').style.display ='block';
        }
        if(this.showIndex === 2){
            this.shadowRoot.querySelector('#truck').style.display ='block';
            setTimeout(()=> {
                this.shadowRoot.querySelector('#truck').classList.add('show');
                this.shadowRoot.querySelector('#truck').addEventListener("animationend", this.truckDone);
            });
        }
        if(this.showIndex === 3){
            this.shadowRoot.querySelector('#Sat').style.display ='block';
            setTimeout(()=> this.shadowRoot.querySelector('#beem').classList.add('beem'));
        }
    }

}
if (!customElements.get('wc-structure')) {
    customElements.define('wc-structure', WcStructure);
}