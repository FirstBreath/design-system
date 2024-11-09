import React from 'react';
import {HelloWorldProps} from "./HelloWorld.types";
import {HelloWorldStyle} from "./HelloWorld.styles";

export const HelloWorld = ({ content }: HelloWorldProps) => {
    return (
        <HelloWorldStyle>
            {content}
        </HelloWorldStyle>
    )
}