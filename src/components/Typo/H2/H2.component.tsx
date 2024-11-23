import React from 'react';
import { H2Props } from './H2.types';
import { H2Style } from './H2.styles';

/**
 * H2 component
 * @param {React.ReactNode} children - The content to be displayed inside the H2 element
 * @param {object} props - The rest of the props
 * @returns {JSX.Element} The rendered H2 component
 */
export const H2: React.FC<H2Props> = ({
    children,
    ...props
}: H2Props): JSX.Element => {
    return <H2Style {...props}>{children}</H2Style>;
};
