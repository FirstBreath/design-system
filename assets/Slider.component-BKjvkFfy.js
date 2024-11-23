import{R as t}from"./index-B-o1Wr-g.js";import{d as i}from"./styled-components.browser.esm-sghPJsyo.js";import{S as p}from"./SliderIndicator.component-CrC7ycyZ.js";const h=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    align-self: stretch;
    width: 100%;
    overflow: hidden;
`,f=i.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s ease-in-out;
    width: ${e=>e.length*100}%;
`,l=i.div`
    transform: translateX(${({translate:e})=>e});
    transition: transform 0.5s ease;
    width: 100%;
`,o=({elements:e,...s})=>{const a=e.length%2===0,n=Math.floor(e.length/2),[r,d]=t.useState(n);return t.createElement(h,{...s},t.createElement(f,{length:a?e.length+1:e.length},e.map((c,m)=>t.createElement(l,{key:m,translate:`${-1*(r-n)}00%`},c)),a?t.createElement(l,{translate:`${-1*(r-n)}00%`}):""),t.createElement(p,{length:e.length,activeIndex:r,onClick:d}))};try{o.displayName="Slider",o.__docgenInfo={description:"Slider component",displayName:"Slider",props:{elements:{defaultValue:null,description:"The elements to display in the slider",name:"elements",required:!0,type:{name:"ReactNode[]"}}}}}catch{}export{o as S};
