import React from 'react';
import {ModalProps} from "./Modal.types";
import {Backdrop, CloseButton, ModalContent} from "./Modal.styles";

/**
 * Modal component
 * @param {boolean} isOpen - Determines if the modal is open
 * @param {() => void} onClose - The function to call when the modal is closed
 * @param {React.ReactNode} children - The content of the modal
 * @param {object} props - The rest of the props
 * @returns {JSX.Element | null} The rendered modal component or null if not open
 */
export const Modal: React.FC<ModalProps> = ({isOpen, onClose, children, ...props}: ModalProps): JSX.Element | null => {
    if (!isOpen) {
        return null;
    }

    return (
        <Backdrop onClick={onClose} {...props}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                {children}
            </ModalContent>
        </Backdrop>
    );
};