import React from "react";
import {render, screen} from "@testing-library/react";
import {H1} from "./H1.component";

test('H1 component should render content', () => {
    const content = 'hello there'
    render(<H1 children={content}/>)

    const contentElement = screen.getByText(content)
    expect(contentElement).toBeInTheDocument()
})
    