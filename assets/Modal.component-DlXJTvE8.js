import{R as t}from"./index-B-o1Wr-g.js";import{d as o}from"./styled-components.browser.esm-sghPJsyo.js";const d=o.div.attrs({"data-testid":"backdrop"})`
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
`,p=({isOpen:e,onClose:r,children:n,...i})=>e?t.createElement(d,{onClick:r,...i},t.createElement(s,{onClick:a=>a.stopPropagation()},t.createElement(c,{onClick:r},"×"),n)):null;p.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{p as M};
