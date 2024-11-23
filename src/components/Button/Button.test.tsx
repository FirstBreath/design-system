import React from 'react';
import {fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Button} from "./Button.component";
import {renderWithTheme} from "../../utils/renderWithTheme";

describe('Button Component', () => {
    it('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        renderWithTheme(<Button onClick={handleClick}>Click me</Button>);
        const buttonElement = screen.getByText('Click me');
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders button with string content', () => {
        renderWithTheme(<Button>Click me</Button>);
        const buttonElement = screen.getByText('Click me');
        expect(buttonElement).toBeInTheDocument();
    });

    it('renders button with React node content', () => {
        renderWithTheme(<Button><span>Click me</span></Button>);
        const buttonElement = screen.getByText('Click me');
        expect(buttonElement).toBeInTheDocument();
    });

    it('renders button with additional props', () => {
        renderWithTheme(<Button data-testid="custom-button">Click me</Button>);
        const buttonElement = screen.getByTestId('custom-button');
        expect(buttonElement).toBeInTheDocument();
    });
});
