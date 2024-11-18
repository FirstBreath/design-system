import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import {Input} from "./Inputs.component";
import {InputsProps} from "./Inputs.types";

export default {
    title: "Components/Inputs",
    component: Input,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        label: {
            control: 'text',
        },
        placeholder: {
            control: 'text',
        },
        type: {
            control: 'select',
            options: ['text', 'email', 'password'],
        }
    }
} as Meta;

const Template: StoryFn<InputsProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Email",
    placeholder: "Enter your email address",
    type: "email"
};
