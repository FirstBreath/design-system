import{R as s}from"./index-B-o1Wr-g.js";import{l as r,d as i}from"./styled-components.browser.esm-sghPJsyo.js";var t=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.TERTIARY="tertiary",e))(t||{}),o=(e=>(e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e))(o||{});const p=r`
    border: none;
    background: ${({theme:e})=>e.colors.primary};

    &:hover {
        background: ${({theme:e})=>e.primarySwatch[600]};
    }
`,l=r`
    border: none;
    background: ${({theme:e})=>e.colors.secondary};

    &:hover {
        background: ${({theme:e})=>e.primarySwatch[400]};
    }
`,m=r`
    border: 1px solid ${({theme:e})=>e.colors.border};
    background: ${({theme:e})=>e.colors.background};

    &:hover {
        background: ${({theme:e})=>e.colors.surface};
    }
`,y={[t.PRIMARY]:p,[t.SECONDARY]:l,[t.TERTIARY]:m},g=r`
    padding: ${({theme:e})=>e.spacing(1)} 16px;
`,R=r`
    padding: ${({theme:e})=>e.spacing(2)} 16px;
`,f=r`
    padding: ${({theme:e})=>e.spacing(3)} 16px;
`,S={[o.SMALL]:g,[o.MEDIUM]:R,[o.LARGE]:f},$=i.button`
    ${({type:e})=>y[e]};
    ${({size:e})=>S[e]};
    transition: all 0.5s;
    
    border-radius: 8px;
    cursor: pointer;
    box-shadow: ${({theme:e})=>e.shadows.default};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
`,b=i.p`
    color: ${({type:e,theme:n})=>e===t.TERTIARY?n.colors.primary:n.colors.background};
    font-family: ${({theme:e})=>e.typographies.p.fontFamily};
    font-size: ${({size:e})=>e===o.SMALL?"12px":"16px"};
    font-style: ${({theme:e})=>e.typographies.p.fontStyle};
    font-weight: 600;
    line-height: 24px;
    margin: 0;
`,c=({children:e,type:n=t.PRIMARY,size:a=o.MEDIUM,onClick:d,...u})=>s.createElement($,{...u,type:n,size:a,onClick:d},s.createElement(b,{type:n,size:a},e)),B=Object.assign(c,{ButtonType:t,ButtonSize:o});c.__docgenInfo={description:"",methods:[],displayName:"ButtonComponent",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:""},type:{required:!1,tsType:{name:"ButtonType"},description:"",defaultValue:{value:"ButtonType.PRIMARY",computed:!0}},size:{required:!1,tsType:{name:"ButtonSize"},description:"",defaultValue:{value:"ButtonSize.MEDIUM",computed:!0}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{B};
