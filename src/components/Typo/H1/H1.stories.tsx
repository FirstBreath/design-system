import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { H1 } from './H1.component';
import { H1Props } from './H1.types';

export default {
    title: 'Components/Typo/H1',
    component: H1,
    argTypes: {
        children: { control: 'text' },
    },
} as Meta;

const Template: StoryFn<H1Props> = (args) => <H1 {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Hello, World!',
};
