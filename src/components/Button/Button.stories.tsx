import React from "react";
import {Meta, StoryFn} from "@storybook/react";

import {Button} from "./Button.component";
import {ButtonProps} from "./Button.types";
import {action} from "@storybook/addon-actions";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        content: {
            name: "Content",
            control: "text"
        },
        type: {
            name: "Type",
            control: "select",
            options: Object.values(Button.ButtonType)
        },
        onClick: {
            action: "clicked"
        }
    },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    content: "Click me",
    type: Button.ButtonType.PRIMARY,
    onClick: () => action('on-click')()
};
