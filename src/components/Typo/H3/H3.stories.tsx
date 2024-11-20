import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import {H3} from "./H3.component";
import {H3Props} from "./H3.types";

export default {
    title: "Components/Typo/H3",
    component: H3,
    argTypes: {
        children: {control: "text"},
    },
} as Meta;

const Template: StoryFn<H3Props> = (args) => <H3 {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Hello, World!",
};
