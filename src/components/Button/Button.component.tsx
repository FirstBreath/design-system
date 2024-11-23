import React from 'react';
import {ButtonProps, ButtonSize, ButtonType} from "./Button.types";
import {ButtonStyle, ButtonText} from "./Button.styles";

/**
 * Button component
 * @param {React.ReactNode | string} children - The content of the button
 * @param {ButtonType} [type=ButtonType.PRIMARY] - The type of the button
 * @param {ButtonSize} [size=ButtonSize.MEDIUM] - The size of the button
 * @param {() => void} onClick - The click event handler
 * @param {object} props - The rest of the props
 * @returns {JSX.Element} The rendered button component
 */
const ButtonComponent: React.FC<ButtonProps> = ({
                                                    children,
                                                    type = ButtonType.PRIMARY,
                                                    size = ButtonSize.MEDIUM,
                                                    onClick,
                                                    ...props
                                                }: ButtonProps): JSX.Element => {
    return (
        <ButtonStyle
            {...props}
            type={type}
            size={size}
            onClick={onClick}
        >
            <ButtonText
                type={type}
                size={size}
            >{children}</ButtonText>
        </ButtonStyle>
    )
}

export const Button = Object.assign(ButtonComponent, {
    ButtonType,
    ButtonSize,
});