import{R as p}from"./index-DJO9vBfz.js";import{l as r,d as l}from"./styled-components.browser.esm-BjS_sxvV.js";var o=(e=>(e.BADGE="badge",e.PILL="pill",e))(o||{}),t=(e=>(e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e))(t||{}),a=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.SUCCESS="success",e.DANGER="danger",e))(a||{});const u={[a.PRIMARY]:r`
        background: ${({theme:e})=>e.colors.primary};
    `,[a.SECONDARY]:r`
        background: ${({theme:e})=>e.colors.secondary};
    `,[a.SUCCESS]:r`
        background: ${({theme:e})=>e.colors.success};
    `,[a.DANGER]:r`
        background: ${({theme:e})=>e.colors.error};
    `},g={[o.BADGE]:r`
        border-radius: ${({theme:e})=>e.borderRadius};
    `,[o.PILL]:r`
        border-radius: 9999px;
    `},m={[t.SMALL]:r`
        padding: ${({theme:e})=>e.spacing(1)} ${({theme:e})=>e.spacing(2)};
    `,[t.MEDIUM]:r`
        padding: ${({theme:e})=>e.spacing(2)} ${({theme:e})=>e.spacing(3)};
    `,[t.LARGE]:r`
        padding: ${({theme:e})=>e.spacing(3)} ${({theme:e})=>e.spacing(4)};
    `},R=l.div`
    ${({color:e})=>u[e]};
    ${({type:e})=>g[e]};
    ${({size:e})=>m[e]};

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
`,n=({children:e,type:s=o.BADGE,color:i=a.PRIMARY,size:c=t.MEDIUM,...d})=>p.createElement(R,{...d,size:c,type:s,color:i},e),A=Object.assign(n,{Types:o,Sizes:t,Colors:a});n.__docgenInfo={description:"",methods:[],displayName:"BadgeComponent",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:""},type:{required:!1,tsType:{name:"BadgeTypes"},description:"",defaultValue:{value:"BadgeTypes.BADGE",computed:!0}},size:{required:!1,tsType:{name:"BadgeSizes"},description:"",defaultValue:{value:"BadgeSizes.MEDIUM",computed:!0}},color:{required:!1,tsType:{name:"BadgeColors"},description:"",defaultValue:{value:"BadgeColors.PRIMARY",computed:!0}}}};export{A as B};
