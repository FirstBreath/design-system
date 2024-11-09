export const typesTemplates = (componentName: string) => {
    return `export interface ${componentName}Props {
    content: string;
}
`
}