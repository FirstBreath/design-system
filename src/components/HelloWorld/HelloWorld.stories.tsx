import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { HelloWorld } from "./HelloWorld.component";
import { HelloWorldProps } from "./HelloWorld.types";

export default {
    title: "Components/HelloWorld",
    component: HelloWorld,
    argTypes: {
        content: { control: "text" },
    },
} as Meta;

const Template: StoryFn<HelloWorldProps> = (args) => <HelloWorld {...args} />;

export const Default = Template.bind({});
Default.args = {
    content: "Hello, World!",
};
