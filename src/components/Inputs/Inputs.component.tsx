import React from 'react';
import {InputsProps} from "./Inputs.types";
import {ErrorMessage, InputStyle, InputWrapper, Label} from "./Inputs.styles";

export const Input: React.FC<InputsProps> = ({label, placeholder, onChange, type, validate, ...props}) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
        if (validate) {
            setError(validate(newValue));
        }
    };

    return (
        <InputWrapper {...props}>
            <Label>{label}</Label>
            <InputStyle
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                isError={!!error}
                type={type}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputWrapper>
    );
};