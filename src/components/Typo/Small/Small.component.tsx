import React from 'react';
import {SmallProps} from "./Small.types";
import {SmallStyle} from "./Small.styles";

export const Small = ({children}: SmallProps) => {
    return (
        <SmallStyle>
            {children}
        </SmallStyle>
    )
}
