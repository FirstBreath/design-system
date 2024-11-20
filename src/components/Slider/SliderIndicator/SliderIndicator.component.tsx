import React from 'react';
import {SliderIndicatorProps} from "./SliderIndicator.types";
import {SliderIndicatorContainer, SliderIndicatorDot} from "./SliderIndicator.styles";

export const SliderIndicator = ({
                                    length,
                                    activeIndex,
                                    onClick = () => {
                                    },
                                    ...props
                                }: SliderIndicatorProps) => {
    return (
        <SliderIndicatorContainer {...props}>
            {Array.from({length}).map((_, index) => (
                <SliderIndicatorDot
                    key={index}
                    active={index == activeIndex}
                    onClick={() => onClick(index)}
                    data-testid="slider-dot"
                    data-active={index == activeIndex}
                />
            ))}
        </SliderIndicatorContainer>
    )
}
