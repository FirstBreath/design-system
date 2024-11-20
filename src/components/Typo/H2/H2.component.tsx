import React from 'react';
import {H2Props} from "./H2.types";
import {H2Style} from "./H2.styles";

export const H2 = ({children, ...props}: H2Props) => {
    return (
        <H2Style {...props}>
            {children}
        </H2Style>
    )
}
