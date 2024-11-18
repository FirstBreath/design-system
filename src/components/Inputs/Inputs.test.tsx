import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {Inputs} from "./Inputs.component";

test('Inputs component should render content', () => {
    const content = 'hello there'
    render(<Inputs content={content} />)

    const contentElement = screen.getByText(content)
    expect(contentElement).toBeInTheDocument()
})
    