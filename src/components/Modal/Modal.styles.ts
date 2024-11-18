import styled from "styled-components";

// @ts-ignore
export const Backdrop = styled.div.attrs({'data-testid': 'backdrop'})`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

// @ts-ignore
export const ModalContent = styled.div.attrs({'data-testid': 'modal-content'})`
    background: ${({theme}) => theme.colors.surface};
    padding: 20px;
    border-radius: ${({theme}) => theme.borderRadius};
    width: 70%;
    position: relative;
    border: 1px solid ${({theme}) => theme.colors.border};

    // media queries to phone set width to 100%
    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
`;
