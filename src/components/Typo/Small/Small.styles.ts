import styled from "styled-components";

/**
 * Styled component for Small (span) element
 * @returns {JSX.Element} The styled Small component
 */
export const Small = styled.span`
    font-family: ${({theme}) => theme.typographies.small.fontFamily};
    font-size: ${({theme}) => theme.typographies.small.fontSize};
    font-weight: ${({theme}) => theme.typographies.small.fontWeight};
    font-style: ${({theme}) => theme.typographies.small.fontStyle};
    color: ${({theme}) => theme.colors.textSecondary};
    line-height: ${({theme}) => theme.typographies.small.lineHeight};
    letter-spacing: ${({theme}) => theme.typographies.small.letterSpacing};
    text-align: center;
`;
