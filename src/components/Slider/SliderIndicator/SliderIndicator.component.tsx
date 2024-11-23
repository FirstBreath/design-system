import React from 'react';
import {SliderIndicatorProps} from "./SliderIndicator.types";
import {SliderIndicatorContainer, SliderIndicatorDot} from "./SliderIndicator.styles";

/**
 * SliderIndicator component
 * @param {number} length - The number of dots to display
 * @param {number} activeIndex - The index of the currently active dot
 * @param {function} onClick - The function to call when a dot is clicked
 * @param {object} props - The rest of the props
 * @returns {JSX.Element} The rendered slider indicator component
 */
export const SliderIndicator: React.FC<SliderIndicatorProps> = ({
                                                                    length,
                                                                    activeIndex,
                                                                    onClick = () => {
                                                                    },
                                                                    ...props
                                                                }: SliderIndicatorProps): JSX.Element => {
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
    );
};