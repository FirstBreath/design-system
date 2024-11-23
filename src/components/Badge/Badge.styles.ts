import styled, {css} from "styled-components";
import {BadgeColors, BadgeProps, BadgeSizes, BadgeTypes} from "./Badge.types";

/**
 * CSS styles for different badge colors
 */
const Colors = {
    [BadgeColors.PRIMARY]: css`
        background: ${({theme}) => theme.colors.primary};
    `,
    [BadgeColors.SECONDARY]: css`
        background: ${({theme}) => theme.colors.secondary};
    `,
    [BadgeColors.SUCCESS]: css`
        background: ${({theme}) => theme.colors.success};
    `,
    [BadgeColors.DANGER]: css`
        background: ${({theme}) => theme.colors.error};
    `,
}

/**
 * CSS styles for different badge types
 */
const Types = {
    [BadgeTypes.BADGE]: css`
        border-radius: ${({theme}) => theme.borderRadius};
    `,
    [BadgeTypes.PILL]: css`
        border-radius: 9999px;
    `,
}

/**
 * CSS styles for different badge sizes
 */
const Sizes = {
    [BadgeSizes.SMALL]: css`
        padding: ${({theme}) => theme.spacing(1)} ${({theme}) => theme.spacing(2)};
    `,
    [BadgeSizes.MEDIUM]: css`
        padding: ${({theme}) => theme.spacing(2)} ${({theme}) => theme.spacing(3)};
    `,
    [BadgeSizes.LARGE]: css`
        padding: ${({theme}) => theme.spacing(3)} ${({theme}) => theme.spacing(4)};
    `,
}

/**
 * Styled component for Badge
 * @param {BadgeProps} props - The props for the Badge component
 * @returns {JSX.Element} The styled Badge component
 */
export const Badge = styled.div<BadgeProps>`
    ${({color}) => Colors[color ?? BadgeColors.PRIMARY]};
    ${({type}) => Types[type ?? BadgeTypes.BADGE]};
    ${({size}) => Sizes[size ?? BadgeSizes.MEDIUM]};

    color: ${({theme}) => theme.colors.background};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({theme}) => theme.typographies.p.fontFamily};
    font-size: ${({
                      theme,
                      size
                  }) => size == BadgeSizes.SMALL ? theme.typographies.small.fontSize : theme.typographies.p.fontSize};
    font-weight: 600;
    line-height: 24px;
    margin: 0;
`;
