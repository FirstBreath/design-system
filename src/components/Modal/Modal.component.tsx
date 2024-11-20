import React from 'react';
import {ModalProps} from "./Modal.types";
import {Backdrop, CloseButton, ModalContent} from "./Modal.styles";

export const Modal = ({isOpen, onClose, children, ...props}: ModalProps) => {
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
}
