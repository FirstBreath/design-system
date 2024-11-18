import React from 'react';
import {fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Button} from "./Button.component";
import {renderWithTheme} from "../../utils/renderWithTheme";

describe('Button Component', () => {
    test('renders children correctly', () => {
        renderWithTheme(<Button>Click Me</Button>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    test('triggers onClick handler when clicked', () => {
        const handleClick = jest.fn();
        renderWithTheme(<Button onClick={handleClick}>Click Me</Button>);
        const buttonElement = screen.getByText('Click Me');
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
