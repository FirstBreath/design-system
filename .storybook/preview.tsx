import type {Preview} from "@storybook/react";
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from "../src";
import React from "react";

export const decorators = [
    (Story: any) => (
        <ThemeProvider theme={defaultTheme}>
            <Story/>
        </ThemeProvider>
    ),
];

const preview: Preview = {
    tags: ['autodocs'],
    parameters: {
        backgrounds: {
            values: [
                // 👇 Default values
                {name: 'Light', value: defaultTheme.colors.background},
            ],
            // 👇 Specify which background is shown by default
            default: 'Light',
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
