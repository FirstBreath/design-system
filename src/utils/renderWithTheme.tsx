import {render} from "@testing-library/react";
import {DefaultTheme, ThemeProvider} from "styled-components";
import {defaultTheme} from "../themes";
import React from "react";

type RenderWithTheme = (
    component: React.ReactNode,
    options?: {
        theme?: DefaultTheme;
    }
) => any;

export const renderWithTheme: RenderWithTheme = (component: React.ReactNode, options?) => {
    return render(<ThemeProvider theme={options?.theme ?? defaultTheme}>{component}</ThemeProvider>);
};
