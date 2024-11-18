import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Card } from "./Card.component";
import { CardProps } from "./Card.types";

export default {
    title: "Components/Card",
    component: Card,
    argTypes: {
        content: { control: "text" },
    },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    content: "Hello, World!",
};
