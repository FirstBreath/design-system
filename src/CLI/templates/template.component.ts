export const componentTemplate = (componentName: string) => {
    return `import React from 'react';
import {${componentName}Props} from "./${componentName}.types";
import {${componentName}Style} from "./${componentName}.styles";

export const ${componentName} = ({ content }: ${componentName}Props) => {
    return (
        <${componentName}Style>
            {content}
        </${componentName}Style>
    )
}
`
}