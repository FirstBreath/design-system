import {render} from "@testing-library/react";
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "../themes";
import React from "react";

export const renderWithTheme = (component: React.ReactNode) => {
    return render(<ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>);
};
