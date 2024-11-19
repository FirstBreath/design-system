import React from "react";
import {fireEvent, screen} from "@testing-library/react";
import {SliderIndicator} from "./SliderIndicator.component";
import {SliderIndicatorProps} from "./SliderIndicator.types";
import {renderWithTheme} from "../../../utils/renderWithTheme";

describe('SliderIndicator Component', () => {
    const defaultProps: SliderIndicatorProps = {
        length: 5,
        activeIndex: 2,
        onClick: jest.fn(),
    };

    it('renders the correct number of dots', () => {
        renderWithTheme(<SliderIndicator {...defaultProps} />);
        const dots = screen.getAllByTestId('slider-dot');
        expect(dots).toHaveLength(defaultProps.length);
    });

    it('renders the correct active dot', () => {
        renderWithTheme(<SliderIndicator {...defaultProps} />);
        const dots = screen.getAllByTestId('slider-dot');
        dots.forEach((dot, index) => {
            if (index === defaultProps.activeIndex) {
                expect(dot).toHaveAttribute('data-active', 'true');
            } else {
                expect(dot).not.toHaveAttribute('data-active', 'true');
            }
        });
    });

    it('calls onClick when a dot is clicked', () => {
        renderWithTheme(<SliderIndicator {...defaultProps} />);
        const dots = screen.getAllByTestId('slider-dot');
        fireEvent.click(dots[1]);
        expect(defaultProps.onClick).toHaveBeenCalledWith(1);
    });

});
