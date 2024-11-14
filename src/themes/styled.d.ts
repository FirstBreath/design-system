import 'styled-components';

type typography = {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    fontStyle: string;
    lineHeight: string;
    letterSpacing?: string;
}

declare module 'styled-components' {

    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            surface: string;
            error: string;
            success: string;
            textPrimary: string;
            textSecondary: string;
            border: string;
        }
        typographies: {
            h1: typography;
            h2: typography;
            h3: typography;
            p: typography;
            small: typography;
        };
        borderRadius: '8px';
        spacing: (factor: number) => string;
        sizes: {
            small: string;
            medium: string;
            large: string;
            xlarge: string;
        },
        shadows: {
            default: string;
            medium: string;
            large: string;
        },
    }

}