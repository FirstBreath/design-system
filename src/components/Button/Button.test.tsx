import React from "react";
import {fireEvent, screen} from "@testing-library/react";
import {Button} from "./Button.component";
import {renderWithTheme} from "../../utils/renderWithTheme";

test('Button component should render content', () => {
    const content = 'hello there';
    renderWithTheme(<Button content={content}/>);

    const contentElement = screen.getByText(content);
    expect(contentElement).toBeInTheDocument();
});

test('Button component should trigger onClick event', () => {
    const handleClick = jest.fn();
    const content = 'click me';
    renderWithTheme(<Button content={content} onClick={handleClick}/>);

    const buttonElement = screen.getByText(content);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
});