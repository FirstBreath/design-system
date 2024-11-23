import styled from 'styled-components';

export const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    align-self: stretch;
    width: 100%;
    overflow: hidden;
`;

export const SliderElementsContainer = styled.div<{ length: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s ease-in-out;
    width: ${(props) => props.length * 100}%;
`;

export const SliderElement = styled.div<{ translate: string }>`
    transform: translateX(${({ translate }) => translate});
    transition: transform 0.5s ease;
    width: 100%;
`;
