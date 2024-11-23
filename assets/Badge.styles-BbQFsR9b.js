import{l as a,d as c}from"./styled-components.browser.esm-sghPJsyo.js";var o=(r=>(r.BADGE="badge",r.PILL="pill",r))(o||{}),s=(r=>(r.SMALL="small",r.MEDIUM="medium",r.LARGE="large",r))(s||{}),n=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r.SUCCESS="success",r.DANGER="danger",r))(n||{});const t={[n.PRIMARY]:a`
        background: ${({theme:r})=>r.colors.primary};
    `,[n.SECONDARY]:a`
        background: ${({theme:r})=>r.colors.secondary};
    `,[n.SUCCESS]:a`
        background: ${({theme:r})=>r.colors.success};
    `,[n.DANGER]:a`
        background: ${({theme:r})=>r.colors.error};
    `},e={[o.BADGE]:a`
        border-radius: ${({theme:r})=>r.borderRadius};
    `,[o.PILL]:a`
        border-radius: 9999px;
    `},p={[s.SMALL]:a`
        padding: ${({theme:r})=>r.spacing(1)} ${({theme:r})=>r.spacing(2)};
    `,[s.MEDIUM]:a`
        padding: ${({theme:r})=>r.spacing(2)} ${({theme:r})=>r.spacing(3)};
    `,[s.LARGE]:a`
        padding: ${({theme:r})=>r.spacing(3)} ${({theme:r})=>r.spacing(4)};
    `},g=c.div`
    ${({color:r})=>t[r??n.PRIMARY]};
    ${({type:r})=>e[r??o.BADGE]};
    ${({size:r})=>p[r??s.MEDIUM]};

    color: ${({theme:r})=>r.colors.background};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({theme:r})=>r.typographies.p.fontFamily};
    font-size: ${({theme:r,size:i})=>i==s.SMALL?r.typographies.small.fontSize:r.typographies.p.fontSize};
    font-weight: 600;
    line-height: 24px;
    margin: 0;
`;export{g as B,o as a,n as b,s as c};
