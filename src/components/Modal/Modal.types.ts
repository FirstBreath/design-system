import React from 'react';

export interface ModalProps {
    /** Determines if the modal is open */
    isOpen: boolean;
    /** The function to call when the modal is closed */
    onClose: () => void;
    /** The content of the modal */
    children: React.ReactNode;
}
