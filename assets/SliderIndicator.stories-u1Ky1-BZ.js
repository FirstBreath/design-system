import{R as n}from"./index-DJO9vBfz.js";import{S as s}from"./SliderIndicator.component-fSpQ9SOo.js";import{a as v}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./styled-components.browser.esm-BjS_sxvV.js";import"./v4-CQkTLCs1.js";const S={title:"Components/Slider/SliderIndicator",component:s,argTypes:{length:{control:"number"},activeIndex:{control:"number"}}},p=d=>{const{length:l,activeIndex:t}=d,[m,c]=n.useState(t);return n.useEffect(()=>{c(t)},[t]),n.createElement(s,{activeIndex:m,length:l,onClick:a=>{c(a),v("Clicked")(a)}})},e=p.bind({});e.args={length:5,activeIndex:0};var r,i,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const {
    length,
    activeIndex
  } = args;
  const [active, setActive] = React.useState(activeIndex);
  React.useEffect(() => {
    setActive(activeIndex);
  }, [activeIndex]);
  return <SliderIndicator activeIndex={active} length={length} onClick={index => {
    setActive(index);
    action("Clicked")(index);
  }} />;
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,S as default};
