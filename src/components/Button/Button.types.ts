export enum ButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export interface ButtonProps {
    content: string;
    type?: ButtonType;
    onClick?: () => void;
}
