import React from 'react';
import {ButtonProps, ButtonType} from "./Button.types";
import {ButtonStyle, ButtonText} from "./Button.styles";

const ButtonComponent = ({
                             content,
                             type = ButtonType.PRIMARY,
                             onClick,
                         }: ButtonProps) => {
    return (
        <ButtonStyle type={type} onClick={onClick}>
            <ButtonText type={type}>{content}</ButtonText>
        </ButtonStyle>
    )
}

export const Button = Object.assign(ButtonComponent, {
    ButtonType,
});