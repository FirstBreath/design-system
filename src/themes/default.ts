import {DefaultTheme} from "styled-components";
import {PRIMARY_SWATCH} from "./colors";

export const defaultTheme: DefaultTheme = {
    primarySwatch: PRIMARY_SWATCH,
    colors: {
        primary: PRIMARY_SWATCH[500],
        secondary: PRIMARY_SWATCH[300],
        background: PRIMARY_SWATCH[50],
        surface: PRIMARY_SWATCH[100],
        error: '#d50101',
        success: '#1ab000',
        textPrimary: PRIMARY_SWATCH[900],
        textSecondary: PRIMARY_SWATCH[700],
        border: PRIMARY_SWATCH[100],
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
        xsmall: '4px',
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