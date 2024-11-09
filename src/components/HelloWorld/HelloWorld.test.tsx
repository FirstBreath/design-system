import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {HelloWorld} from "./HelloWorld.component";

test('HelloWorld component should render content', () => {
    const content = 'hello there'
    render(<HelloWorld content={content} />)

    const contentElement = screen.getByText(content)
    expect(contentElement).toBeInTheDocument()
})