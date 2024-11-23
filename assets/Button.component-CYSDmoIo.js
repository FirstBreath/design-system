import{R as l}from"./index-B-o1Wr-g.js";import{l as o,d as u}from"./styled-components.browser.esm-sghPJsyo.js";var t=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.TERTIARY="tertiary",e))(t||{}),n=(e=>(e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e))(n||{});const d=o`
    border: none;
    background: ${({theme:e})=>e.colors.primary};

    &:hover {
        background: ${({theme:e})=>e.primarySwatch[600]};
    }
`,p=o`
    border: none;
    background: ${({theme:e})=>e.colors.secondary};

    &:hover {
        background: ${({theme:e})=>e.primarySwatch[400]};
    }
`,y=o`
    border: 1px solid ${({theme:e})=>e.colors.border};
    background: ${({theme:e})=>e.colors.background};

    &:hover {
        background: ${({theme:e})=>e.colors.surface};
    }
`,m={[t.PRIMARY]:d,[t.SECONDARY]:p,[t.TERTIARY]:y},f=o`
    padding: ${({theme:e})=>e.spacing(1)} 16px;
`,g=o`
    padding: ${({theme:e})=>e.spacing(2)} 16px;
`,h=o`
    padding: ${({theme:e})=>e.spacing(3)} 16px;
`,R={[n.SMALL]:f,[n.MEDIUM]:g,[n.LARGE]:h},b=u.button`
    ${({type:e})=>m[e]};
    ${({size:e})=>R[e]};
    transition: all 0.5s;
    
    border-radius: 8px;
    cursor: pointer;
    box-shadow: ${({theme:e})=>e.shadows.default};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
`,v=u.p`
    color: ${({type:e,theme:r})=>e===t.TERTIARY?r.colors.primary:r.colors.background};
    font-family: ${({theme:e})=>e.typographies.p.fontFamily};
    font-size: ${({size:e})=>e===n.SMALL?"12px":"16px"};
    font-style: ${({theme:e})=>e.typographies.p.fontStyle};
    font-weight: 600;
    line-height: 24px;
    margin: 0;
`,S=({children:e,type:r=t.PRIMARY,size:a=n.MEDIUM,onClick:c,...s})=>l.createElement(b,{...s,type:r,size:a,onClick:c},l.createElement(v,{type:r,size:a},e)),i=Object.assign(S,{ButtonType:t,ButtonSize:n});try{i.displayName="Button",i.__docgenInfo={description:"",displayName:"Button",props:{children:{defaultValue:null,description:"The content of the button",name:"children",required:!0,type:{name:"ReactNode"}},type:{defaultValue:{value:"ButtonType.PRIMARY"},description:"The type of the button",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},size:{defaultValue:{value:"ButtonSize.MEDIUM"},description:"The size of the button",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"The click event handler",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}export{i as B};
