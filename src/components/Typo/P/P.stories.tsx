import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import {P} from "./P.styles";
import {PProps} from "./P.types";

export default {
    title: "Components/Typo/P",
    component: P,
    argTypes: {
        children: {control: "text"},
    },
} as Meta;

const Template: StoryFn<PProps> = (args) => <P {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Hello, World!",
};
