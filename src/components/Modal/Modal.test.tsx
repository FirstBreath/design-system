import React from "react";
import {fireEvent, screen} from "@testing-library/react";
import {Modal} from "./Modal.component";
import {renderWithTheme} from "../../utils/renderWithTheme";

describe('Modal Component', () => {
    test('renders content when open', () => {
        const content = 'hello there';
        renderWithTheme(<Modal isOpen={true} onClose={() => {
        }}>{content}</Modal>);

        const contentElement = screen.getByText(content);
        expect(contentElement).toBeInTheDocument();
    });

    test('does not render content when closed', () => {
        const content = 'hello there';
        renderWithTheme(<Modal isOpen={false} onClose={() => {
        }}>{content}</Modal>);

        const contentElement = screen.queryByText(content);
        expect(contentElement).not.toBeInTheDocument();
    });

    test('calls onClose when backdrop is clicked', () => {
        const handleClose = jest.fn();
        renderWithTheme(<Modal isOpen={true} onClose={handleClose}>hello there</Modal>);

        const backdropElement = screen.getByTestId('backdrop');
        fireEvent.click(backdropElement);

        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    test('does not call onClose when modal content is clicked', () => {
        const handleClose = jest.fn();
        renderWithTheme(<Modal isOpen={true} onClose={handleClose}>hello there</Modal>);

        const modalContentElement = screen.getByTestId('modal-content');
        fireEvent.click(modalContentElement);

        expect(handleClose).not.toHaveBeenCalled();
    });

    test('calls onClose when close button is clicked', () => {
        const handleClose = jest.fn();
        renderWithTheme(<Modal isOpen={true} onClose={handleClose}>hello there</Modal>);

        const closeButtonElement = screen.getByText('×');
        fireEvent.click(closeButtonElement);

        expect(handleClose).toHaveBeenCalledTimes(1);
    });
});