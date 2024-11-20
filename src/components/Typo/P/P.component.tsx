import React from 'react';
import {PProps} from "./P.types";
import {PStyle} from "./P.styles";

export const P = ({children, ...props}: PProps) => {
    return (
        <PStyle {...props}>
            {children}
        </PStyle>
    )
}
