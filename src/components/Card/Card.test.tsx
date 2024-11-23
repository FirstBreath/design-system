import React from "react";
import {screen} from "@testing-library/react";
import {Card} from "./Card.styles";
import {renderWithTheme} from "../../utils/renderWithTheme";

describe('Card Component', () => {
    test('Card component should render content', () => {
        const content = 'hello there'
        renderWithTheme(<Card>
            {content}
        </Card>)

        const contentElement = screen.getByText(content)
        expect(contentElement).toBeInTheDocument()
    })

    test('Card component should render multiple children', () => {
        const content1 = 'hello there'
        const content2 = 'general kenobi'
        renderWithTheme(<Card>
            <div>{content1}</div>
            <div>{content2}</div>
        </Card>)

        const contentElement1 = screen.getByText(content1)
        const contentElement2 = screen.getByText(content2)
        expect(contentElement1).toBeInTheDocument()
        expect(contentElement2).toBeInTheDocument()
    })

    test('Card component should apply theme styles', () => {
        const content = 'hello there'
        renderWithTheme(<Card>
            <div>{content}</div>
        </Card>)

        const cardElement = screen.getByText(content).parentElement
        expect(cardElement).toHaveStyle('padding: 24px')
        expect(cardElement).toHaveStyle('gap: 40px')
    })
})