import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {Card} from "./Card.component";

test('Card component should render content', () => {
    const content = 'hello there'
    render(<Card content={content} />)

    const contentElement = screen.getByText(content)
    expect(contentElement).toBeInTheDocument()
})
    