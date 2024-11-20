import{R as r}from"./index-DJO9vBfz.js";import{d as n}from"./styled-components.browser.esm-BjS_sxvV.js";const f=n.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
`,y=n.label`
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
`,b=n.input`
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

    transition: border-color 0.5s;

    &:focus {
        border-color: ${({theme:e,isSuccess:o,isError:t})=>o?e.colors.success:t?e.colors.error:e.colors.primary};
`,x=n.span`
    color: red;
    margin-top: 4px;
`,h=({label:e,placeholder:o,onChange:t,type:p,validate:i,...l})=>{const[u,c]=r.useState(""),[a,d]=r.useState(null),g=m=>{const s=m.target.value;c(s),t&&t(s),i&&d(i(s))};return r.createElement(f,{...l},r.createElement(y,null,e),r.createElement(b,{placeholder:o,value:u,onChange:g,isError:!!a,type:p}),a&&r.createElement(x,null,a))};h.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"ReactHTMLInputTypeAttribute",raw:"React.HTMLInputTypeAttribute"},description:""},isError:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},validate:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string | null",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}}},description:""}}};export{h as I};
