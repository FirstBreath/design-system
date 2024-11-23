import styled from "styled-components";
import {H3Props} from "./H3.types";

/**
 * Styled component for H3 element
 * @returns {JSX.Element} The styled H3 component
 */
export const H3 = styled.div<H3Props>`
    font-family: ${({theme}) => theme.typographies.h3.fontFamily};
    font-size: ${({theme}) => theme.typographies.h3.fontSize};
    font-weight: ${({theme}) => theme.typographies.h3.fontWeight};
    font-style: ${({theme}) => theme.typographies.h3.fontStyle};
    color: ${({theme}) => theme.colors.textPrimary};
    line-height: ${({theme}) => theme.typographies.h3.lineHeight};
    letter-spacing: ${({theme}) => theme.typographies.h3.letterSpacing};
    text-align: center;
    margin: 0;
`;