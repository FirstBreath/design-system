import{r as s}from"./index-B-o1Wr-g.js";import{c as m}from"./client-BSKAO6HO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DolzVqEf.js";var n=new Map;function l(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var a=({callback:e,children:r})=>{let t=s.useRef();return s.useLayoutEffect(()=>{t.current!==e&&(t.current=e,e())},[e]),r};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,r=null;return{promise:new Promise((t,o)=>{e=t,r=o}),resolve:e,reject:r}});var f=async(e,r,t)=>{let o=await c(r,t);if(l()){o.render(e);return}let{promise:i,resolve:u}=Promise.withResolvers();return o.render(s.createElement(a,{callback:u},e)),i},w=(e,r)=>{let t=n.get(e);t&&(t.unmount(),n.delete(e))},c=async(e,r)=>{let t=n.get(e);return t||(t=m(e,r),n.set(e,t)),t};export{f as renderElement,w as unmountElement};
