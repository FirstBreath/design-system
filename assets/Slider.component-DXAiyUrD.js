import{R as t}from"./index-DJO9vBfz.js";import{d as a}from"./styled-components.browser.esm-BjS_sxvV.js";import{S as d}from"./SliderIndicator.component-Clhb9rk-.js";const m=a.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    align-self: stretch;
    width: 100%;
    overflow: hidden;
`,h=a.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s ease-in-out;
    width: ${e=>e.length*100}%;
`,o=a.div`
    transform: translateX(${({translate:e})=>e});
    transition: transform 0.5s ease;
    width: 100%;
`,p=({elements:e})=>{const i=e.length%2===0,n=Math.floor(e.length/2),[r,l]=t.useState(n);return t.createElement(m,null,t.createElement(h,{length:i?e.length+1:e.length},e.map((s,c)=>t.createElement(o,{key:c,translate:`${-1*(r-n)}00%`},s)),i?t.createElement(o,{translate:`${-1*(r-n)}00%`}):""),t.createElement(d,{length:e.length,activeIndex:r,onClick:l}))};p.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{elements:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""}}};export{p as S};
