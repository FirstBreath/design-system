import type {Preview} from "@storybook/react";
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from "../src/themes/default";
import React from "react";

export const decorators = [
    (Story: any) => (
        <ThemeProvider theme={defaultTheme}>
            <Story/>
        </ThemeProvider>
    ),
];

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
