import { getComponentStyle } from '../../utils/style-helper.js';
import anime from '../../../scripts/anime.es.js';
export class WizardCartoon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
<style>

</style>
<svg width="400px" height="400px" viewBox="0 0 200 200">
<g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <polygon id="body" stroke="#001EFF" fill="#001EFF" points="100 94 85 109 65 188 154 188 119 106"></polygon>
    <g id="head">
        <ellipse id="skull" stroke="#FCDFC9" fill="#FCDFC9" transform="translate(100.000000, 81.500000) rotate(-8.000000) translate(-100.000000, -81.500000) " cx="100" cy="81.5" rx="28" ry="35.5"></ellipse>
        <polygon id="hat" stroke="#001EFF" fill="#001EFF" points="65 85 128 50 70 10 59 32 55 59 63 39 71 29"></polygon>
        <path d="M133,81 C124.597837,79.1240512 118.93117,79.1240512 116,81 C113.06883,82.8759488 109.402163,86.5426154 105,92 C110.333333,88.6666667 115,86.6666667 119,86 C123,85.3333333 127.666667,83.6666667 133,81 Z" id="muchstach" fill="#646161"></path>
        <path d="M128,86 C125.554923,87.1322405 123.888256,87.7989072 123,88 C118.367942,89.0486548 115.529184,88.9883264 113,90 C109.743311,91.3026755 108.076645,92.6360088 108,94 C105.555556,94 103.555556,94 102,94 C100.444444,94 98.7777778,94 97,94 L86,90 L78,88 L74,90 C74.342482,93.2277743 75.0091487,95.894441 76,98 C76.6323192,99.3436782 76.5457394,100.927809 78,103 C78.5497215,103.783304 79.8830548,105.116637 82,107 C84.2184648,111.145643 86.2184648,113.81231 88,115 C89.7815352,116.18769 92.7815352,117.521023 97,119 C100.570681,119.251807 103.237348,119.251807 105,119 C106.762652,118.748193 108.762652,117.414859 111,115 L121,119 L128,127 L141,146 C143.27356,145.310354 144.606894,144.310354 145,143 C145.589659,141.034469 144.004411,107.611468 143,105 C141.995589,102.388532 134.101131,91.7618097 133,90 C132.265913,88.8254602 130.599246,87.4921269 128,86 Z" id="beard" fill="#646161"></path>
        <ellipse id="eyeball" stroke="#000000" stroke-width="0.25" fill="#FFFBFB" transform="translate(115.000000, 69.000000) rotate(-17.000000) translate(-115.000000, -69.000000) " cx="115" cy="69" rx="4" ry="6"></ellipse>
        <ellipse id="iris" fill="#000000" transform="translate(116.000000, 68.500000) rotate(-17.000000) translate(-116.000000, -68.500000) " cx="116" cy="68.5" rx="2" ry="2.5"></ellipse>
        <ellipse id="sparkle" fill="#FFFFFF" transform="translate(116.500000, 68.000000) rotate(-21.000000) translate(-116.500000, -68.000000) " cx="116.5" cy="68.0000004" rx="1" ry="1"></ellipse>
        <polygon id="Star" stroke="#979797" fill="#FFFD00" points="87 40.25 81.7099327 43.1856614 82.7202457 36.9678307 78.4404914 32.5643386 84.3549664 31.6571693 87 26 89.6450336 31.6571693 95.5595086 32.5643386 91.2797543 36.9678307 92.2900673 43.1856614"></polygon>
        <polygon id="Star" stroke="#979797" fill="#FFFD00" transform="translate(78.000000, 61.500000) rotate(-22.000000) translate(-78.000000, -61.500000) " points="78 66.25 72.7099327 69.1856614 73.7202457 62.9678307 69.4404914 58.5643386 75.3549664 57.6571693 78 52 80.6450336 57.6571693 86.5595086 58.5643386 82.2797543 62.9678307 83.2900673 69.1856614"></polygon>
    </g>
    <g id='sleve'>
        <path d="M103,130 C94.493884,130 88,157 90,166 C99,172 119,171 126,166 C126,157 111.506116,130 103,130 Z" id="arm" fill="#0519B0"></path>
        <polygon id="Star" stroke="#979797" fill="#FFFD00" transform="translate(106.000000, 148.500000) rotate(-22.000000) translate(-106.000000, -148.500000) " points="106 153.25 100.709933 156.185661 101.720246 149.967831 97.4404914 145.564339 103.354966 144.657169 106 139 108.645034 144.657169 114.559509 145.564339 110.279754 149.967831 111.290067 156.185661"></polygon>
    </g>
    <polygon id="Star" stroke="#979797" fill="#FFFD00" transform="translate(136.000000, 175.500000) rotate(27.000000) translate(-136.000000, -175.500000) " points="136 180.25 130.709933 183.185661 131.720246 176.967831 127.440491 172.564339 133.354966 171.657169 136 166 138.645034 171.657169 144.559509 172.564339 140.279754 176.967831 141.290067 183.185661"></polygon>
    <polygon id="Star" stroke="#979797" fill="#FFFD00" transform="translate(83.000000, 175.500000) rotate(-22.000000) translate(-83.000000, -175.500000) " points="83 180.25 77.7099327 183.185661 78.7202457 176.967831 74.4404914 172.564339 80.3549664 171.657169 83 166 85.6450336 171.657169 91.5595086 172.564339 87.2797543 176.967831 88.2900673 183.185661"></polygon>
    <path d="M151,98 C151,98 155,96 163,92 L157,81 L172,74 L169.625092,70.2001467 L167,66 L180,51" class="lighting" stroke="#FFDD00" stroke-width="6"></path>
    <path d="M141,68 C141,68 145,66 153,62 L147,51 L162,44 L159.625092,40.2001467 L157,36 L170,21" class="lighting" stroke="#FFDD00" stroke-width="6"></path>
</g>
</svg>
        `;
        getComponentStyle('src/widgets/wizard-cartoon/wizard-cartoon.css', this.shadowRoot);
    }
    lighting() {
        this.shadowRoot.querySelector('#sleve').style['transform'] = 'rotate(-108deg)';
        this.shadowRoot.querySelectorAll('.lighting').forEach(item => item.animate([
            {
                strokeDashoffset: 100
            },
            {
                strokeDashoffset: 0
            },
            {
                strokeDashoffset: 100
            }
            ],{
                duration: 300,
                delay:1000
        }));
        const animateDownSleve = this.shadowRoot.querySelector('#sleve').animate([
            {
                transform: 'rotate(0deg)'
            },
            {
                transform: 'rotate(-108deg)'

            }
            ],{
                duration: 1000,
                endDelay:1000,
                easing: "cubic-bezier(0.08,-0.41, 0.65, 1.3)"
        });
        
        animateDownSleve.onfinish = ()=>{
            this.shadowRoot.querySelector('#sleve').style['transform'] = 'rotate(0deg)';
        };
        this.shadowRoot.querySelector('#sleve').animate([
            {
                transform: 'rotate(-108deg)'
            },
            {
                transform: 'rotate(0deg)'

            }
            ],{
                delay:2000,
                duration: 2000,
                easing: "cubic-bezier(0.08,-0.41, 0.65, 1.3)"
        });
        this.shadowRoot.querySelector('#head').animate([
            {
                transform: 'translateY(0px) rotateZ(0deg) translateX(0px)'
            },
            {
                transform: 'translateY(6px) rotateZ(-6deg) translateX(-9px)'
            },
            {
                transform: 'translateY(0px) rotateZ(0deg) translateX(0px)'
            }
        ], {
                duration: 1000,
                easing: "cubic-bezier(0.08,-0.41, 0.65, 1.3)"
        });
    }
}
if (!customElements.get('wizard-cartoon')) {
    customElements.define('wizard-cartoon', WizardCartoon);
}