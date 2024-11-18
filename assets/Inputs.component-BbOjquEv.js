import{R as r}from"./index-DJO9vBfz.js";import{d as n}from"./styled-components.browser.esm-BjS_sxvV.js";const m=n.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
`,f=n.label`
    position: absolute;
    top: -8px;
    left: 12px;
    background: ${({theme:e})=>e.colors.background};
    padding: 0 4px;
    font-size: ${({theme:e})=>e.typographies.p.fontSize};
    font-family: ${({theme:e})=>e.typographies.p.fontFamily};
    font-weight: ${({theme:e})=>e.typographies.p.fontWeight};
    transition: 0.3s;
    color: ${({theme:e})=>e.colors.textPrimary};
`,y=n.input`
    padding: 16px 8px 8px 8px;
    color: ${({theme:e})=>e.colors.textSecondary};
    font-family: ${({theme:e})=>e.typographies.p.fontFamily};
    font-weight: ${({theme:e})=>e.typographies.p.fontWeight};
    font-size: ${({theme:e})=>e.typographies.p.fontSize};
    background: none;
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius};
    outline: none;
    box-shadow: ${({theme:e})=>e.shadows.default};

    &:focus {
        border-color: ${({theme:e,isSuccess:o,isError:t})=>o?e.colors.success:t?e.colors.error:e.colors.primary};
`,b=n.span`
    color: red;
    margin-top: 4px;
`,x=({label:e,placeholder:o,onChange:t,type:p,validate:i})=>{const[l,u]=r.useState(""),[a,c]=r.useState(null),d=g=>{const s=g.target.value;u(s),t&&t(s),i&&c(i(s))};return r.createElement(m,null,r.createElement(f,null,e),r.createElement(y,{placeholder:o,value:l,onChange:d,isError:!!a,type:p}),a&&r.createElement(b,null,a))};x.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"ReactHTMLInputTypeAttribute",raw:"React.HTMLInputTypeAttribute"},description:""},isError:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},validate:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string | null",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}}},description:""}}};export{x as I};
