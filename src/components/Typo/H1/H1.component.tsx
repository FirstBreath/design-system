import React from 'react';
import {H1Props} from "./H1.types";
import {H1Style} from "./H1.styles";

export const H1 = ({children}: H1Props) => {
    return (
        <H1Style>
            {children}
        </H1Style>
    )
}
