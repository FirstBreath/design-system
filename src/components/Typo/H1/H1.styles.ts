import styled from 'styled-components';

export const H1Style = styled.h1`
    font-family: ${({ theme }) => theme.typographies.h1.fontFamily};
    font-size: ${({ theme }) => theme.typographies.h1.fontSize};
    font-weight: ${({ theme }) => theme.typographies.h1.fontWeight};
    font-style: ${({ theme }) => theme.typographies.h1.fontStyle};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: ${({ theme }) => theme.typographies.h1.lineHeight};
    letter-spacing: ${({ theme }) => theme.typographies.h1.letterSpacing};
    text-align: center;
    margin: 0;
`;
