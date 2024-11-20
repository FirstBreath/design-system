import{R as o}from"./index-DJO9vBfz.js";import{d as a}from"./styled-components.browser.esm-BjS_sxvV.js";const d=a.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,s=a.button`
    width: ${({active:e})=>e?"50px":"30px"};
    height: 5px;
    cursor: ${({active:e})=>e?"default":"pointer"};
    border-radius: ${({theme:e})=>e.borderRadius};
    box-shadow: ${({theme:e})=>e.shadows.default};
    transition-duration: 0.5s;
    background: ${({theme:e,active:r})=>r?e.colors.primary:e.colors.surface};
    border: none;

    &:hover {
        background: ${({theme:e,active:r})=>r?e.colors.primary:e.colors.secondary};
    }

`,c=({length:e,activeIndex:r,onClick:n=()=>{},...i})=>o.createElement(d,{...i},Array.from({length:e}).map((u,t)=>o.createElement(s,{key:t,active:t==r,onClick:()=>n(t),"data-testid":"slider-dot","data-active":t==r})));c.__docgenInfo={description:"",methods:[],displayName:"SliderIndicator",props:{length:{required:!0,tsType:{name:"number"},description:""},activeIndex:{required:!0,tsType:{name:"number"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"",defaultValue:{value:`() => {
}`,computed:!1}}}};export{c as S};
