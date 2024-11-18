import{R as o}from"./index-DJO9vBfz.js";import{B as e}from"./Button.component-DBpkfjTN.js";import{a as y}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./styled-components.browser.esm-BjS_sxvV.js";import"./v4-CQkTLCs1.js";const h={title:"Components/Button",component:e,argTypes:{children:{name:"Children",control:"text"},size:{name:"Size",control:"select",options:Object.values(e.ButtonSize)},type:{name:"Type",control:"select",options:Object.values(e.ButtonType)}}},f=r=>o.createElement("div",{style:{display:"flex"}},o.createElement(e,{...r})),t=r=>{const i=[];return Object.values(e.ButtonType).forEach(a=>{Object.values(e.ButtonSize).forEach(s=>{i.push(o.createElement(e,{type:a,size:s,...r}))})}),o.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"}},i.map((a,s)=>o.createElement("div",{key:s},a)))};t.args={children:"Button",onClick:()=>y("on-click")()};const n=f.bind({});n.args={children:"Button",type:e.ButtonType.PRIMARY,size:e.ButtonSize.MEDIUM,onClick:()=>y("on-click")()};t.__docgenInfo={description:"",methods:[],displayName:"All",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:""},type:{required:!1,tsType:{name:"ButtonType"},description:""},size:{required:!1,tsType:{name:"ButtonSize"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var c,p,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`(args: ButtonProps) => {
  const buttons: React.JSX.Element[] = [];
  Object.values(Button.ButtonType).forEach(type => {
    Object.values(Button.ButtonSize).forEach(size => {
      buttons.push(<Button type={type} size={size} {...args} />);
    });
  });
  return <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  }}>
            {buttons.map((button, index) => <div key={index}>
                    {button}
                </div>)}
        </div>;
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,d,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => <div style={{
  display: 'flex'
}}>
    <Button {...args} />
</div>`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const z=["All","Default"];export{t as All,n as Default,z as __namedExportsOrder,h as default};
