import React from 'react';
import { CardProps } from './Card.types';
import { CardStyle } from './Card.styles';

/**
 * Card component
 * @param {React.ReactNode} children - The content of the card
 * @param {object} props - The rest of the props
 * @returns {JSX.Element} The rendered card component
 */
export const Card: React.FC<CardProps> = ({
    children,
    ...props
}: CardProps): JSX.Element => {
    return <CardStyle {...props}>{children}</CardStyle>;
};
