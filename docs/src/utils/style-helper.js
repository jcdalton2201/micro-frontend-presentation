let baseStyle;
async function init(){
    const res = await fetch(`/src/pages/base-style.css`);
    baseStyle = await res.text();
}


/**
 * 
 * @param {HTMLElement} shadowRoot 
 * @param {String} name 
 */
export async function  getHighlightStyle(shadowRoot, name='darcula'){
    const styleSheet = new CSSStyleSheet();
    const res = await fetch(`/highlight/styles/${name}.css`);
    const style = await res.text();
    styleSheet.replace(style);
    shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets,styleSheet];
}
/**
 * 
 * @param {*} element 
 */
export async function setBaseStyle(element){  
    const styleSheet = new CSSStyleSheet();
    styleSheet.replace(baseStyle);
    element.adoptedStyleSheets = [styleSheet];
}
init();