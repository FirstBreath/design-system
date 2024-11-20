import React from 'react';
import {H1Props} from "./H1.types";
import {H1Style} from "./H1.styles";

export const H1 = ({children, ...props}: H1Props) => {
    return (
        <H1Style {...props}>
            {children}
        </H1Style>
    )
}
