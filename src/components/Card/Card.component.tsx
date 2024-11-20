import React from 'react';
import {CardProps} from "./Card.types";
import {CardStyle} from "./Card.styles";

export const Card = ({children, ...props}: CardProps) => {
    return (
        <CardStyle {...props}>
            {children}
        </CardStyle>
    )
}
