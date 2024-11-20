import React from "react";
import {render, screen} from "@testing-library/react";
import {Small} from "./Small.component";

test('Small component should render content', () => {
    const content = 'hello there'
    render(<Small children={content}/>)

    const contentElement = screen.getByText(content)
    expect(contentElement).toBeInTheDocument()
})
    