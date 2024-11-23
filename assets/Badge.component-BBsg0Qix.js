import{R as c}from"./index-B-o1Wr-g.js";import{l as a,d as u}from"./styled-components.browser.esm-sghPJsyo.js";var o=(e=>(e.BADGE="badge",e.PILL="pill",e))(o||{}),n=(e=>(e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e))(n||{}),r=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.SUCCESS="success",e.DANGER="danger",e))(r||{});const p={[r.PRIMARY]:a`
        background: ${({theme:e})=>e.colors.primary};
    `,[r.SECONDARY]:a`
        background: ${({theme:e})=>e.colors.secondary};
    `,[r.SUCCESS]:a`
        background: ${({theme:e})=>e.colors.success};
    `,[r.DANGER]:a`
        background: ${({theme:e})=>e.colors.error};
    `},g={[o.BADGE]:a`
        border-radius: ${({theme:e})=>e.borderRadius};
    `,[o.PILL]:a`
        border-radius: 9999px;
    `},m={[n.SMALL]:a`
        padding: ${({theme:e})=>e.spacing(1)} ${({theme:e})=>e.spacing(2)};
    `,[n.MEDIUM]:a`
        padding: ${({theme:e})=>e.spacing(2)} ${({theme:e})=>e.spacing(3)};
    `,[n.LARGE]:a`
        padding: ${({theme:e})=>e.spacing(3)} ${({theme:e})=>e.spacing(4)};
    `},y=u.div`
    ${({color:e})=>p[e]};
    ${({type:e})=>g[e]};
    ${({size:e})=>m[e]};

    color: ${({theme:e})=>e.colors.background};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({theme:e})=>e.typographies.p.fontFamily};
    font-size: ${({theme:e,size:t})=>t==n.SMALL?e.typographies.small.fontSize:e.typographies.p.fontSize};
    font-weight: 600;
    line-height: 24px;
    margin: 0;
`,f=({children:e,type:t=o.BADGE,color:i=r.PRIMARY,size:s=n.MEDIUM,...d})=>c.createElement(y,{...d,size:s,type:t,color:i},e),l=Object.assign(f,{Types:o,Sizes:n,Colors:r});try{l.displayName="Badge",l.__docgenInfo={description:"",displayName:"Badge",props:{children:{defaultValue:null,description:"The content of the badge",name:"children",required:!0,type:{name:"ReactNode"}},type:{defaultValue:{value:"BadgeTypes.BADGE"},description:"The type of the badge",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"badge"'},{value:'"pill"'}]}},size:{defaultValue:{value:"BadgeSizes.MEDIUM"},description:"The color of the badge",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},color:{defaultValue:{value:"BadgeColors.PRIMARY"},description:"The size of the badge",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"danger"'}]}}}}}catch{}export{l as B};
