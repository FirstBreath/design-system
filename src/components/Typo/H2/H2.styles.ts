import styled from 'styled-components';

export const H2Style = styled.h2`
    font-family: ${({ theme }) => theme.typographies.h2.fontFamily};
    font-size: ${({ theme }) => theme.typographies.h2.fontSize};
    font-weight: ${({ theme }) => theme.typographies.h2.fontWeight};
    font-style: ${({ theme }) => theme.typographies.h2.fontStyle};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: ${({ theme }) => theme.typographies.h2.lineHeight};
    letter-spacing: ${({ theme }) => theme.typographies.h2.letterSpacing};
    margin: 0;
    text-align: center;
`;
