import React from 'react';
import {screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Badge} from './Badge.styles';
import {BadgeColors, BadgeSizes, BadgeTypes} from './Badge.types';
import {defaultTheme} from "../../themes";
import {renderWithTheme} from "../../utils/renderWithTheme";

describe('Badge Component', () => {
    test('renders children correctly', () => {
        renderWithTheme(<Badge>Test Badge</Badge>);
        expect(screen.getByText('Test Badge')).toBeInTheDocument();
    });

    test('applies the correct color', () => {
        renderWithTheme(<Badge color={BadgeColors.SUCCESS}>Success Badge</Badge>);
        const badgeElement = screen.getByText('Success Badge');
        expect(badgeElement).toHaveStyle(`background: ${defaultTheme.colors.success}`);
    });

    test('applies the correct size - small', () => {
        renderWithTheme(<Badge size={BadgeSizes.SMALL}>Small Badge</Badge>);
        const badgeElement = screen.getByText('Small Badge');
        expect(badgeElement).toHaveStyle(`padding: ${defaultTheme.spacing(1)} ${defaultTheme.spacing(2)}`);
    });

    test('applies the correct size - medium', () => {
        renderWithTheme(<Badge size={BadgeSizes.MEDIUM}>Medium Badge</Badge>);
        const badgeElement = screen.getByText('Medium Badge');
        expect(badgeElement).toHaveStyle(`padding: ${defaultTheme.spacing(2)} ${defaultTheme.spacing(3)}`);
    });

    test('applies the correct size - large', () => {
        renderWithTheme(<Badge size={BadgeSizes.LARGE}>Large Badge</Badge>);
        const badgeElement = screen.getByText('Large Badge');
        expect(badgeElement).toHaveStyle(`padding: ${defaultTheme.spacing(3)} ${defaultTheme.spacing(4)}`);
    });

    test('applies the correct type - badge', () => {
        renderWithTheme(<Badge type={BadgeTypes.BADGE}>Badge Type</Badge>);
        const badgeElement = screen.getByText('Badge Type');
        expect(badgeElement).toHaveStyle(`border-radius: ${defaultTheme.borderRadius}`);
    });

    test('applies the correct type - pill', () => {
        renderWithTheme(<Badge type={BadgeTypes.PILL}>Pill Type</Badge>);
        const badgeElement = screen.getByText('Pill Type');
        expect(badgeElement).toHaveStyle('border-radius: 9999px');
    });
});
