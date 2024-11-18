import React from 'react';
import {CardProps} from "./Card.types";
import {CardStyle} from "./Card.styles";

export const Card = ({children}: CardProps) => {
    return (
        <CardStyle>
            {children}
        </CardStyle>
    )
}
