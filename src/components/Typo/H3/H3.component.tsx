import React from 'react';
import {H3Props} from "./H3.types";
import {H3Style} from "./H3.styles";

/**
 * H3 component
 * @param {React.ReactNode} children - The content to be displayed inside the H3 element
 * @param {object} props - The rest of the props
 * @returns {JSX.Element} The rendered H3 component
 */
export const H3: React.FC<H3Props> = ({children, ...props}: H3Props): JSX.Element => {
    return (
        <H3Style {...props}>
            {children}
        </H3Style>
    );
};