import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Small } from './Small.component';
import { SmallProps } from './Small.types';

export default {
    title: 'Components/Typo/Small',
    component: Small,
    argTypes: {
        children: { control: 'text' },
    },
} as Meta;

const Template: StoryFn<SmallProps> = (args) => <Small {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Hello, World!',
};
