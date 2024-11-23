import styled, { css } from 'styled-components';
import { BadgeColors, BadgeSizes, BadgeTypes } from './Badge.types';

const Colors = {
    [BadgeColors.PRIMARY]: css`
        background: ${({ theme }) => theme.colors.primary};
    `,
    [BadgeColors.SECONDARY]: css`
        background: ${({ theme }) => theme.colors.secondary};
    `,
    [BadgeColors.SUCCESS]: css`
        background: ${({ theme }) => theme.colors.success};
    `,
    [BadgeColors.DANGER]: css`
        background: ${({ theme }) => theme.colors.error};
    `,
};

const Types = {
    [BadgeTypes.BADGE]: css`
        border-radius: ${({ theme }) => theme.borderRadius};
    `,
    [BadgeTypes.PILL]: css`
        border-radius: 9999px;
    `,
};

const Sizes = {
    [BadgeSizes.SMALL]: css`
        padding: ${({ theme }) => theme.spacing(1)}
            ${({ theme }) => theme.spacing(2)};
    `,
    [BadgeSizes.MEDIUM]: css`
        padding: ${({ theme }) => theme.spacing(2)}
            ${({ theme }) => theme.spacing(3)};
    `,
    [BadgeSizes.LARGE]: css`
        padding: ${({ theme }) => theme.spacing(3)}
            ${({ theme }) => theme.spacing(4)};
    `,
};

export const BadgeStyle = styled.div<{
    type: BadgeTypes;
    size: BadgeSizes;
    color: BadgeColors;
}>`
    ${({ color }) => Colors[color]};
    ${({ type }) => Types[type]};
    ${({ size }) => Sizes[size]};

    color: ${({ theme }) => theme.colors.background};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({ theme }) => theme.typographies.p.fontFamily};
    font-size: ${({ theme, size }) =>
        size == BadgeSizes.SMALL
            ? theme.typographies.small.fontSize
            : theme.typographies.p.fontSize};
    font-weight: 600;
    line-height: 24px;
    margin: 0;
`;
