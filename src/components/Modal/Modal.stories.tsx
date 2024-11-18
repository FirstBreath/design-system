import React from "react";
import {Meta} from "@storybook/react";
import {Modal} from "./Modal.component";
import {Button} from "../Button";

export default {
    title: "Components/Modal",
    component: Modal,
    argTypes: {
        content: {control: "text"},
    },
} as Meta;

export const Default = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{
            display: 'flex'
        }}>
            <Button onClick={toggleModal}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={toggleModal}>
                <h2>Hello, World!</h2>
            </Modal>
        </div>
    );
};
