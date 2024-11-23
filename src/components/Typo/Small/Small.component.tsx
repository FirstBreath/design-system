import React from 'react';
import { SmallProps } from './Small.types';
import { SmallStyle } from './Small.styles';

/**
 * Small component
 * @param {React.ReactNode} children - The content to be displayed inside the Small element
 * @param {object} props - The rest of the props
 * @returns {JSX.Element} The rendered Small component
 */
export const Small: React.FC<SmallProps> = ({
    children,
    ...props
}: SmallProps): JSX.Element => {
    return <SmallStyle {...props}>{children}</SmallStyle>;
};
