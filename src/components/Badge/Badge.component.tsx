import React from 'react';
import {BadgeColors, BadgeProps, BadgeSizes, BadgeTypes} from "./Badge.types";
import {BadgeStyle} from "./Badge.styles";

const BadgeComponent = ({
                            children,
                            type = BadgeTypes.BADGE,
                            color = BadgeColors.PRIMARY,
                            size = BadgeSizes.MEDIUM,
                            ...props
                        }: BadgeProps) => {
    return (
        <BadgeStyle
            {...props}
            size={size}
            type={type}
            color={color}
        >
            {children}
        </BadgeStyle>
    )
}

export const Badge = Object.assign(BadgeComponent, {
    Types: BadgeTypes,
    Sizes: BadgeSizes,
    Colors: BadgeColors,
})
