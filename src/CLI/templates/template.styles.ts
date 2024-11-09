export const stylesTemplate = (componentName: string) => {
    return `import styled from "styled-components";

export const ${componentName}Style = styled.div\`
    color: red;
\`;
`
}