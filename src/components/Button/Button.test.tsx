import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {Button} from "./Button.component";

test('Button component should render content', () => {
    const content = 'hello there'
    render(<Button content={content} />)

    const contentElement = screen.getByText(content)
    expect(contentElement).toBeInTheDocument()
})
    