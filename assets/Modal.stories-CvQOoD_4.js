import{R as e}from"./index-B-o1Wr-g.js";import{M as r}from"./Modal.component-WcjT1K1Y.js";import{B as c}from"./Button.component-CYSDmoIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-sghPJsyo.js";const O={title:"Components/Modal",component:r,argTypes:{content:{control:"text"}}},t=()=>{const[o,p]=e.useState(!1),n=()=>{p(!o)};return e.createElement("div",{style:{display:"flex"}},e.createElement(c,{onClick:n},"Open Modal"),e.createElement(r,{isOpen:o,onClose:n},e.createElement("h2",null,"Hello, World!")))};var s,l,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return <div style={{
    display: 'flex'
  }}>
            <Button onClick={toggleModal}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={toggleModal}>
                <h2>Hello, World!</h2>
            </Modal>
        </div>;
}`,...(a=(l=t.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,O as default};
