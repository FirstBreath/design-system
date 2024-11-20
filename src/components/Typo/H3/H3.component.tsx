import React from 'react';
import {H3Props} from "./H3.types";
import {H3Style} from "./H3.styles";

export const H3 = ({children}: H3Props) => {
    return (
        <H3Style>
            {children}
        </H3Style>
    )
}
