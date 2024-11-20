import{R as n}from"./index-B-o1Wr-g.js";import{S as s}from"./SliderIndicator.component-Ka3jxL4b.js";import{a as p}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-sghPJsyo.js";import"./v4-CQkTLCs1.js";const h={title:"Components/Slider/SliderIndicator",component:s,argTypes:{length:{control:"number"},activeIndex:{control:"number"}}},v=d=>{const{length:l,activeIndex:t}=d,[m,c]=n.useState(t);return n.useEffect(()=>{c(t)},[t]),n.createElement(s,{activeIndex:m,length:l,onClick:r=>{c(r),p("Clicked")(r)}})},e=v.bind({});e.args={length:5,activeIndex:0};var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const C=["Default"];export{e as Default,C as __namedExportsOrder,h as default};
