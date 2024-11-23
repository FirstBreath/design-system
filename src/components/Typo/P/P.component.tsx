import React from 'react';
import { PProps } from './P.types';
import { PStyle } from './P.styles';

/**
 * P component
 * @param {React.ReactNode} children - The content to be displayed inside the P element
 * @param {object} props - The rest of the props
 * @returns {JSX.Element} The rendered P component
 */
export const P: React.FC<PProps> = ({
    children,
    ...props
}: PProps): JSX.Element => {
    return <PStyle {...props}>{children}</PStyle>;
};
