import React from "react";

export enum ButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
}

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export interface ButtonProps {
    children: React.ReactNode | string;
    type?: ButtonType;
    size?: ButtonSize;
    onClick?: () => void;
}
