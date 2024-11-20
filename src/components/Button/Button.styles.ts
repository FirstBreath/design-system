import styled, {css} from "styled-components";
import {ButtonSize, ButtonType} from "./Button.types";

const ButtonStylePrimary = css`
    border: none;
    background: ${({theme}) => theme.colors.primary};

    &:hover {
        background: ${({theme}) => theme.primarySwatch[600]};
    }
`;

const ButtonStyleSecondary = css`
    border: none;
    background: ${({theme}) => theme.colors.secondary};

    &:hover {
        background: ${({theme}) => theme.primarySwatch[400]};
    }
`;

const ButtonStyleTertiary = css`
    border: 1px solid ${({theme}) => theme.colors.border};
    background: ${({theme}) => theme.colors.background};

    &:hover {
        background: ${({theme}) => theme.colors.surface};
    }
`;

const ButtonStylesType = {
    [ButtonType.PRIMARY]: ButtonStylePrimary,
    [ButtonType.SECONDARY]: ButtonStyleSecondary,
    [ButtonType.TERTIARY]: ButtonStyleTertiary,
}

const ButtonSizeSmall = css`
    padding: ${({theme}) => theme.spacing(1)} 16px;
`;

const ButtonSizeMedium = css`
    padding: ${({theme}) => theme.spacing(2)} 16px;
`;

const ButtonSizeLarge = css`
    padding: ${({theme}) => theme.spacing(3)} 16px;
`;

const ButtonStylesSize = {
    [ButtonSize.SMALL]: ButtonSizeSmall,
    [ButtonSize.MEDIUM]: ButtonSizeMedium,
    [ButtonSize.LARGE]: ButtonSizeLarge,
}

export const ButtonStyle = styled.button <{ type: ButtonType, size: ButtonSize }>`
    ${({type}) => ButtonStylesType[type]};
    ${({size}) => ButtonStylesSize[size]};
    transition: all 0.5s;
    
    border-radius: 8px;
    cursor: pointer;
    box-shadow: ${({theme}) => theme.shadows.default};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
`;

export const ButtonText = styled.p<{ type: ButtonType, size: ButtonSize }>`
    color: ${({type, theme}) => type === ButtonType.TERTIARY ? theme.colors.primary : theme.colors.background};
    font-family: ${({theme}) => theme.typographies.p.fontFamily};
    font-size: ${({size}) => size === ButtonSize.SMALL ? '12px' : '16px'};
    font-style: ${({theme}) => theme.typographies.p.fontStyle};
    font-weight: 600;
    line-height: 24px;
    margin: 0;
`;