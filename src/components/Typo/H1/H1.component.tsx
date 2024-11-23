import React from 'react';
import {H1Props} from "./H1.types";
import {H1Style} from "./H1.styles";

/**
 * H1 component
 * @param {React.ReactNode} children - The content to be displayed inside the H1 element
 * @param {object} props - The rest of the props
 * @returns {JSX.Element} The rendered H1 component
 */
export const H1: React.FC<H1Props> = ({children, ...props}: H1Props): JSX.Element => {
    return (
        <H1Style {...props}>
            {children}
        </H1Style>
    );
};