import React from 'react';
import {ButtonProps, ButtonSize, ButtonType} from "./Button.types";
import {ButtonStyle, ButtonText} from "./Button.styles";

const ButtonComponent = ({
                             children,
                             type = ButtonType.PRIMARY,
                             size = ButtonSize.MEDIUM,
                             onClick,
                             ...props
                         }: ButtonProps) => {
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