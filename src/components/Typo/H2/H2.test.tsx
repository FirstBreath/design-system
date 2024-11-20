import React from "react";
import {render, screen} from "@testing-library/react";
import {H2} from "./H2.component";

test('H2 component should render content', () => {
    const content = 'hello there'
    render(<H2 children={content}/>)

    const contentElement = screen.getByText(content)
    expect(contentElement).toBeInTheDocument()
})
    