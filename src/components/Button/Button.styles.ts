import styled, {css} from "styled-components";
import {ButtonType} from "./Button.types";

const ButtonStylePrimary = css`
    border: 1px solid ${({theme}) => theme.colors.primary};
    background: ${({theme}) => theme.colors.primary};
`;

const ButtonStyleSecondary = css`
    border: 1px solid ${({theme}) => theme.colors.border};
    background: ${({theme}) => theme.colors.surface};
`;

const ButtonStyles = {
    [ButtonType.PRIMARY]: ButtonStylePrimary,
    [ButtonType.SECONDARY]: ButtonStyleSecondary,
}

export const ButtonStyle = styled.div<{ type: ButtonType }>`
    ${({type}) => ButtonStyles[type]};
    border-radius: 8px;
    cursor: pointer;
    padding: 10px ${({theme}) => theme.spacing(1)};
    box-shadow: ${({theme}) => theme.shadows.default};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
`;

export const ButtonText = styled.p<{ type: ButtonType }>`
    color: ${({type, theme}) => theme.colors[type === ButtonType.PRIMARY ? 'background' : 'textPrimary']};
    font-family: ${({theme}) => theme.typographies.p.fontFamily};
    font-size: 16px;
    font-style: ${({theme}) => theme.typographies.p.fontStyle};
    font-weight: 600;
    line-height: 24px;
    margin: 0;
`;