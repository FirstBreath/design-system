import styled from "styled-components";
import {H2Props} from "./H2.types";

/**
 * Styled component for H2 element
 * @returns {JSX.Element} The styled H2 component
 */
export const H2 = styled.h2<H2Props>`
    font-family: ${({theme}) => theme.typographies.h2.fontFamily};
    font-size: ${({theme}) => theme.typographies.h2.fontSize};
    font-weight: ${({theme}) => theme.typographies.h2.fontWeight};
    font-style: ${({theme}) => theme.typographies.h2.fontStyle};
    color: ${({theme}) => theme.colors.textPrimary};
    line-height: ${({theme}) => theme.typographies.h2.lineHeight};
    letter-spacing: ${({theme}) => theme.typographies.h2.letterSpacing};
    margin: 0;
    text-align: center;
`;