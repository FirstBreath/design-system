import React from "react";
import {Meta, StoryFn} from "@storybook/react";

import {Button} from "./Button.component";
import {ButtonProps} from "./Button.types";
import {action} from "@storybook/addon-actions";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        children: {
            name: "Children",
            control: "text",
        },
        size: {
            name: "Size",
            control: "select",
            options: Object.values(Button.ButtonSize)
        },
        type: {
            name: "Type",
            control: "select",
            options: Object.values(Button.ButtonType)
        }
    },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <div style={{
    display: 'flex',
}}>
    <Button {...args} />
</div>;

export const All: StoryFn<ButtonProps> = (args: ButtonProps) => {
    const buttons: React.JSX.Element[] = [];
    Object.values(Button.ButtonType).forEach((type) => {
        Object.values(Button.ButtonSize).forEach((size) => {
            buttons.push(<Button type={type} size={size} {...args} />)
        })
    })
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
        }}>
            {buttons.map((button, index) => (
                <div key={index}>
                    {button}
                </div>
            ))}
        </div>
    );
}

All.args = {
    children: 'Button',
    onClick: () => action('on-click')()
}

export const Default = Template.bind({});
Default.args = {
    children: 'Button',
    type: Button.ButtonType.PRIMARY,
    size: Button.ButtonSize.MEDIUM,
    onClick: () => action('on-click')()
};
