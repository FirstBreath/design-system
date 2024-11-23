export const storiesTemplate = (componentName: string) => {
    return `import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ${componentName} } from "./${componentName}.component";
import { ${componentName}Props } from "./${componentName}.types";

export default {
    title: "Components/${componentName}",
    component: ${componentName},
    argTypes: {
        content: { control: "text" },
    },
} as Meta;

const Template: StoryFn<${componentName}Props> = (args) => <${componentName} {...args} />;

export const Default = Template.bind({});
Default.args = {
    content: "Hello, World!",
};
`;
};
