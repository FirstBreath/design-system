import{R as t}from"./index-B-o1Wr-g.js";import{d as o}from"./styled-components.browser.esm-sghPJsyo.js";const l=o.div.attrs({"data-testid":"backdrop"})`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`,s=o.div.attrs({"data-testid":"modal-content"})`
    background: ${({theme:e})=>e.colors.background};
    padding: 20px;
    border-radius: ${({theme:e})=>e.borderRadius};
    width: 70%;
    position: relative;
    border: 1px solid ${({theme:e})=>e.colors.border};

    // media queries to phone set width to 100%
    @media (max-width: 600px) {
        width: 100%;
    }
`,c=o.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
`,r=({isOpen:e,onClose:n,children:a,...i})=>e?t.createElement(l,{onClick:n,...i},t.createElement(s,{onClick:d=>d.stopPropagation()},t.createElement(c,{onClick:n},"×"),a)):null;try{r.displayName="Modal",r.__docgenInfo={description:"Modal component",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"Determines if the modal is open",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"The function to call when the modal is closed",name:"onClose",required:!0,type:{name:"() => void"}},children:{defaultValue:null,description:"The content of the modal",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}export{r as M};
