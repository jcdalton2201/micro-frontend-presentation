export class RouterPool extends HTMLElement {
    constructor(){
        super();
        this.pages = ['intro-page'];
        this.pageIndex = 0;
        this.attachShadow({mode: 'open'});
        this['nextPage'] = this['nextPage'].bind(this);
    }
    connectedCallback(){
        this.__getPage(this.pages[this.pageIndex]);
        document.addEventListener('keyup',this.nextPage);
    }
    nextPage(event){
        console.log(event.keyCode);
        if(event.key === 'ArrowRight'){
            this.pageIndex++;
            console.log('next page');
            this.__getPage(this.pages[this.pageIndex]);
        }
        if(event.key === 'ArrowLeft'){
            this.pageIndex--;
            console.log('previous page');
            this.__getPage(this.pages[this.pageIndex]);
        }
        if(event.keyCode === 32){
            this.toggleFullScreen();
        }
    }
    async getImport(url){
		return await import(url);
	}
    async __getPage(element){
        if(!customElements.get(element)){
			await this.getImport(`/src/pages/${element}/${element}.js`);
		}
		else {
			console.log('we already have the component');
        }
        this.shadowRoot.innerHTML = `<${element}></${element}>`;
    }
    toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
            document.exitFullscreen(); 
            }
        }
    }
}
if(!customElements.get('router-pool')){
    customElements.define('router-pool',RouterPool);
}