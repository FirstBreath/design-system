import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import {Inputs} from "./Inputs.component";
import {InputsProps} from "./Inputs.types";

export default {
    title: "Components/Inputs",
    component: Inputs,
    argTypes: {
        label: {
            control: 'text',
        },
        placeholder: {
            control: 'text',
        },
    }
} as Meta;

const Template: StoryFn<InputsProps> = (args) => <Inputs {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Email!",
    placeholder: "Enter your email address",
};
