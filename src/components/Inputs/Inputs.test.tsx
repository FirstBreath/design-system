import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { Input } from './Inputs.component';
import { renderWithTheme } from '../../utils/renderWithTheme';

describe('Inputs Component', () => {
    test('renders label correctly', () => {
        const label = 'Username';
        renderWithTheme(
            <Input label={label} placeholder="Enter your username" />,
        );

        const labelElement = screen.getByText(label);
        expect(labelElement).toBeInTheDocument();
    });

    test('renders placeholder correctly', () => {
        const placeholder = 'Enter your username';
        renderWithTheme(<Input label="Username" placeholder={placeholder} />);

        const inputElement = screen.getByPlaceholderText(placeholder);
        expect(inputElement).toBeInTheDocument();
    });

    test('calls onChange handler when input value changes', () => {
        const handleChange = jest.fn();
        renderWithTheme(
            <Input
                label="Username"
                placeholder="Enter your username"
                onChange={handleChange}
            />,
        );

        const inputElement = screen.getByPlaceholderText('Enter your username');
        fireEvent.change(inputElement, { target: { value: 'new value' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith('new value');
    });

    test('displays validation error message', () => {
        const validate = (value: string) =>
            value.length < 5 ? 'Too short' : null;
        renderWithTheme(
            <Input
                label="Username"
                placeholder="Enter your username"
                validate={validate}
            />,
        );

        const inputElement = screen.getByPlaceholderText('Enter your username');
        fireEvent.change(inputElement, { target: { value: 'abc' } });

        const errorMessage = screen.getByText('Too short');
        expect(errorMessage).toBeInTheDocument();
    });

    test('does not display validation error message for valid input', () => {
        const validate = (value: string) =>
            value.length < 5 ? 'Too short' : null;
        renderWithTheme(
            <Input
                label="Username"
                placeholder="Enter your username"
                validate={validate}
            />,
        );

        const inputElement = screen.getByPlaceholderText('Enter your username');
        fireEvent.change(inputElement, { target: { value: 'valid input' } });

        const errorMessage = screen.queryByText('Too short');
        expect(errorMessage).not.toBeInTheDocument();
    });
});
