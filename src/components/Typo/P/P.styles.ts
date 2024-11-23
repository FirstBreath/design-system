import styled from "styled-components";
import {PProps} from "./P.types";

/**
 * Styled component for P (paragraph) element
 * @returns {JSX.Element} The styled P component
 */
export const P = styled.p<PProps>`
    font-family: ${({theme}) => theme.typographies.p.fontFamily};
    font-size: ${({theme}) => theme.typographies.p.fontSize};
    font-weight: ${({theme}) => theme.typographies.p.fontWeight};
    font-style: ${({theme}) => theme.typographies.p.fontStyle};
    color: ${({theme}) => theme.colors.textSecondary};
    line-height: ${({theme}) => theme.typographies.p.lineHeight};
    letter-spacing: ${({theme}) => theme.typographies.p.letterSpacing};
    text-align: center;
`;