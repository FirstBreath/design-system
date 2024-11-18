import{R as t}from"./index-DJO9vBfz.js";import{d as o}from"./styled-components.browser.esm-BjS_sxvV.js";const a=o.div.attrs({"data-testid":"backdrop"})`
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
`,d=o.div.attrs({"data-testid":"modal-content"})`
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
`,s=o.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
`,c=({isOpen:e,onClose:r,children:n})=>e?t.createElement(a,{onClick:r},t.createElement(d,{onClick:i=>i.stopPropagation()},t.createElement(s,{onClick:r},"×"),n)):null;c.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{c as M};
