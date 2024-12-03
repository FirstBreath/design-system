import styled from 'styled-components';

export const DropdownContainer = styled.div`
    position: relative;
    font-family: Arial, sans-serif;
`;

export const DropdownHeader = styled.button`
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const Arrow = styled.span<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.5s ease;
`;

export const DropdownList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadows.default};
    z-index: 1000;
`;

export const DropdownItem = styled.li`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.surface};
    }
`;

export const DropdownItemButton = styled.button`
    background: none;
    border: none;
    color: inherit;
    font-size: inherit;
    cursor: pointer;
`;