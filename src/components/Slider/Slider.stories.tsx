import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Slider } from './Slider.component';
import { SliderProps } from './Slider.types';
import styled from 'styled-components';
import { SliderIndicator } from './SliderIndicator';

export default {
    title: 'Components/Slider',
    subcomponents: { SliderIndicator },
    component: Slider,
} as Meta;

const ElementExample = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const elements = [
    <ElementExample key={1}>
        <h1>test1</h1>
        <p>test1 p</p>
    </ElementExample>,
    <ElementExample key={2}>
        <h1>test2</h1>
        <p>test2 p</p>
    </ElementExample>,
    <ElementExample key={3}>
        <h1>test3</h1>
        <p>test3 p</p>
    </ElementExample>,
    <ElementExample key={4}>
        <h1>test4</h1>
        <p>test4 p</p>
    </ElementExample>,
    <ElementExample key={5}>
        <h1>test5</h1>
        <p>test5 p</p>
    </ElementExample>,
    <ElementExample key={6}>
        <h1>test5</h1>
        <p>test5 p</p>
    </ElementExample>,
];

const Template: StoryFn<SliderProps> = (args) => <Slider {...args} />;

export const Default = Template.bind({});

Default.args = {
    elements,
};
