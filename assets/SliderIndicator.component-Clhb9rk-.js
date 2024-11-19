import{R as a}from"./index-DJO9vBfz.js";import{d as o}from"./styled-components.browser.esm-BjS_sxvV.js";const n=o.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,d=o.div`
    width: ${({active:e})=>e?"50px":"30px"};
    height: 5px;
    cursor: ${({active:e})=>e?"default":"pointer"};
    border-radius: ${({theme:e})=>e.borderRadius};
    box-shadow: ${({theme:e})=>e.shadows.default};
    transition-duration: 0.5s;
    background: ${({theme:e,active:r})=>r?e.colors.primary:e.colors.surface};

    &:hover {
        background: ${({theme:e,active:r})=>r?e.colors.primary:e.colors.secondary};
    }

`,s=({length:e,activeIndex:r,onClick:i=()=>{}})=>a.createElement(n,null,Array.from({length:e}).map((c,t)=>a.createElement(d,{key:t,active:t==r,onClick:()=>i(t),"data-testid":"slider-dot","data-active":t==r})));s.__docgenInfo={description:"",methods:[],displayName:"SliderIndicator",props:{length:{required:!0,tsType:{name:"number"},description:""},activeIndex:{required:!0,tsType:{name:"number"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"",defaultValue:{value:`() => {
}`,computed:!1}}}};export{s as S};
