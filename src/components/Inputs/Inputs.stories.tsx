import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Input } from './Inputs.component';
import { InputsProps } from './Inputs.types';

export default {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
} as Meta;

const Template: StoryFn<InputsProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Default Input',
    placeholder: 'Enter text',
    type: 'text',
    onChange: (value) => console.log(value),
    validate: (value) => (value.length < 3 ? 'Input too short' : null),
};
