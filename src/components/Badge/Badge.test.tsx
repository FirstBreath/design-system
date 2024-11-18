import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {Badge} from "./Badge.component";

test('Badge component should render content', () => {
    const content = 'hello there'
    render(<Badge content={content} />)

    const contentElement = screen.getByText(content)
    expect(contentElement).toBeInTheDocument()
})
    