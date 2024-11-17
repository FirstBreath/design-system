import styled from "styled-components";

export const CardStyle = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;

    border-radius: ${({theme}) => theme.borderRadius};
    background: ${({theme}) => theme.colors.surface};
`;
