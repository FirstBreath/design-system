import React from 'react';
import {SmallProps} from "./Small.types";
import {SmallStyle} from "./Small.styles";

export const Small = ({children, ...props}: SmallProps) => {
    return (
        <SmallStyle {...props}>
            {children}
        </SmallStyle>
    )
}
