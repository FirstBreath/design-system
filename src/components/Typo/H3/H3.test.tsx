import React from 'react';
import { render, screen } from '@testing-library/react';
import { H3 } from './H3.component';

test('H3 component should render content', () => {
    const content = 'hello there';
    render(<H3>{content}</H3>);

    const contentElement = screen.getByText(content);
    expect(contentElement).toBeInTheDocument();
});
