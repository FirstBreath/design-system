import React from 'react';

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
    /** The content of the button */
    children: React.ReactNode | string;
    /** The type of the button */
    type?: ButtonType;
    /** The size of the button */
    size?: ButtonSize;
    /** The click event handler */
    onClick?: () => void;
}
