import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Card } from './Card.component';
import { CardProps } from './Card.types';

export default {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Card',
};
