import{R as d}from"./index-DJO9vBfz.js";import{l as r,d as p}from"./styled-components.browser.esm-BjS_sxvV.js";var o=(e=>(e.BADGE="badge",e.PILL="pill",e))(o||{}),t=(e=>(e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e))(t||{}),a=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.SUCCESS="success",e.DANGER="danger",e))(a||{});const l={[a.PRIMARY]:r`
        background: ${({theme:e})=>e.colors.primary};
    `,[a.SECONDARY]:r`
        background: ${({theme:e})=>e.colors.secondary};
    `,[a.SUCCESS]:r`
        background: ${({theme:e})=>e.colors.success};
    `,[a.DANGER]:r`
        background: ${({theme:e})=>e.colors.error};
    `},u={[o.BADGE]:r`
        border-radius: ${({theme:e})=>e.borderRadius};
    `,[o.PILL]:r`
        border-radius: 9999px;
    `},g={[t.SMALL]:r`
        padding: ${({theme:e})=>e.spacing(1)} ${({theme:e})=>e.spacing(2)};
    `,[t.MEDIUM]:r`
        padding: ${({theme:e})=>e.spacing(2)} ${({theme:e})=>e.spacing(3)};
    `,[t.LARGE]:r`
        padding: ${({theme:e})=>e.spacing(3)} ${({theme:e})=>e.spacing(4)};
    `},m=p.div`
    ${({color:e})=>l[e]};
    ${({type:e})=>u[e]};
    ${({size:e})=>g[e]};

    color: ${({theme:e})=>e.colors.background};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({theme:e})=>e.typographies.p.fontFamily};
    font-size: ${({theme:e,size:s})=>s==t.SMALL?e.typographies.small.fontSize:e.typographies.p.fontSize};
    font-weight: 600;
    line-height: 24px;
    margin: 0;
`,n=({children:e,type:s=o.BADGE,color:i=a.PRIMARY,size:c=t.MEDIUM})=>d.createElement(m,{size:c,type:s,color:i},e),f=Object.assign(n,{Types:o,Sizes:t,Colors:a});n.__docgenInfo={description:"",methods:[],displayName:"BadgeComponent",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:""},type:{required:!1,tsType:{name:"BadgeTypes"},description:"",defaultValue:{value:"BadgeTypes.BADGE",computed:!0}},size:{required:!1,tsType:{name:"BadgeSizes"},description:"",defaultValue:{value:"BadgeSizes.MEDIUM",computed:!0}},color:{required:!1,tsType:{name:"BadgeColors"},description:"",defaultValue:{value:"BadgeColors.PRIMARY",computed:!0}}}};export{f as B};
