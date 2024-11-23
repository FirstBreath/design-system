export const testTemplate = (componentName: string) => {
    return `import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {${componentName}} from "./${componentName}.component";

test('${componentName} component should render content', () => {
    const content = 'hello there'
    render(<${componentName} content={content} />)

    const contentElement = screen.getByText(content)
    expect(contentElement).toBeInTheDocument()
})
    `;
};
