import React from "react";
import {render, screen} from "@testing-library/react";
import {P} from "./P.component";

test('P component should render content', () => {
    const content = 'hello there'
    render(<P children={content}/>)

    const contentElement = screen.getByText(content)
    expect(contentElement).toBeInTheDocument()
})
    