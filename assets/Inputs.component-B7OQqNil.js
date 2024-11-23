import{R as t}from"./index-B-o1Wr-g.js";import{d as o}from"./styled-components.browser.esm-sghPJsyo.js";const m=o.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
`,y=o.label`
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
`,x=o.input`
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
        border-color: ${({theme:e,isSuccess:n,isError:r})=>n?e.colors.success:r?e.colors.error:e.colors.primary};
`,b=o.span`
    color: red;
    margin-top: 4px;
`,p=({label:e,placeholder:n,onChange:r,type:s,validate:i,...u})=>{const[d,c]=t.useState(""),[a,f]=t.useState(null),g=h=>{const l=h.target.value;c(l),r&&r(l),i&&f(i(l))};return t.createElement(m,{...u},t.createElement(y,null,e),t.createElement(x,{placeholder:n,value:d,onChange:g,isError:!!a,type:s}),a&&t.createElement(b,null,a))};try{p.displayName="Input",p.__docgenInfo={description:"Input component",displayName:"Input",props:{label:{defaultValue:null,description:"The label for the input field",name:"label",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"The placeholder text for the input field",name:"placeholder",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"The change event handler",name:"onChange",required:!1,type:{name:"((value: string) => void) | undefined"}},type:{defaultValue:null,description:"The type of the input field",name:"type",required:!0,type:{name:"string"}},validate:{defaultValue:null,description:"The validation function for the input field",name:"validate",required:!1,type:{name:"((value: string) => string | null) | undefined"}}}}}catch{}export{p as I};
