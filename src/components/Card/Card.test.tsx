import React from 'react';
import { screen } from '@testing-library/react';
import { Card } from './Card.component';
import { renderWithTheme } from '../../utils/renderWithTheme';

describe('Card Component', () => {
    test('Card component should render content', () => {
        const content = 'hello there';
        renderWithTheme(<Card>{content}</Card>);

        const contentElement = screen.getByText(content);
        expect(contentElement).toBeInTheDocument();
    });
});
