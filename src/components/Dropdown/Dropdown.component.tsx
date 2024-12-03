import React from 'react';
import { DropdownProps, Option } from './Dropdown.types';
import {
    Arrow,
    DropdownContainer,
    DropdownHeader,
    DropdownItem,
    DropdownItemButton,
    DropdownList,
} from './Dropdown.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export const Dropdown = ({ options, placeholder, onSelect, defaultSelected, disabled, ...props }: DropdownProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<Option | null>(defaultSelected || null);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleSelect = (option: Option, index: number) => {
        setSelected(option);
        setIsOpen(false);
        onSelect(option, index);
    };

    return (
        <DropdownContainer {...props}>
            <DropdownHeader onClick={handleToggle} disabled={disabled}>
                {selected || placeholder || 'Select an option'}
                <Arrow isOpen={isOpen}>
                    <FontAwesomeIcon icon={faCaretDown} />
                </Arrow>
            </DropdownHeader>
            {isOpen && (
                <DropdownList>
                    {options.map((option, index) => (
                        <DropdownItem key={index} onClick={() => handleSelect(option, index)}>
                            <DropdownItemButton>{option}</DropdownItemButton>
                        </DropdownItem>
                    ))}
                </DropdownList>
            )}
        </DropdownContainer>
    );
};
