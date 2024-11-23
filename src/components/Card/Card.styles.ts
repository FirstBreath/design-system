import styled from "styled-components";

/**
 * Styled component for Card
 * @returns {JSX.Element} The styled Card component
 */
export const Card = styled.div`
    padding: 24px;
    gap: 40px;

    border-radius: ${({theme}) => theme.borderRadius};
    background: ${({theme}) => theme.colors.surface};
`;