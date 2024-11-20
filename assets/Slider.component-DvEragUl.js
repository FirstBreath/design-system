import{R as t}from"./index-B-o1Wr-g.js";import{d as a}from"./styled-components.browser.esm-sghPJsyo.js";import{S as m}from"./SliderIndicator.component-Ka3jxL4b.js";const h=a.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    align-self: stretch;
    width: 100%;
    overflow: hidden;
`,p=a.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s ease-in-out;
    width: ${e=>e.length*100}%;
`,o=a.div`
    transform: translateX(${({translate:e})=>e});
    transition: transform 0.5s ease;
    width: 100%;
`,f=({elements:e,...s})=>{const i=e.length%2===0,n=Math.floor(e.length/2),[r,l]=t.useState(n);return t.createElement(h,{...s},t.createElement(p,{length:i?e.length+1:e.length},e.map((c,d)=>t.createElement(o,{key:d,translate:`${-1*(r-n)}00%`},c)),i?t.createElement(o,{translate:`${-1*(r-n)}00%`}):""),t.createElement(m,{length:e.length,activeIndex:r,onClick:l}))};f.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{elements:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""}}};export{f as S};
