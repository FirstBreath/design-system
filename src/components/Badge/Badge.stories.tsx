import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import {Badge} from "./Badge.component";
import {BadgeProps} from "./Badge.types";

export default {
    title: "Components/Badge",
    component: Badge,
    parameters: {
        layout: 'centered',
    }
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Default Badge",
    type: Badge.Types.BADGE,
    color: Badge.Colors.PRIMARY,
    size: Badge.Sizes.MEDIUM,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Secondary Badge",
    type: Badge.Types.BADGE,
    color: Badge.Colors.SECONDARY,
    size: Badge.Sizes.MEDIUM,
};
