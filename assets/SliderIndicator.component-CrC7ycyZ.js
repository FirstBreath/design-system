import{R as o}from"./index-B-o1Wr-g.js";import{d as n}from"./styled-components.browser.esm-sghPJsyo.js";const c=n.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,l=n.button`
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

`,a=({length:e,activeIndex:r,onClick:d=()=>{},...i})=>o.createElement(c,{...i},Array.from({length:e}).map((s,t)=>o.createElement(l,{key:t,active:t==r,onClick:()=>d(t),"data-testid":"slider-dot","data-active":t==r})));try{a.displayName="SliderIndicator",a.__docgenInfo={description:"SliderIndicator component",displayName:"SliderIndicator",props:{length:{defaultValue:null,description:"The number of dots to display",name:"length",required:!0,type:{name:"number"}},activeIndex:{defaultValue:null,description:"The index of the currently active dot",name:"activeIndex",required:!0,type:{name:"number"}},onClick:{defaultValue:{value:`() => {
                                                                    }`},description:"The function to call when a dot is clicked",name:"onClick",required:!1,type:{name:"((index: number) => void) | undefined"}}}}}catch{}export{a as S};
