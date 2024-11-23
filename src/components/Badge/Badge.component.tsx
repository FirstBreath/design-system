import React from 'react';
import {BadgeColors, BadgeProps, BadgeSizes, BadgeTypes} from "./Badge.types";
import {BadgeStyle} from "./Badge.styles";

/**
 * Badge component
 * @param {React.ReactNode} children - The content of the badge
 * @param {BadgeTypes} [type=BadgeTypes.BADGE] - The type of the badge
 * @param {BadgeColors} [color=BadgeColors.PRIMARY] - The color of the badge
 * @param {BadgeSizes} [size=BadgeSizes.MEDIUM] - The size of the badge
 * @param {object} props - The rest of the props
 * @returns {JSX.Element} The rendered badge component
 */
const BadgeComponent: React.FC<BadgeProps> = ({
                                                  children,
                                                  type = BadgeTypes.BADGE,
                                                  color = BadgeColors.PRIMARY,
                                                  size = BadgeSizes.MEDIUM,
                                                  ...props
                                              }: BadgeProps): JSX.Element => {
    return (
        <BadgeStyle
            {...props}
            size={size}
            type={type}
            color={color}
        >
            {children}
        </BadgeStyle>
    );
};

export const Badge = Object.assign(BadgeComponent, {
    Types: BadgeTypes,
    Sizes: BadgeSizes,
    Colors: BadgeColors,
});