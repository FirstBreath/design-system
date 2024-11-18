import React from "react";

export interface InputsProps {
    label: string;
    placeholder: string;
    type?: React.HTMLInputTypeAttribute,
    isError?: boolean;
    onChange?: (value: string) => void;
    validate?: (value: string) => string | null;
}