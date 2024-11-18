import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {SliderIndicator} from "./SliderIndicator.component";

test('SliderIndicator component should render content', () => {
    const content = 'hello there'
    render(<SliderIndicator content={content} />)

    const contentElement = screen.getByText(content)
    expect(contentElement).toBeInTheDocument()
})
    