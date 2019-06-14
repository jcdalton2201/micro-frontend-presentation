let baseStyle;
async function init(){
    const res = await fetch(`/micro-frontend-presentation/src/pages/base-style.css`);
    baseStyle = await res.text();
}


/**
 * 
 * @param {HTMLElement} shadowRoot 
 * @param {String} name 
 */
export async function  getHighlightStyle(shadowRoot, name='darcula'){
    const styleSheet = new CSSStyleSheet();
    const res = await fetch(`/micro-frontend-presentation/highlight/styles/${name}.css`);
    const style = await res.text();
    styleSheet.replace(style);
    shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets,styleSheet];
}
/**
 * 
 * @param {HTMLElement} element 
 */
export async function setBaseStyle(element){  
    const styleSheet = new CSSStyleSheet();
    styleSheet.replace(baseStyle);
    element.adoptedStyleSheets = [styleSheet];
}

export async function getComponentStyle(file,element){
    const styleSheet = new CSSStyleSheet();
    const res = await fetch(file);
    const style = await res.text();
    styleSheet.replace(style);
    element.adoptedStyleSheets = [...element.adoptedStyleSheets,styleSheet];
}
init();