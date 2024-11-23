import styled from 'styled-components';

export const CardStyle = styled.div`
    padding: 24px;
    gap: 40px;

    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.colors.surface};
`;
