import React from 'react';
import {InputsProps} from "./Inputs.types";
import {Input, InputWrapper, Label} from "./Inputs.styles";

export const Inputs = ({label, placeholder, onChange, validate}: InputsProps) => {
    const [error, setError] = React.useState<string | null>()
    return (
        <InputWrapper>
            <Label>{label}</Label>
            <Input
                isError={!!error}
                type="text"
                placeholder={placeholder}
                onChange={(event) => {
                    onChange && onChange(event.target.value);
                    setError(validate && validate(event.target.value));
                }}/>
            <span>{error ?? error}</span>
        </InputWrapper>
    )
}
