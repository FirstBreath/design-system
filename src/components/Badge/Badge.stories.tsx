import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Badge } from './Badge.styles';
import { BadgeColors, BadgeProps, BadgeSizes, BadgeTypes } from './Badge.types';

export default {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Badge',
    type: BadgeTypes.BADGE,
    color: BadgeColors.PRIMARY,
    size: BadgeSizes.MEDIUM,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Secondary Badge',
    type: BadgeTypes.BADGE,
    color: BadgeColors.SECONDARY,
    size: BadgeSizes.MEDIUM,
};
