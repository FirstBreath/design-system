import React from "react";
import {render, screen} from "@testing-library/react";
import {Slider} from "./Slider.component";

test('Slider component should render content', () => {
    const content = 'hello there'
    render(<Slider elements={[]}/>)

    const contentElement = screen.getByText(content)
    expect(contentElement).toBeInTheDocument()
})
    