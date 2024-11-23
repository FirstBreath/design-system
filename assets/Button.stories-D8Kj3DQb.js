import{R as o}from"./index-B-o1Wr-g.js";import{B as t}from"./Button.component-CYSDmoIo.js";import{a as y}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-sghPJsyo.js";import"./v4-CQkTLCs1.js";const h={title:"Components/Button",component:t,argTypes:{children:{name:"Children",control:"text"},size:{name:"Size",control:"select",options:Object.values(t.ButtonSize)},type:{name:"Type",control:"select",options:Object.values(t.ButtonType)}}},B=r=>o.createElement("div",{style:{display:"flex"}},o.createElement(t,{...r})),e=r=>{const c=[];return Object.values(t.ButtonType).forEach(s=>{Object.values(t.ButtonSize).forEach(a=>{c.push(o.createElement(t,{type:s,size:a,...r}))})}),o.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"}},c.map((s,a)=>o.createElement("div",{key:a},s)))};e.args={children:"Button",onClick:()=>y("on-click")()};const n=B.bind({});n.args={children:"Button",type:t.ButtonType.PRIMARY,size:t.ButtonSize.MEDIUM,onClick:()=>y("on-click")()};var l,i,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`(args: ButtonProps) => {
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
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,m,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => <div style={{
  display: 'flex'
}}>
    <Button {...args} />
</div>`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const z=["All","Default"];export{e as All,n as Default,z as __namedExportsOrder,h as default};
