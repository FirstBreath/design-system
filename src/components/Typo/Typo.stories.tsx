import React from "react";
import {Small} from "./Small";
import {Meta} from "@storybook/react";
import {H1} from "./H1";
import {H2} from "./H2";
import {P} from "./P";
import {H3} from "./H3";

export default {
    title: "Components/Typo",
    subcomponents: {
        H1,
        H2,
        H3,
        P,
        Small,
    },
    argTypes: {
        children: {
            control: "text",
        },
    },
} as Meta;

export const All = (args: { children: string }) => (
    <div style={{
        display: "flex",
        flexDirection: "column",
    }}>
        <H1 {...args} />
        <H2 {...args} />
        <H3 {...args}/>
        <P {...args}/>
        <Small {...args}/>
    </div>
);

All.args = {
    children: "Hello, World!",
}