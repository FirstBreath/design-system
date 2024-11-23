import styled from "styled-components";
import {H1Props} from "./H1.types";

/**
 * Styled component for H1 element
 * @returns {JSX.Element} The styled H1 component
 */
export const H1 = styled.h1<H1Props>`
    font-family: ${({theme}) => theme.typographies.h1.fontFamily};
    font-size: ${({theme}) => theme.typographies.h1.fontSize};
    font-weight: ${({theme}) => theme.typographies.h1.fontWeight};
    font-style: ${({theme}) => theme.typographies.h1.fontStyle};
    color: ${({theme}) => theme.colors.textPrimary};
    line-height: ${({theme}) => theme.typographies.h1.lineHeight};
    letter-spacing: ${({theme}) => theme.typographies.h1.letterSpacing};
    text-align: center;
    margin: 0;
`;