import styled from 'styled-components';

export const H3Style = styled.div`
    font-family: ${({ theme }) => theme.typographies.h3.fontFamily};
    font-size: ${({ theme }) => theme.typographies.h3.fontSize};
    font-weight: ${({ theme }) => theme.typographies.h3.fontWeight};
    font-style: ${({ theme }) => theme.typographies.h3.fontStyle};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: ${({ theme }) => theme.typographies.h3.lineHeight};
    letter-spacing: ${({ theme }) => theme.typographies.h3.letterSpacing};
    text-align: center;
    margin: 0;
`;
