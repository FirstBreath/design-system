import {DefaultTheme} from "styled-components";

export const defaultTheme: DefaultTheme = {
    colors: {
        primary: '#24669C',
        secondary: '#91C4ED',
        background: '#FFFFFF',
        surface: '#F9F9FB',
        error: '#d50101',
        success: '#1ab000',
        textPrimary: '#262F36',
        textSecondary: '#808080',
        border: '#D6D6D6',
    },
    typographies: {
        h1: {
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '72px',
            fontWeight: 600,
            fontStyle: 'normal',
            lineHeight: '90px',
            letterSpacing: '-1.44px',
        },
        h2: {
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '48px',
            fontWeight: 500,
            fontStyle: 'normal',
            lineHeight: '60px',
            letterSpacing: '-0.96px',
        },
        h3: {
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '24px',
            fontWeight: 500,
            fontStyle: 'normal',
            lineHeight: '32px',
        },
        p: {
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: '24px',
        },
        small: {
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '12px',
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: '18px',
        },
    },
    spacing: (factor: number) => `${factor * 4}px`,
    sizes: {
        small: '8px',
        medium: '16px',
        large: '32px',
        xlarge: '64px',
    },
    borderRadius: '8px',
    shadows: {
        default: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        medium: '5px 5px 10px -3px rgba(16, 24, 40, 0.05)',
        large: '15px 15px 25px 0px rgba(16, 24, 40, 0.05)',
    },
};