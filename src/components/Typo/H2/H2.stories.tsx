import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import {H2} from "./H2.styles";
import {H2Props} from "./H2.types";

export default {
    title: "Components/Typo/H2",
    component: H2,
    argTypes: {
        children: {control: "text"},
    },
} as Meta;

const Template: StoryFn<H2Props> = (args) => <H2 {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Hello, World!",
};
