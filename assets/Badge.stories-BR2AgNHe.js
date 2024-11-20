import{R as o}from"./index-B-o1Wr-g.js";import{B as e}from"./Badge.component-B4RLhljS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-sghPJsyo.js";const D={title:"Components/Badge",component:e,parameters:{layout:"centered"},argTypes:{color:{control:"select",options:Object.values(e.Colors)},size:{control:"select",options:Object.values(e.Sizes)},type:{control:"select",options:Object.values(e.Types)}}},t={args:{children:"Badge",color:e.Colors.PRIMARY,size:e.Sizes.MEDIUM,type:e.Types.BADGE}},s=x=>{const m=Object.values(e.Colors),g=Object.values(e.Sizes),u=Object.values(e.Types);return o.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},m.map(a=>o.createElement("div",{key:a,style:{display:"flex",flexDirection:"row",gap:"16px"}},g.map(r=>o.createElement("div",{key:r,style:{display:"flex",flexDirection:"column",gap:"16px"}},u.map(l=>o.createElement(e,{key:l,color:a,size:r,type:l},"Badges")))))))};s.__docgenInfo={description:"",methods:[],displayName:"All"};var n,c,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    color: Badge.Colors.PRIMARY,
    size: Badge.Sizes.MEDIUM,
    type: Badge.Types.BADGE
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var i,d,y;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`(args: StoryObj) => {
  const colors = Object.values(Badge.Colors);
  const sizes = Object.values(Badge.Sizes);
  const types = Object.values(Badge.Types);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
            {colors.map(color => <div key={color} style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '16px'
    }}>
                    {sizes.map(size => <div key={size} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
                            {types.map(type => <Badge key={type} color={color} size={size} type={type}>
                                    Badges
                                </Badge>)}
                        </div>)}
                </div>)}
        </div>;
}`,...(y=(d=s.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const O=["Default","All"];export{s as All,t as Default,O as __namedExportsOrder,D as default};
