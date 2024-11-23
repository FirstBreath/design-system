import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SliderIndicator } from './SliderIndicator.component';
import { SliderIndicatorProps } from './SliderIndicator.types';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Components/Slider/SliderIndicator',
    component: SliderIndicator,
    argTypes: {
        length: {
            control: 'number',
        },
        activeIndex: {
            control: 'number',
        },
    },
} as Meta;

const Template: StoryFn<SliderIndicatorProps> = (args) => {
    const { length, activeIndex } = args;
    const [active, setActive] = React.useState(activeIndex);
    React.useEffect(() => {
        setActive(activeIndex);
    }, [activeIndex]);
    return (
        <SliderIndicator
            activeIndex={active}
            length={length}
            onClick={(index) => {
                setActive(index);
                action('Clicked')(index);
            }}
        />
    );
};

export const Default = Template.bind({});

Default.args = {
    length: 5,
    activeIndex: 0,
};
