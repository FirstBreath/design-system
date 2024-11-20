import React from 'react';
import {SliderProps} from "./Slider.types";
import {SliderContainer, SliderElement, SliderElementsContainer} from "./Slider.styles";
import {SliderIndicator} from "./SliderIndicator";

export const Slider = ({elements, ...props}: SliderProps) => {
    const isPairLength = elements.length % 2 === 0
    const middle = Math.floor(elements.length / 2);

    const [activeIndex, setActiveIndex] = React.useState(middle);
    return (
        <SliderContainer {...props}>
            <SliderElementsContainer length={isPairLength ? elements.length + 1 : elements.length}>
                {elements.map((element, index) => <SliderElement
                    key={index}
                    translate={`${-1 * (activeIndex - middle)}00%`}
                >
                    {element}
                </SliderElement>)}
                {isPairLength ? <SliderElement translate={`${-1 * (activeIndex - middle)}00%`}></SliderElement> : ''}
            </SliderElementsContainer>
            <SliderIndicator length={elements.length} activeIndex={activeIndex} onClick={setActiveIndex}/>
        </SliderContainer>
    )
}
