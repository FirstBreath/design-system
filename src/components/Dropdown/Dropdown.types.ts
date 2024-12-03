import React from 'react';

export type Option = React.ReactNode | string

export interface DropdownProps {
    options: Option[];
    placeholder?: string;
    onSelect: (option: Option, index?: number) => void;
    defaultSelected?: Option;
    disabled?: boolean;
}
