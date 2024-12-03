import styled from 'styled-components';

/**
 * Styled component for Card
 * @returns {JSX.Element} The styled Card component
 */
export const Card = styled.div`
    padding: 24px;
    gap: 40px;

    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: #FFF;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.05);
`;