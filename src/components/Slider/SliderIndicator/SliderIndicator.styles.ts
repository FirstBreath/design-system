import styled from "styled-components";

export const SliderIndicatorContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const SliderIndicatorDot = styled.div<{ active: boolean }>`
    width: ${({active}) => active ? '50px' : '30px'};
    height: 5px;
    cursor: ${({active}) => active ? 'default' : 'pointer'};
    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: ${({theme}) => theme.shadows.default};
    transition-duration: 0.5s;
    background: ${({theme, active}) => active ? theme.colors.primary : theme.colors.surface};

    &:hover {
        background: ${({theme, active}) => active ? theme.colors.primary : theme.colors.secondary};
    }

`;