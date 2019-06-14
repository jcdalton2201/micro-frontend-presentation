import '../../widgets/user-icon/user-icon.js';
import {getHighlightStyle,setBaseStyle} from '../../utils/style-helper.js';
import '../../widgets/wizard-cartoon/wizard-cartoon.js';
export class IntroPage extends HTMLElement {
    constructor(){
        super();

    }
    connectedCallback(){
        this.innerHTML = `
<style>
 .containter {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr;
    justify-items: center;
    align-items: center;
 }
 .intro-title {
     font-size: 3rem;
 }
 .intro {
     display:flex;
 }
 .user-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
 }
 .user-info div {
     font-size: 2rem;
 }
 </style>
<div class='containter'>
    <div class='intro-title'>Micro-Frontend and Using Web Components to do it.</div>
    <div class='intro'>
        <user-icon></user-icon>
        <div class='user-info'>
        <div>Jason Dalton</div>
        <div>Manager UI Center of Excellent</div>
        </div>
</div>

</div>
        `;
        setBaseStyle(this);
    }
    
}
if(!customElements.get('intro-page')){
    customElements.define('intro-page',IntroPage);
}